$(function() {

	$('.header__slider').slick({
		autoplay: true,
		arrows: false,
		autoplaySpeed: 5000,
		cssEase: 'ease-in'
	});

	$('.header__hidden').hover(function(){
		$(this).siblings('.main-nav__block').toggleClass('main-nav__block_active');
	});

	$('.h-nav__dropdown').on('click', function(){
		$('.ins-hid').slideToggle(500);
	});

});
