<?php

/**
 * Created by Phoenix Media
 * http://www.phoenix-media.eu/
 * Date: 02.08.2016
 * Time: 16:24
 */

namespace Phoenix\Paymentfilter\Controller\Payment;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magento\Framework\App\ResponseInterface;

class PaymentByCustomerGroup extends Action
{
    /**
     * @var \Magento\Framework\Controller\Result\JsonFactory
     */
    protected $resultJsonFactory;


    public function __construct(Context $context
        ,\Magento\Framework\Controller\Result\JsonFactory $resultJsonFactory)
    {
        $this->resultJsonFactory = $resultJsonFactory;
        parent::__construct($context);
    }


    /**
     * Dispatch request
     *
     * @return \Magento\Framework\Controller\ResultInterface|ResponseInterface
     * @throws \Magento\Framework\Exception\NotFoundException
     */
    public function execute()
    {
        // TODO: Implement execute() method.
        $om = \Magento\Framework\App\ObjectManager::getInstance();
        $customerSession = $om->get('Magento\Customer\Model\Session');
        $resourceConnection = $om->get('Magento\Framework\App\ResourceConnection');
        //if($customerSession->isLoggedIn()) {
            $id = $customerSession->getCustomer()->getGroupId();
        //}
        $conn = $resourceConnection->getConnection();
        $select = $conn->select()
            ->from(
                ['cg' => 'customer_group']
            )
            ->where('cg.customer_group_id=?', $id);
        $data = $conn->fetchAll($select);
        $result = $this->resultJsonFactory->create();
        $result->setData([$data]);
        return $result;
    }
}