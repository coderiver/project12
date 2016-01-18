$(document).ready(function() {

	// open menu
	$('.js-btn-menu').on('click', function(event){
		var this_ 	= $(this),
			parent 	= this_.parents('.js-menu');
		if (parent.hasClass('is-active')) {
			parent.removeClass('is-active');
		}
		else {
			parent.addClass('is-active');
		}
		event.stopPropagation();
	});
	$('body').on('click', function(){
		$('.js-menu').removeClass('is-active');
	});

});