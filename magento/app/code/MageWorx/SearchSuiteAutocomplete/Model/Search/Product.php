<?php
/**
 * Copyright © 2016 MageWorx. All rights reserved.
 * See LICENSE.txt for license details.
 */

namespace MageWorx\SearchSuiteAutocomplete\Model\Search;

use Magento\Framework\App\Helper\Context;
use \MageWorx\SearchSuiteAutocomplete\Helper\Data as HelperData;
use \Magento\Search\Helper\Data as SearchHelper;
use \Magento\Catalog\Model\Layer\Resolver as LayerResolver;
use \Magento\Framework\ObjectManagerInterface as ObjectManager;
use \Magento\Search\Model\QueryFactory;
use \MageWorx\SearchSuiteAutocomplete\Model\Source\AutocompleteFields;
use \MageWorx\SearchSuiteAutocomplete\Model\Source\ProductFields;

/**
 * Product model. Return product data used in search autocomplete
 * @package MageWorx\SearchSuiteAutocomplete\Model\Search
 */
class Product implements \MageWorx\SearchSuiteAutocomplete\Model\SearchInterface
{
    /**
     * @var \MageWorx\SearchSuiteAutocomplete\Helper\Data
     */
    protected $helperData;

    /**
     * @var \Magento\Search\Helper\Data
     */
    protected $searchHelper;

    /**
     * @var \Magento\Catalog\Model\Layer\Resolver
     */
    protected $layerResolver;

    /**
     * @var \Magento\Framework\ObjectManagerInterface
     */
    protected $objectManager;

    /**
     * @var \Magento\Search\Model\QueryFactory
     */
    private $queryFactory;

    /**
     * @var \Psr\Log\LoggerInterface
     */
    protected $_logger;

    /**
     * Product constructor.
     *
     * @param HelperData $helperData
     * @param SearchHelper $searchHelper
     * @param LayerResolver $layerResolver
     * @param ObjectManager $objectManager
     * @param QueryFactory $queryFactory
     */
    public function __construct(
        HelperData $helperData,
        SearchHelper $searchHelper,
        LayerResolver $layerResolver,
        ObjectManager $objectManager,
        QueryFactory $queryFactory,
        Context $context
    ) {
        $this->_logger = $context->getLogger();
        $this->helperData = $helperData;
        $this->searchHelper = $searchHelper;
        $this->layerResolver = $layerResolver;
        $this->objectManager = $objectManager;
        $this->queryFactory = $queryFactory;
    }

    /**
     * {@inheritdoc}
     */
    public function getResponseData()
    {
        $responseData['products']['data'] = [];

        if (!$this->canAddToResult()) {
            return $responseData;
        }

        $queryText = $this->queryFactory->get()->getQueryText();
        $productResultFields = $this->helperData->getProductResultFieldsAsArray();
        $productResultFields[] = ProductFields::URL;
        $productResultNumber = $this->helperData->getProductResultNumber();

        $this->layerResolver->create(LayerResolver::CATALOG_LAYER_SEARCH);

        $productCollection = $this->layerResolver->get()
            ->getProductCollection()
            ->addAttributeToSelect(['description', 'short_description'])
            ->addSearchFilter($queryText);
        $productCollection->getSelect()->limit($productResultNumber);

        foreach ($productCollection as $product) {
            //$responseData['products']['data'][] = array_intersect_key($this->getProductData($product), array_flip($productResultFields));
            $responseData['products']['data'][] = $this->getProductData($product);
        }

        $responseData['products']['size'] = $productCollection->getSize();
        $responseData['products']['url'] = ($productCollection->getSize() > 0) ? $this->searchHelper->getResultUrl($queryText) : '';

        return $responseData;
    }

    /**
     * Retrieve all product data
     *
     * @param \Magento\Catalog\Model\Product $product
     * @return array
     */
    protected function getProductData($product)
    {
        /** @var \MageWorx\SearchSuiteAutocomplete\Block\Autocomplete\Product $product */
        $product = $this->objectManager->create('MageWorx\SearchSuiteAutocomplete\Block\Autocomplete\Product')
            ->setProduct($product);

        $name = $product->getName();
        $sku = $product->getSku();
        $smallImage = $product->getSmallImage();
        //$reviewsRating = $product->getReviewsRating();
        $shortDescription = $product->getShortDescription();
        //$description = $product->getDescription();
        $price = $product->getPrice();
        $url = $product->getUrl();
        //$addToCart = $product->getAddToCartData();
        $data = [
            ProductFields::NAME => $name,
            ProductFields::SKU => $sku,
            ProductFields::IMAGE => $smallImage,
            //ProductFields::REVIEWS_RATING => $reviewsRating,
            ProductFields::SHORT_DESCRIPTION => $shortDescription,
            //ProductFields::DESCRIPTION => $description,
            ProductFields::PRICE => $price,
            //ProductFields::ADD_TO_CART => $addToCart,
            ProductFields::URL => $url
        ];

        return $data;
    }

    /**
     * {@inheritdoc}
     */
    public function canAddToResult()
    {
        return in_array(AutocompleteFields::PRODUCT, $this->helperData->getAutocompleteFieldsAsArray());
    }
}
