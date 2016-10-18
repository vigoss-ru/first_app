<?php
/**
 * Created by PhpStorm.
 * User: Hong
 * Date: 06.08.2016
 * Time: 16:10
 */

namespace Phoenix\Paymentfilter\Model\Source;

use \Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\App\ResourceConnection;
use Magento\Framework\App\ResponseInterface;
use \Magento\Payment\Model\Config;

class Paymentmethods implements \Magento\Framework\Option\ArrayInterface {

    protected $_appConfigScopeConfigInterface;

    protected $_paymentModelConfig;

    protected $resourceConnection;

    public function __construct(
        ScopeConfigInterface $appConfigScopeConfigInterface,
        Config $paymentModelConfig, ResourceConnection $resourceConnection)
    {
        $this->_appConfigScopeConfigInterface = $appConfigScopeConfigInterface;
        $this->_paymentModelConfig = $paymentModelConfig;
        $this->resourceConnection = $resourceConnection;
    }

    public function toOptionArray()
    {
        $payments = $this->_paymentModelConfig->getActiveMethods();
        $methods = array();
        $os = array("paypal_billing_agreement", "free");
        foreach ($payments as $paymentCode=>$paymentModel)
        {
            if (!in_array($paymentCode, $os)) {
                $paymentTitle = $this->_appConfigScopeConfigInterface->getValue('payment/' . $paymentCode . '/title');
                $methods[$paymentCode] = array(
                    'label' => $paymentTitle,
                    'value' => $paymentCode
                );
            }
        }
        return $methods;
    }

    public function selectedPayments() {
        $om = \Magento\Framework\App\ObjectManager::getInstance();
        $save = $om->get('Magento\Customer\Controller\Adminhtml\Group\Save');
        $resourceConnection = $om->get('Magento\Framework\App\ResourceConnection');
        $conn = $resourceConnection->getConnection();
        $id = $save->getRequest()->getParam('id');
        $select = $conn->select()
            ->from(
                ['cg' => 'customer_group']
            )
            ->where('cg.customer_group_id=?', $id);
        $data = $conn->fetchAll($select);
        foreach ($data as $item){
            $payments = explode(",", $item['payment_method']);
        }
        return $payments;
    }

}