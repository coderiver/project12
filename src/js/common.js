$(document).ready(function() {

	// body on click
	$('body').on('click', function(){
		$('.js-menu').removeClass('is-active');
		$('.js-login').removeClass('is-active');
		$('body').removeClass('is-hidden');
		$('.js-header').removeClass('is-init');
	});

	// open menu
	$('.js-btn-menu').on('click', function(event){
		$(this).parents('.js-header').toggleClass('is-init');
		$(this).parents('.js-menu').toggleClass('is-active');
		$('.js-login').removeClass('is-active');
		if ($(window).width() <= 768) {
			$('body').toggleClass('is-hidden');
		}

		event.stopPropagation();
	});

	if ($('.js-menu').length) {
		$(document).scroll(function() {    
			var scroll 	= $(this).scrollTop(),
				hWind 	= $(window).height() - 46,
				menu 	= $('.js-menu');
			if (scroll >= hWind) {
				menu.addClass('is-white');
			}
			else{
				menu.removeClass('is-white');
			}
		});
		// menu active scroll
		$('.js-menu-list').ddscrollSpy({ 
			scrollduration: 500
		});

		// add class
		var yellow_block = $('.js-yellow'),
			window_ = $(window);

		function check_if_in_view() {
			var window_height = window_.height(),
				window_top_position = window_.scrollTop(),
				lHeight = window_height - 90,
				window_bottom_position = (window_top_position + (window_height - lHeight));
			
			$.each(yellow_block, function() {
				var element = $(this),
					element_height = element.outerHeight(),
					element_top_position = element.offset().top,
					element_bottom_position = (element_top_position + element_height);
			
				if (((element_bottom_position - 90) >= window_top_position) &&
					((element_top_position - 50) <= window_bottom_position)) {
					element.addClass('is-view');
				} else {
					element.removeClass('is-view');
				}
				
				if (yellow_block.hasClass('is-view')) {
					$(".js-menu").removeClass('is-white');
				}
				else {
					$(".js-menu").addClass('is-white');
				}
			});
		}

		window_.on('scroll resize', check_if_in_view);
		window_.trigger('scroll');
	};

	// open login
	$('.js-btn-login').on('click', function(){
		$(this).parents('.js-login')
		.find('.js-popup')
		.toggleClass('is-active');

		$(this).parents('.js-header').addClass('is-init');
		$('.js-menu').removeClass('is-active');
		return false;
	});
	$('.js-login').on('click', function(event){
		event.stopPropagation();
	});

	// open video
	$('.js-btn-video').on('click', function(){
		$(this).parents('.js-video')
		.find('.js-popup')
		.toggleClass('is-active');

		videoPause();

		return false;
	});
	$('.js-video').on('click', function(event){
		event.stopPropagation();
	});
	
	// video pause
	function videoPause(){
		var url = $('.js-video-frame').data('link'),
			popup = $('.js-popup');
		if (popup.hasClass('is-active')) {
			$('.js-video-frame iframe').attr('src', url);
		}
		else {
			$('.js-video-frame iframe').attr('src', '');
		}
	};

	// popup
	$('.js-popup-close').on('click', function(){
		$('.js-popup').removeClass('is-active');
		setTimeout(function() {
			$('.js-header').removeClass('is-init');
		}, 400);
		videoPause();
	});

	$('.js-popup').on('click', function(){
		$(this).removeClass('is-active');
		setTimeout(function() {
			$('.js-header').removeClass('is-init');
		}, 400);
		videoPause();
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

	// paralax
	// $('body').on('mousewheel DOMMouseScroll', function(e) {
	//     var scrollTo = 0,
	//     	height = $(window).height();
	//     e.preventDefault();
	//     if (e.type == 'mousewheel') {
	//         scrollTo = (e.originalEvent.wheelDelta * -1);
	//         console.log("w"+e.originalEvent.wheelDelta);
	//         $('.js-paralax').css('margin-top', e.originalEvent.wheelDelta)
	//     }
	//     else if (e.type == 'DOMMouseScroll') {
	//         scrollTo = 40 * e.originalEvent.detail;
	//         console.log("d"+e.originalEvent.detail);
	//         $('.js-paralax').css('margin-bottom', height / e.originalEvent.detail)
	//     }
	//     $(this).scrollTop(scrollTo + $(this).scrollTop());
	    
	// });
	
	$(window).on('scroll',function(e){
	    parallaxScroll();
	});
	 
	function parallaxScroll(){
		var scrolled 	= $(window).scrollTop()
			pos 		= 0 - (scrolled * .025) + 'px';
		 $('.js-paralax').css('transform', 'translateY(' + pos + ')');
	};

	// height section Top
	function heightTop(){
		$('.js-top').each(function(){
			var this_ 	= $(this),
				wHeight = $(window).height();
			if (wHeight >= 801){
				this_.height(wHeight);
			}
			else {
				this_.height('auto');
			}
		});
	} heightTop();

	$(window).resize(function() {
		heightTop();
	});

	// tab
	function tab() {
		$(".js-tab").each(function(){
			var tab_item 	= $(this).find(".js-tab-item"),
				tab_link 	= tab_item .find("a"),
				index 		= tab_link.attr("href"),
				parents 	= $(this).parents(".js-tab-group"),
				tab_cont 	= parents.find(".js-tab-cont");

			tab_link.on("click", function() {
				var index = $(this).attr("href");
				$('.js-tab-item').removeClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.fadeOut(0);
				parents.find("."+index).fadeIn(300);

				return false;
			});

			if (tab_item.hasClass('is-active')) {
				var index = $('.js-tab-item.is-active a').attr("href");
				parents.find("."+index).fadeIn(300);
			}
			else {
				$(this).find('.js-tab-item:first').addClass("is-active");
				parents.find("."+index).fadeIn(300);
			}
			
		});
	}
	tab();

	// accord
	var acord 		= $('.js-accord'),
		acordBlock  = $('.js-accord-block');
	$('.js-accord-top').on('click', function(){
		var this_ 	= $(this),
			parent 	= this_.parents('.js-accord'),
			block 	= parent.find('.js-accord-block');
		if (parent.hasClass('is-active')) {
			parent.removeClass('is-active');
			block.slideUp(300);
		}
		else {
			acord.removeClass('is-active');
			acordBlock.slideUp(300);
			parent.addClass('is-active');
			block.slideDown(300);
		}
	});
	acord.each(function(){
		var accord = $(this),
			accordBlock = accord.find(acordBlock);
		if (accord.hasClass('is-active')) {
			accordBlock.show();
		};
	});

	// add class to visiting
	$('.js-visiting').on('click', function(){
		$(this).toggleClass('is-checked');
	});

	$(".js-scroll-to").on('click', function(){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top + 20
		}, 600);
		return false;
	});

	$('.js-calendar').datepicker({
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
			'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
	});


});