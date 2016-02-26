$(document).ready(function() {
	$('#sh-address-option input[name=sh-billing-checkbox-address]').on('change', function() {
		var value = $('input[name=sh-billing-checkbox-address]:checked', '#sh-address-option').val();
		var obj = $('#sh-list-billing-address');
	    if(value == 0) {
			obj.animate({opacity: 0.0}, 500, function(){
				obj.css("display","none");
			});
	    } else if(value == 1) {
			obj.css({display:"block", opacity: 0.0}).animate({opacity: 1.0},800);
			$(window).scrollTop($(document).height());
	    }
	});
	
	$('#sh-list-delivery-address div[id^="sh-checkout-address-"] :radio').change(function () {
		$('#sh-list-delivery-address div[id^="sh-checkout-address-"] :radio').closest('div').css('border','solid 1px #A8A8A8');
		$('#sh-list-delivery-address div[id^="sh-checkout-address-"] :radio:checked').closest('div').css('border','solid 1px #DC281E');
	});
	
	$('#sh-list-billing-address div[id^="sh-checkout-address-"] :radio').change(function () {
		$('#sh-list-billing-address div[id^="sh-checkout-address-"] :radio').closest('div').css('border','solid 1px #A8A8A8');
		$('#sh-list-billing-address div[id^="sh-checkout-address-"] :radio:checked').closest('div').css('border','solid 1px #DC281E');
	});
	
});