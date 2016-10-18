define(
    ['jquery'],
    function ($) {
        'use strict';
        return {
            getBaseURL: function () {
                var baseURL = localStorage.getItem("baseURL");
                return baseURL;
            }
        }
    }
);
