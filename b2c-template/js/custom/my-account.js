$(document).ready(function() {
	
	// for address in my account
	$('#sh-list-delivery-address div[id^="sh-account-address-delivery"] :radio').change(function () {
		$('#sh-list-delivery-address div[id^="sh-account-address-delivery"] :radio').closest('div').css('border','solid 1px #A8A8A8');
		$('#sh-list-delivery-address div[id^="sh-account-address-delivery"] :radio:checked').closest('div').css('border','solid 1px #DC281E');
	});
	$('#sh-list-billing-address div[id^="sh-account-address-billing"] :radio').change(function () {
		$('#sh-list-billing-address div[id^="sh-account-address-billing"] :radio').closest('div').css('border','solid 1px #A8A8A8');
		$('#sh-list-billing-address div[id^="sh-account-address-billing"] :radio:checked').closest('div').css('border','solid 1px #DC281E');
	});
});