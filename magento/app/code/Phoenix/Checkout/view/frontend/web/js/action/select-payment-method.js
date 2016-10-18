define(
    [
        'Magento_Checkout/js/model/quote',
        'Magento_Checkout/js/model/full-screen-loader',
        'jquery',
        'Magento_Checkout/js/action/get-totals',
        'Magento_Theme/js/common'
    ],
    function(quote, fullScreenLoader, jQuery, getTotalsAction, common) {
        'use strict';
        return function (paymentMethod) {
            quote.paymentMethod(paymentMethod);

            fullScreenLoader.startLoader();
            var baseURL = common.getBaseURL();
            baseURL = baseURL.replace(/\/$/, '');
            var url = baseURL + '/phoenix_checkout/checkout/applyPaymentMethod';
            jQuery.ajax(url, {
                data: { payment_method: paymentMethod },
                complete: function () {
                    getTotalsAction([]);
                    fullScreenLoader.stopLoader();
                }
            });

        }
    }
);