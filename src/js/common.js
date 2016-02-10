$(document).ready(function() {

	// body on click
	$('body').on('click', function(){
		$('.js-menu').removeClass('is-active');
		$('.js-login').removeClass('is-active');
		$('body').removeClass('is-hidden');
		$('.js-header').removeClass('is-init');
		$('.js-nav').removeClass('is-active');
		$('.js-open-nav').removeClass('is-active');
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
				hWind 	= $(window).height() - 16,
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

	
	$('.js-open-nav').on('click', function(event){
		var this_ 	= $(this),
			parent 	= $('.js-sidebar'),
			nav 	= $('.js-nav');
		
		this_.toggleClass('is-active');
		nav.toggleClass('is-active');
		$('body').toggleClass('is-hidden');

		event.stopPropagation();
	});
	

	// open login
	$('.js-btn-login').on('click', function(){
		$(this).parents('.js-login')
		.find('.js-popup')
		.toggleClass('is-active');
		$('.js-chenge-password').removeClass('is-active');

		$('body').addClass('is-hidden');

		$(this).parents('.js-header').addClass('is-init');
		$('.js-menu').removeClass('is-active');
		return false;
	});
	$('.js-login').on('click', function(event){
		event.stopPropagation();
	});

	$('.js-forgot-password').on('click', function() {
		var this_ = $(this),
			parent = this_.parents('.js-popup'),
			parents = this_.parents('.js-login'),
			popup = parents.find('.js-chenge-password');
		parent.removeClass('is-active');
		setTimeout(function() {
			popup.addClass('is-active'); 
		}, 400);
		return false;
	});


	// open video
	$('.js-btn-video').on('click', function(){
		$(this).parents('.js-video')
		.find('.js-popup')
		.toggleClass('is-active');

		videoPause();

		$('body').addClass('is-hidden');

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
			$('body').removeClass('is-hidden');
		}, 400);
		videoPause();
	});

	$('.js-popup').on('click', function(){
		$(this).removeClass('is-active');
		setTimeout(function() {
			$('.js-header').removeClass('is-init');
			$('body').removeClass('is-hidden');
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
		setTimeout(function() {header_bg();}, 350);
		return false;
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

	// datepicker
	var eventDates = [[2016,02,25], [2016,02,27], [2016,02,28], [2016,02,21], [2016,02,14], [2016,02,07]];
	$('.js-calendar').datepicker({
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
			'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		beforeShowDay: setDays,
			onSelect: function(date) {
				var thisEl = $(this);
				setTimeout(function () {
					var el = thisEl.find('.ui-state-active');
					if (!el.parent().hasClass('is-select')) {
						el.parents('.js-popup')
						.find('.js-postpone-block')
						.slideDown(300);
					}
				}, 1);
			}
	});

	function setDays(date) {
		for (i = 0; i < eventDates.length; i++) {
			if (date.getFullYear() == eventDates[i][0]
				&& date.getMonth() == eventDates[i][1] - 1
				&& date.getDate() == eventDates[i][2]) {
				return [true, 'is-select', eventDates[i][3]];
			}
		}
		return [true, ''];
	};


	// header-bg
	function header_bg() {
		var block = $('.js-header-bg'),
			wWidth = $('.js-rightbar').width(),
			hHeight = $('.js-header').height() + 70;
	 	if (block.length){
	 		block
	 		.width(wWidth)
	 		.height(hHeight);
	 	}
	}
	header_bg();
	$(window).resize(function(){
		header_bg();
	});

	$(document).on('mousemove keydown scroll', function(){
		header_bg();
	});
	$('body').trigger("mousemove");
	$('body').on('click', function(){
		header_bg();
	});
	$('.js-open-success').on('click', function(){
		var this_ 	= $(this),
			parent 	= this_.parents('.js-appraisal'),
			item 	= parent.find('.js-appraisal-item');
		this_.slideUp(300);
		setTimeout(function() {
			item.slideDown(400);
		}, 600);
		return false;
	});

	// plan form
	$('.js-plan').each(function(){
		var parent 	= $(this),
			btn 	= parent.find('.js-plan-submit'),
			input 	= parent.find('input[type="radio"]');
		if (input.is('checked')){
			btn.prop('disabled', false);
		}
		else {
			btn.prop('disabled', true);

		}
	});

	$('.js-plan input[type="radio"]').on('change', function(){
		var input 		= $(this),
			parent 		= input.parents('.js-plan'),
			btn 		= parent.find('.js-plan-submit');
		if (input.is(':checked')){
			btn.prop('disabled', false);
		}
		else {
			btn.prop('disabled', true);
		}
	});

	$('.js-plan-cancel').on('click', function(){
		var btn 		= $(this),
			parent 		= btn.parents('.js-plan'),
			submit 		= parent.find('.js-plan-submit'),
			input 		= parent.find('input[type="radio"]');
		submit.prop('disabled', true);
		input.prop('checked', false);
		if (!input.is(':checked')){
			btn.parents('.js-postpone-block').slideUp(300);
		}
	});
	
});