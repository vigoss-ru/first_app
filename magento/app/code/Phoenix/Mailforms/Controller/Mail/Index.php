<?php
/**
 * Created by Phoenix Media
 * http://www.phoenix-media.eu/
 * Date: 18.07.2016
 * Time: 12:19
 */
namespace Phoenix\Mailforms\Controller\Mail;

class Index extends \Magento\Contact\Controller\Index
{
    /**
     * Show Contact Us page
     *
     * @return void
     */
    public function execute()
    {
        $this->_view->loadLayout();
        $this->_view->renderLayout();
    }
}