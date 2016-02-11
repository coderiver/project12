$(document).ready(function() {

	// $.validate({
	// 	form : '#js-popup-form',
	// 	validateOnBlur: false, 
	// 	errorMessagePosition: 'top',
	// 	scrollToTopOnError: false 
	// });

	// mask
	$('.js-input-phone').inputmask({
		mask: '+999 (99) 999-99-99',
		'autoUnmask': true
	}).val('+380 (__) ___-__-__');

	$('.js-input-password').inputmask({
		mask: '9999999',
		showMaskOnHover: false
	});
});