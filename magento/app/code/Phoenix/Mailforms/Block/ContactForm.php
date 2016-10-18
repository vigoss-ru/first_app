<?php
/**
 * Created by Phoenix Media
 * http://www.phoenix-media.eu/
 * Date: 13.07.2016
 * Time: 15:17
 */
namespace Phoenix\Mailforms\Block;

use Magento\Framework\View\Element\Template;

class ContactForm extends Template{
    /**
     * @param Template\Context $context
     * @param array $data
     */
    public function __construct(Template\Context $context, array $data = [])
    {
        parent::__construct($context, $data);
        $this->_isScopePrivate = true;
    }

    /**
     * Returns action url for contact form
     *
     * @return string
     */
    public function getCallbackAction()
    {
        return $this->getUrl('contacts/index/callback', ['_secure' => true]);
    }

    public function getContactAction() {
        return $this->getUrl('contacts/index/contact', ['_secure' => true]);
    }
}