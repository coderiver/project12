$(document).ready(function() {

	$.validate({
		form : '#js-popup-form',
		validateOnBlur: false, 
		errorMessagePosition: 'top',
		scrollToTopOnError: false 
	});

	// mask
	$('.js-input-phone').inputmask({
		mask: '+380 (99) 999-99-99',
		'autoUnmask': true,
		'clearMaskOnLostFocus': false
	}).val(' (__) ___-__-__');


	Inputmask("(9999999)|(i{+})", {
		definitions: {
			"i": {
				validator: ".",
				cardinality: 1,
				definitionSymbol: "*"
			}
		},
		staticDefinitionSymbol: "*",
		'clearMaskOnLostFocus': false,
	}).mask($('.js-input-password'));


});