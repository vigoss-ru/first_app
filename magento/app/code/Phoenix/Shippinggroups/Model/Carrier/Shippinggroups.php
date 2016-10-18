<?php


namespace Phoenix\Shippinggroups\Model\Carrier;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\DataObject;
use Magento\Framework\Module\Dir;
use Magento\Shipping\Model\Carrier\AbstractCarrier;
use Magento\Shipping\Model\Carrier\CarrierInterface;
use Magento\Shipping\Model\Config;
use Magento\Shipping\Model\Rate\ResultFactory;
use Magento\Store\Model\ScopeInterface;
use Magento\Quote\Model\Quote\Address\RateResult\ErrorFactory;
use Magento\Quote\Model\Quote\Address\RateResult\Method;
use Magento\Quote\Model\Quote\Address\RateResult\MethodFactory;
use Magento\Quote\Model\Quote\Address\RateRequest;
use Psr\Log\LoggerInterface;


class Shippinggroups extends AbstractCarrier implements CarrierInterface {

    /**
     * Carrier's code
     *
     * @var string
     */
    protected $_code = 'shippinggroups';

    protected $_rates = array();

    /**
     * Whether this carrier has fixed rates calculation
     *
     * @var bool
     */
    protected $_isFixed = true;
    /**
     * @var ResultFactory
     */
    protected $_rateResultFactory;
    /**
     * @var MethodFactory
     */
    protected $_rateMethodFactory;
    /**
     * @param ScopeConfigInterface $scopeConfig
     * @param ErrorFactory $rateErrorFactory
     * @param LoggerInterface $logger
     * @param ResultFactory $rateResultFactory
     * @param MethodFactory $rateMethodFactory
     * @param array $data
     */
    public function __construct(
        ScopeConfigInterface $scopeConfig,
        ErrorFactory $rateErrorFactory,
        LoggerInterface $logger,
        ResultFactory $rateResultFactory,
        MethodFactory $rateMethodFactory,
        array $data = []
    ) {
        $this->_rateResultFactory = $rateResultFactory;
        $this->_rateMethodFactory = $rateMethodFactory;
        parent::__construct($scopeConfig, $rateErrorFactory, $logger, $data);
    }
    /**
     * Generates list of allowed carrier`s shipping methods
     * Displays on cart price rules page
     *
     * @return array
     * @api
     */
    public function getAllowedMethods()
    {
        return [$this->getCarrierCode() => __($this->getConfigData('name'))];
    }
    /**
     * Collect and get rates for storefront
     *
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     * @param RateRequest $request
     * @return DataObject|bool|null
     * @api
     */
    public function collectRates(RateRequest $request)
    {
        /**
         * Make sure that Shipping method is enabled
         */
        if (!$this->isActive()) {
            return false;
        }
        /** @var \Magento\Shipping\Model\Rate\Result $result */
        $result = $this->_rateResultFactory->create();

        $rate = $this->getRate($request);

        //$shippingPrice = $this->getConfigData('price');

        if (!empty($rate) && $rate['price'] >= 0) {
            $shippingPrice = $rate['price'];
        } else {
            $shippingPrice = $this->getConfigData('price');
        }

        $shippingPrice = $this->getFinalPriceWithHandlingFee($shippingPrice);

        $method = $this->_rateMethodFactory->create();
        /**
         * Set carrier's method data
         */
        $method->setCarrier($this->getCarrierCode());
        $method->setCarrierTitle($this->getConfigData('title'));
        /**
         * Displayed as shipping method under Carrier
         */
        $method->setMethod($this->getCarrierCode());
        $method->setMethodTitle($this->getConfigData('name'));
        $method->setPrice($shippingPrice);
        $method->setCost($shippingPrice);
        $result->append($method);
        return $result;
    }

    protected function getRate(RateRequest $request) {
        $om = \Magento\Framework\App\ObjectManager::getInstance();
        $rates = $this->getRateConfiguration($om);
        //$this->_logger->debug($rates['rates']['DE']['A'].'-'. $rates['rates']['default']['A']);
        $allItems = $request->getAllItems();
        $productIds = array();
        $shippingGroups = array();
        /** @var $item \Magento\Quote\Model\Quote\Item */
        foreach ($allItems as $item) {
            $product = $item->getProduct();
            $productIds[] = $product->getId();
        }
        $searchCriteriaBuilder = $om->get('Magento\Framework\Api\SearchCriteriaBuilder');
        $productRepository = $om->get('Magento\Catalog\Api\ProductRepositoryInterface');
        $searchCriteria = $searchCriteriaBuilder->addFilter('entity_id', $productIds, 'in')->create();
        $products = $productRepository->getList($searchCriteria)->getItems();
        foreach ($products as $product) {
            $optionId = $product->getData('versandgebuehren');
            $attr = $product->getResource()->getAttribute('versandgebuehren');
            if ($attr->usesSource()) {
                $optionText = $attr->getSource()->getOptionText($optionId);
                $shippingGroups[] = $optionText;
            }
        }
        // sort shipping groups alphabetically in reverse to get the "highest" value.
        // TODO: do this in attribute order (position)
        rsort($shippingGroups);
        $shippingGroup = array_shift($shippingGroups);

        $rate = array();
        if (isset($rates['rates'][$request->getDestCountryId()]) && isset($rates['rates'][$request->getDestCountryId()][$shippingGroup])) {
            $rate = array(
                'country' => $request->getDestCountryId(),
                'price' => $rates['rates'][$request->getDestCountryId()][$shippingGroup]
            );
        } elseif (isset($rates['rates']['default']) && isset($rates['rates']['default'][$shippingGroup])) {
            $rate = array(
                'country' => 'default',
                'price' => $rates['rates']['default'][$shippingGroup]
            );
        }
        // check for free shipping
        $packageValue = $request->getPackageValueWithDiscount();
        if (isset($rates['rates'][$request->getDestCountryId()]) &&
            isset($rates['rates'][$request->getDestCountryId()]['FREE']) &&
            $packageValue >= $rates['rates'][$request->getDestCountryId()]['FREE']) {
            $rate['price'] = 0;
        } elseif (isset($rates['rates']['default']) &&
            isset($rates['rates']['default']['FREE']) &&
            $packageValue >= $rates['rates']['default']['FREE']) {
            $rate['price'] = 0;
        }
        //$this->_logger->debug($rate['price'].'---'.$packageValue);
        return $rate;
    }

    public function getRateConfiguration($om) {
        $reader = $om->get('Magento\Framework\Module\Dir\Reader');
        $filePath = $reader->getModuleDir('etc', 'Phoenix_Shippinggroups').'/shippinggroups.xml';
        $parser = $om->get('Magento\Framework\Xml\Parser');
        $parsedArray = $parser->load($filePath)->xmlToArray();
        return $parsedArray;
    }

}
