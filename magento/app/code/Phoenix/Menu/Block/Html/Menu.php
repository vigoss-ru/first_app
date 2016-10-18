<?php
/**
 * Created by Phoenix Media
 * http://www.phoenix-media.eu/
 * Date: 05.07.2016
 * Time: 16:51
 */

namespace Phoenix\Menu\Block\Html;

use Magento\Framework\View\Element\Template;
use Magento\Theme\Block\Html\Topmenu;


class Menu extends Topmenu {


    public function getHtml($outermostClass = '', $childrenWrapClass = '', $limit = 0) {
        $this->_eventManager->dispatch(
            'page_block_html_topmenu_gethtml_before',
            ['menu' => $this->_menu, 'block' => $this]
        );
        $html = $this->_getVerticalMenuHtmlAccordion($this->_menu);
        return $html;
    }

    public function _getVerticalMenuHtmlAccordion(
        \Magento\Framework\Data\Tree\Node $menuTree) {
        $html = '';
        $children = $menuTree->getChildren();
        foreach ($children as $child) {
            $html .= '<li>';
            if ($child->hasChildren()) {
                $html .= '<div>';
            }
            $html .= '<a href="'.$child->getUrl().'">'.$this->escapeHtml($child->getName()).'</a>';
            if ($child->hasChildren()) {
                $html .= '</div>';
            }
            $html .= $this->_addSubVerticalMenuAccordion($child);
            $html .= '</li>';
        }
        return $html;
    }

    public function _addSubVerticalMenuAccordion($child) {
        $html = '';
        if (!$child->hasChildren()) {
            return $html;
        }
        $html .= '<ul>';
        $html .= $this->_getVerticalMenuHtmlAccordion($child);
        $html .= '</ul>';
        return $html;
    }
}