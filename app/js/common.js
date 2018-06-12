$(function() {

	$('.header__slider').slick({
		autoplay: true,
		arrows: false,
		autoplaySpeed: 5000,
		cssEase: 'ease-in'
	});
	
	// Show attorneys on hover
	$('.show-attorneys').hover(function(){
		$('.att-hid').toggleClass('visible');
		$(this).toggleClass('mouseOver');
	});
	$('.att-hid').hover(function(){
		$('.show-attorneys').toggleClass('mouseOver');
	});


});
