<?php
/**
 * Created by Phoenix Media
 * http://www.phoenix-media.eu/
 * Date: 18.07.2016
 * Time: 16:14
 */

namespace Phoenix\Mailforms\Controller\Index;

class Contact extends \Magento\Contact\Controller\Index {

    const XML_PATH_EMAIL_TEMPLATE = 'phoenix_mailforms/contact/email_template';

    const XML_PATH_EMAIL_SENDER = 'phoenix_mailforms/contact/sender_email_identity';

    const XML_PATH_EMAIL_RECIPIENT = 'contact/email/recipient_email';

    public function execute() {
        try {
            $post = $this->getRequest()->getPostValue();
            $postObject = new \Magento\Framework\DataObject();
            $postObject->setData($post);

            $storeScope = \Magento\Store\Model\ScopeInterface::SCOPE_STORE;
            $transport = $this->_transportBuilder
                ->setTemplateIdentifier($this->scopeConfig->getValue(self::XML_PATH_EMAIL_TEMPLATE, $storeScope))
                ->setTemplateOptions(
                    [
                        'area' => \Magento\Framework\App\Area::AREA_FRONTEND,
                        'store' => $this->storeManager->getStore()->getId(),
                    ]
                )
                ->setTemplateVars(['data' => $postObject])
                ->setFrom($this->scopeConfig->getValue(self::XML_PATH_EMAIL_SENDER, $storeScope))
                ->addTo($this->scopeConfig->getValue(self::XML_PATH_EMAIL_RECIPIENT, $storeScope))
                ->getTransport();

            $transport->sendMessage();
            $this->inlineTranslation->resume();
            $this->messageManager->addSuccess(
                __('Your inquiry was submitted and will be responded to as soon as possible. Thank you for contacting us.')
            );
            return ;
        } catch (\Exception $e) {
            $this->inlineTranslation->resume();
            $this->messageManager->addError(
                __('Unable to submit your request. Please, try again later.')
            );
            return ;
        }

    }
}