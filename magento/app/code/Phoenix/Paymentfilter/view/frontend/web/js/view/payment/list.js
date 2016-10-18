/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'underscore',
    'ko',
    'mageUtils',
    'uiComponent',
    'Magento_Checkout/js/model/payment/method-list',
    'Magento_Checkout/js/model/payment/renderer-list',
    'uiLayout',
    'Magento_Checkout/js/model/checkout-data-resolver',
    'Magento_Theme/js/common'
], function (_, ko, utils, Component, paymentMethods, rendererList, layout, checkoutDataResolver, common) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Magento_Checkout/payment-methods/list',
            visible: paymentMethods().length > 0
        },

        /**
         * Initialize view.
         *
         * @returns {Component} Chainable.
         */
        initialize: function () {
            this._super().initChildren();
            var payments = getPaymentByCustomerGroup();
            translationCheckout();
            paymentMethods.subscribe(
                function (changes) {
                    checkoutDataResolver.resolvePaymentMethod();
                    //remove renderer for "deleted" payment methods
                    _.each(changes, function (change) {
                        if (change.status === 'deleted') {
                            this.removeRenderer(change.value.method);
                        }
                    }, this);
                    //add renderer for "added" payment methods
                    _.each(changes, function (change) {
                        if ((change.status === 'added' && payments.length == 0)
                                || (change.status === 'added' && payments.length>0 &&
                                        jQuery.inArray(change.value.method, payments) > -1)) {
                            this.createRenderer(change.value);
                        }
                    }, this);
                    addTranslation();
                }, this, 'arrayChange');
            return this;
        },

        /**
         * Create renders for child payment methods.
         *
         * @returns {Component} Chainable.
         */
        initChildren: function () {
            var self = this;
            _.each(paymentMethods(), function (paymentMethodData) {
                self.createRenderer(paymentMethodData);
            });

            return this;
        },

        /**
         * Create renderer.
         *
         * @param {Object} paymentMethodData
         */
        createRenderer: function (paymentMethodData) {
            var renderer = this.getRendererByType(paymentMethodData.method),
                rendererTemplate,
                rendererComponent,
                templateData;

            if (renderer) {
                templateData = {
                    parentName: this.name,
                    name: paymentMethodData.method
                };
                rendererTemplate = {
                    parent: '${ $.$data.parentName }',
                    name: '${ $.$data.name }',
                    displayArea: 'payment-method-items',
                    component: renderer.component
                };
                rendererComponent = utils.template(rendererTemplate, templateData);
                utils.extend(rendererComponent, {
                    item: paymentMethodData
                });
                layout([rendererComponent]);
            }
        },

        /**
         * Get renderer for payment method type.
         *
         * @param {String} paymentMethodCode
         * @returns {Object}
         */
        getRendererByType: function (paymentMethodCode) {
            var compatibleRenderer;
            _.find(rendererList(), function (renderer) {
                if (renderer.type === paymentMethodCode) {
                    compatibleRenderer = renderer;
                }
            });

            return compatibleRenderer;
        },

        /**
         * Remove view renderer.
         *
         * @param {String} paymentMethodCode
         */
        removeRenderer: function (paymentMethodCode) {
            var items = this.getRegion('payment-method-items');
            _.find(items(), function (value) {
                if (value.item.method === paymentMethodCode) {
                    value.disposeSubscriptions();
                    this.removeChild(value);
                }
            }, this);
        }
    });

    function getPaymentByCustomerGroup() {
        var payments = [];
        var baseURL = common.getBaseURL();
        baseURL = baseURL.replace(/\/$/, '');
        var url = baseURL + '/phoenix_paymentfilter/payment/paymentByCustomerGroup';
        jQuery.ajax(url,{
            dataType:'json',
            complete: function (data) {
                var json = jQuery.parseJSON(data.responseText);
                jQuery(json).each(function(i,val){
                    jQuery.each(val,function(k,v){
                        if(v.payment_method != null) {
                            var res = v.payment_method.split(',');
                            res.forEach(function(entry) {
                                payments.push(entry);
                            });
                        }
                    });
                });
            }
        });
        return payments;
    }

    // this one is not good solution, but when we upgrade to newest Magenton version, we shall remove that
    function addTranslation() {
        setTimeout(function(){
            jQuery('.payment-method-billing-address fieldset .field-select-billing .control select option').each(function (i) {
                if(jQuery(this).text() == 'New Address')
                    jQuery(this).text(jQuery('#textNewAddress').val());
            });
            jQuery('.payment-method-billing-address fieldset #billing-new-address-form .choice label span').html(jQuery('#textSaveNewAddress').val());
            jQuery('.payment-method-billing-address .billing-address-details button span').html(jQuery('#textEdit').val());
            jQuery('#checkout-payment-method-load .actions-toolbar button span').html(jQuery('#textPlaceOrder').val());
            jQuery('.billing-address-same-as-shipping-block label span').html(jQuery('#textBillingAddress').val());
            jQuery('.payment-method-title label .action-help span').html(jQuery('#textPaypalTitle').val());
            jQuery('#payment_form_paypal_express .payment-method-note span').html(jQuery('#textPaypalRedirect').val());
            jQuery('#payment_form_paypal_express label span span').html(jQuery('#textPaypalAgrement').val());
            jQuery('.payment-option .payment-option-title #block-discount-heading span').html(jQuery('#textDiscountCode').val());
            jQuery('.payment-option #discount-form #discount-code').attr("placeholder", jQuery('#textDiscountTextbox').val());
            jQuery('.payment-option #discount-form .actions-toolbar button span').html(jQuery('#textDiscountApply').val());
            jQuery('.opc-block-summary .items-in-cart .title strong span:nth-child(2)').html(jQuery('#textItemInCart').val());
            jQuery('.opc-block-shipping-information .shipping-information .ship-to .shipping-information-title span').html(jQuery('#textShipTo').val());
            jQuery('.opc-block-shipping-information .shipping-information .ship-via .shipping-information-title span').html(jQuery('#textShipMethod').val());
            jQuery('.modal-popup.agreements-modal .action-hide-popup span').html(jQuery('#textClose').val());
        }, 3000);
        setTimeout(function(){
            jQuery('.opc-block-summary .items-in-cart .minicart-items .product-item-details .details-qty .label span').html(jQuery('#textQty').val());
        }, 5000);

        jQuery('.payment-method-billing-address fieldset .actions-toolbar button').live('click', function() {
            setTimeout(function(){
                jQuery('.payment-method-billing-address .billing-address-details button span').html(jQuery('#textEdit').val());
            }, 100);
        });

    }

    function translationCheckout() {
        document.onreadystatechange = function () {
            translateAction();
        }
        translateAction();

    }

    function translateAction() {
        var totalTime;
        if (document.readyState == "complete") {
            totalTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
            setTimeout(function(){
                jQuery('ol#checkoutSteps li#shipping .step-title').html(jQuery('#textShippingAddress').val());
                jQuery('ol#checkoutSteps li#shipping button span').html(jQuery('#textNewAddress').val());
                jQuery('ol#checkoutSteps li#opc-shipping_method .step-title').html(jQuery('#textShippingMethods').val());
                jQuery('.opc-block-summary span:nth-child(1).title').html(jQuery('#textOrderSummary').val());
                jQuery('.opc-block-summary .items-in-cart .title strong span:nth-child(2)').html(jQuery('#textItemsInCart').val());
                jQuery('.opc-block-summary .table-totals .not-calculated').html(jQuery('#textNotCalculate').val());
                addRuleText();
                jQuery('.opc-block-summary .items-in-cart .minicart-items .product-item-details .details-qty .label span').html(jQuery('#textQty').val());
                // not login
                jQuery('#customer-email-fieldset .required label span').html(jQuery('#textEmailAddress').val());
                jQuery('#customer-email-fieldset .fieldset .field label span').html(jQuery('#textPassword').val());
                jQuery('#customer-email-fieldset .fieldset .field .control .note').html(jQuery('#textAlreadyAcc').val());
                jQuery('#customer-email-fieldset ._with-tooltip .note span').html(jQuery('#textCreateAcc').val());

                jQuery('ol#checkoutSteps li#shipping #customer-email-fieldset button span').html(jQuery('#textLogin').val());
                jQuery('#customer-email-fieldset .actions-toolbar .remind span').html(jQuery('#textForgotPassword').val());
                jQuery('.authentication-wrapper button span').html(jQuery('#textSignIn').val());
                jQuery('.block-customer-login .block-title strong').html(jQuery('#textSignIn').val());
                jQuery('.block-customer-login .actions-toolbar button span').html(jQuery('#textLogin').val());
                jQuery('.block-customer-login .block-content .field-email label span').html(jQuery('#textEmailAddress').val());
                jQuery('.block-customer-login .block-content .field-password label span').html(jQuery('#textPassword').val());
                jQuery('.block-customer-login .block-content .actions-toolbar .action-remind span').html(jQuery('#textForgotPassword').val());
                jQuery('#checkout .opc-progress-bar').css('display', 'block');
                jQuery('#checkout .opc-wrapper').css('display', 'block');
                jQuery('.opc-block-summary').css('display', 'block');

                jQuery('ol#checkoutSteps li#shipping button').click(function() {
                    jQuery('#co-shipping-form .field.choice label span').html(jQuery('#textSaveAddressBook').val());
                });

            }, totalTime+1000);
            setTimeout(function(){
                jQuery('#shipping-method-buttons-container button span span').html(jQuery('#textNext').val());
                jQuery('ul.opc-progress-bar li:nth-child(1) span').html(jQuery('#textShipping').val());
                jQuery('ul.opc-progress-bar li:nth-child(2) span').html(jQuery('#textReviewPayment').val());
            }, totalTime+2000);
        }
    }

    function addRuleText() {
        var addRule = function(sheet, selector, styles) {
            if (sheet.insertRule) return sheet.insertRule(selector + " {" + styles + "}", sheet.cssRules.length);
            if (sheet.addRule) return sheet.addRule(selector, styles);
        };
        addRule(document.styleSheets[0], ".opc-block-summary .minicart-items .price-excluding-tax:before", "content: '"+jQuery('#textExclTax').val()+"'");
    }


    // end not good solution

});
