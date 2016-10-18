<?php
/**
 * Created by PhpStorm.
 * User: Hong
 * Date: 06.08.2016
 * Time: 15:58
 */

namespace Phoenix\Paymentfilter\Model\Plugin;

use Magento\Customer\Controller\RegistryConstants;
use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\App\ResourceConnection;
use Magento\Payment\Model\Config;
use Phoenix\Paymentfilter\Model\Source\Paymentmethods;

class Form extends Paymentmethods {

    /**
     * @var \Psr\Log\LoggerInterface
     */
    protected $_logger;

    public function __construct(
        ScopeConfigInterface $appConfigScopeConfigInterface,
        Config $paymentModelConfig,
        ResourceConnection $resourceConnection,
        \Psr\Log\LoggerInterface $logger)
    {
        $this->_logger = $logger;
        parent::__construct($appConfigScopeConfigInterface, $paymentModelConfig, $resourceConnection);
    }


    public function aftersetForm(
        \Magento\Customer\Block\Adminhtml\Group\Edit\Form $forma
        )
    {

        $form = $forma->getForm();
        $fieldset=$form->addFieldset('base1_fieldset', ['legend' => __('')]);
        $shipping = $fieldset->addField('payment_method',
            'multiselect',
            [
                'name' => 'payment_method',
                'label' => __('Payment Method'),
                'title' => __('Payment Method'),
                'class' => 'required-entry',
                'required' => true,
                'values' => $this->toOptionArray(),
                'value' => $this->selectedPayments()
            ]);

        return $form;
    } //this shows ok!

    public function beforeExecute(\Magento\Customer\Controller\Adminhtml\Group\Save $save)
    {
        $id = $save->getRequest()->getParam('id');
        if($id!="") {
            $payment = $save->getRequest()->getParam('payment_method');
            if ($payment != "") {
                $payment = implode(', ', $payment);
                $payment = rtrim($payment, ', ');
            }
            $payment = preg_replace('/\s+/', '', $payment);

            $db = $this->resourceConnection->getConnection();
            $result = $db->query('SELECT * FROM customer_group WHERE customer_group_id=' . $id);
            if($result->fetch()) {
                $update = $db->query('UPDATE customer_group SET payment_method="'.$payment.'" WHERE customer_group_id=' . $id);
            }
        }
    }
}