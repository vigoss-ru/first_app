<?php
/**
 * Created by Phoenix Media
 * http://www.phoenix-media.eu/
 * Date: 02.08.2016
 * Time: 16:56
 */
namespace Phoenix\Checkout\Block;

use Magento\Framework\View\Element\Template;

class Action extends Template {

    /**
     * @param Template\Context $context
     * @param array $data
     */
    public function __construct(Template\Context $context, array $data = [])
    {
        parent::__construct($context, $data);
        $this->_isScopePrivate = true;
    }

    public function getApplyPaymentMethod() {
        return $this->getUrl('phoenix_checkout/checkout/applyPaymentMethod', ['_secure' => true]);
    }
}