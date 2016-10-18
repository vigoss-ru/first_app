<?php
/**
 * Created by Phoenix Media
 * http://www.phoenix-media.eu/
 * Date: 02.08.2016
 * Time: 16:24
 */
namespace Phoenix\Checkout\Controller\Checkout;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\ResponseInterface;

class ApplyPaymentMethod extends Action {

    /**
     * @var \Magento\Framework\Controller\Result\ForwardFactory
     */
    protected $resultForwardFactory;

    /**
     * @var \Magento\Framework\View\LayoutFactory
     */
    protected $layoutFactory;

    /**
     * @var \Magento\Checkout\Model\Cart
     */
    protected $cart;

    /**
     * @param \Magento\Framework\App\Action\Context $context
     * @param \Magento\Framework\View\LayoutFactory $layoutFactory
     * @param \Magento\Framework\Controller\Result\ForwardFactory $resultForwardFactory
     */
    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Framework\Controller\Result\ForwardFactory $resultForwardFactory,
        \Magento\Framework\View\LayoutFactory $layoutFactory,
        \Magento\Checkout\Model\Cart $cart
    ) {
        $this->resultForwardFactory = $resultForwardFactory;
        $this->layoutFactory = $layoutFactory;
        $this->cart = $cart;

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
        $pMethod = $this->getRequest()->getParam('payment_method');
        $quote = $this->cart->getQuote();
        $quote->getPayment()->setMethod($pMethod['method']);
        $quote->setTotalsCollectedFlag(false);
        $quote->collectTotals();
        $quote->save();
    }
}