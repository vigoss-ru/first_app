<?php
/**
 * Copyright © 2016 MageWorx. All rights reserved.
 * See LICENSE.txt for license details.
 */

namespace MageWorx\SearchSuiteAutocomplete\Model;

use \MageWorx\SearchSuiteAutocomplete\Model\SearchFactory;
use \MageWorx\SearchSuiteAutocomplete\Model\Source\AutocompleteFields;

/**
 * Search class returns needed search data
 * @package MageWorx\SearchSuiteAutocomplete\Model
 */
class Search
{
    /**
     * @var \MageWorx\SearchSuiteAutocomplete\Model\SearchFactory
     */
    protected $searchFactory;

    /**
     * Search constructor.
     * @param \MageWorx\SearchSuiteAutocomplete\Model\SearchFactory $searchFactory
     */
    public function __construct(
        SearchFactory $searchFactory
    ) {
    
        $this->searchFactory = $searchFactory;
    }

    /**
     * Retrieve suggested
     *
     * @return array
     */
    public function getSuggested()
    {
        return $this->searchFactory->create(AutocompleteFields::SUGGEST)
            ->getResponseData();
    }

    /**
     * Retrieve products
     *
     * @return array
     */
    public function getProducts()
    {
        return $this->searchFactory->create(AutocompleteFields::PRODUCT)
            ->getResponseData();
    }
}
