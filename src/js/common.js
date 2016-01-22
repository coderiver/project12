$(document).ready(function() {

	// body on click
	$('body').on('click', function(){
		$('.js-menu').removeClass('is-active');
		$('.js-login').removeClass('is-active');
		$('body').removeClass('is-hidden');
	});

	// open menu
	$('.js-btn-menu').on('click', function(event){

		$(this).parents('.js-menu').toggleClass('is-active');
		$('.js-login').removeClass('is-active');
		if ($(window).width() <= 768) {
			$('body').toggleClass('is-hidden');
		}

		event.stopPropagation();
	});

	// open login
	$('.js-btn-login').on('click', function(){
		$(this).parents('.js-login')
		.find('.js-popup')
		.toggleClass('is-active');
		$('.js-menu').removeClass('is-active');
		return false;
	});
	$('.js-login').on('click', function(event){
		event.stopPropagation();
	});

	// popup
	$('.js-popup-close').on('click', function(){
		$('.js-popup').removeClass('is-active');
	});

	$('.js-popup').on('click', function(){
		$(this).removeClass('is-active');
	});
	$('.js-popup div').on('click', function(event){
		event.stopPropagation();
	});

	// slider
	$('.js-slider').each(function(){
		var slider 	= $(this),
			arr 	= slider.parent().find('.js-slider-arr');
		slider.slick({
			dots: false,
			infinite: true,
			speed: 500,
			cssEase: 'linear',
			appendArrows: arr,
			prevArrow: '<button class="slider__btn is-prev" type="button"><i class="icon icon-slider-prev"></i></button>',
			nextArrow: '<button class="slider__btn is-next" type="button"><i class="icon icon-slider-next"></i></button>'
		});
	});

});