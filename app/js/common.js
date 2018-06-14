$(function() {

	
	/* $('.header__slider').slick({
		autoplay: true,
		arrows: false,
		autoplaySpeed: 5000,
		cssEase: 'ease-in'
	}); */

	/* Light on navigation block on related hidden block hover */
	$('.header__hidden').hover(function(){
		$(this).siblings('.main-nav__block').toggleClass('main-nav__block_active');
	});

	/* Slide down navigation block on button click */
	$('.h-nav__dropdown').on('click', function(){
		$(this).parent().siblings().slideToggle(500);
	});	

	/* Navigation dropdown on small screens on button click */
	$('.header__nav-button').on('click', function(){
		$('.mob-nav').slideToggle(200);	
	});

	/* Button view change of navigation block button */
	$('.h-nav__dropdown').on('click', function(){
		$(this).children('.span__plus_vertical').toggleClass('clicked');
	});

});
