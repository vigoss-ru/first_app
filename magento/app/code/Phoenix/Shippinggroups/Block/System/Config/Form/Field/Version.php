<?php

namespace Phoenix\Shippinggroups\Block\System\Config\Form\Field;

use Magento\Framework\Data\Form\Element\AbstractElement;


class Version extends \Magento\Config\Block\System\Config\Form\Field {

    /**
     * @var \Phoenix\Shippinggroups\Helper\Data $helper
     */
    protected $_helper;

    /**
     * @param \Magento\Backend\Block\Template\Context $context
     * @param \Phoenix\Shippinggroups\Helper\Data $helper
     */
    public function __construct(
        \Magento\Backend\Block\Template\Context $context,
        \Phoenix\Shippinggroups\Helper\Data $helper
    ) {
        $this->_helper = $helper;
        parent::__construct($context);
    }

    /**
     * @param AbstractElement $element
     * @return string
     */
    protected function _getElementHtml(AbstractElement $element)
    {
        $extensionVersion   = $this->_helper->getExtensionVersion();
        $extensionTitle     = 'Shippinggroups';
        $versionLabel       = sprintf(
            '%s',
            $extensionVersion
        );
        $element->setValue($versionLabel);
        return $element->getValue();
    }

}