$(document).ready(function() {

	// body on click
	$('body').on('click', function(){
		$('.js-menu').removeClass('is-active');
		$('.js-login').removeClass('is-active');
	});

	// open menu
	$('.js-btn-menu').on('click', function(event){

		$(this).parents('.js-menu').toggleClass('is-active');
		$('.js-login').removeClass('is-active');

		event.stopPropagation();
	});

	// open login
	$('.js-btn-login').on('click', function(){
		$(this).parents('.js-login').toggleClass('is-active');
		$('.js-menu').removeClass('is-active');
		return false;
	});

	$('.js-login').on('click', function(event){
		event.stopPropagation();
	});

	

});