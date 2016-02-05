(function(window, undefined) {
  var dictionary = {
    "41a6dd46-6a5b-4c04-bf30-c05df8752763": "Register",
    "7b555f66-68ed-4142-bc52-39404940f1ef": "Orders",
    "e9b8e166-3537-47c7-aee6-9728940d3bac": "Registrieren_Op2",
    "bd4edc61-f5ea-4a94-821a-dbf1cae8e7ed": "ArticleList",
    "27e46f9e-7336-4ff1-b652-876a2b4091b8": "Registrieren_Op1",
    "2610ecbc-bdd9-463a-ba17-d3d8a7a3c51b": "Checkout-Address-2",
    "e4ddec8c-765d-48b9-9b9c-c3835c01cec0": "Return-Confirmation",
    "b16eaa97-b437-4b7b-9a28-5f35c97e91fd": "RecoverPassword",
    "84acc8f1-f817-4a44-b4a5-c6f54437d45a": "Paypal",
    "fda25cd7-b36a-43c6-81eb-fd838ff2c2bc": "ShoppingCart",
    "17c9434a-04e5-49d5-a731-55e0f78fb244": "ForgotPassword",
    "6ae8323f-d65b-45d6-b7fa-cb3f2b4a2b46": "Login",
    "c318d934-126e-457b-9afb-e9f59fcf7a05": "Checkout-Address",
    "e65ad567-89e4-4962-9a89-806d561fd911": "Checkout-Payment-2",
    "c31b8ba0-2e52-4516-9df9-1e08e6ab5c5e": "ArticleDetails",
    "37d20dc8-1882-4085-83c2-955114b26ea4": "Checkout-Summary",
    "dcf97696-fc7a-4e52-afda-be1b12dab0e2": "Documents",
    "574af066-e077-44dd-b33f-6c075e352fb8": "test 2",
    "82c0aa6d-feef-4551-a635-c016119352ec": "CleaningProducts",
    "fd94477b-7c27-4eec-ae28-d5173d26b5f2": "Checkout-Payment",
    "31b0bf0e-adf6-4b17-bcfe-0d99cd84cb2c": "Homepage",
    "2dfb3f17-7c90-4eb6-90e0-9b95c49ef215": "Checkout-Summary-2",
    "8135bfdf-d8ab-4732-9cec-b770a5704623": "Checkout-Confirmation",
    "97305882-2b62-498c-ac8d-4daa9f8c3e5c": "test",
    "33fee4a9-239b-4dae-8b22-abb1a16c2045": "Home",
    "83d179c2-f87d-4512-ad0d-bcb8db23bc8f": "Checkout-Register",
    "32f56c5e-5a93-4834-aaac-0cdc54c023e2": "Checkout-Guest",
    "ec440e69-0f78-4b87-8bc6-e8332b949495": "Retoure",
    "4156ad78-8224-42cf-b27f-0daa41cfcbac": "Checkout-Login",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "7519e27b-9635-44a6-94e9-aa122a526b61": "Temp-Checkout",
    "34991cae-d259-4092-83e9-d3d8b493c235": "Template 7",
    "26794a7f-62e2-4faa-ad54-2fc338d17e01": "Temp-ShoppingCart",
    "34bbde51-43b1-4a60-ab09-a7b00703c14c": "Template 6",
    "019671fb-bd29-4e35-883d-c2ba70cc6246": "Template 5",
    "a6d4f7cf-75dd-4c69-ac89-fea401d0bb88": "Template 3",
    "1a807fd0-5a84-4e56-9b23-19bb9eb4173d": "Template 2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "42a3a66d-e8de-4edc-8402-566eea065934": "Template 0",
    "8cfa954d-db2e-416a-80a6-e9184704dd04": "Template-main",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "6faa1c08-ed02-4cef-beb8-7e0ac34f5a91": "ShoppingCart",
    "099fc711-a7b8-4780-8657-e4be975adf87": "shoppingCartBoxCheckout",
    "e47948b9-a21b-4f48-a4b3-861286beae42": "loginMyAccount",
    "504af2ed-283a-4a86-a792-44160239a585": "footer2",
    "0afe5346-cf5e-40ff-8bdd-ec6f61e473ed": "shoppingCartBoxCheckoutContactInfo",
    "90349754-e2b8-47ea-85b5-7a33ff1ba7b7": "shoppingCartBoxCheckoutSummary",
    "f67d94ac-8561-4329-8c00-4ac61c9e531b": "footer"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);