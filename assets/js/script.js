/*global $ , jQuery , alert*/
$(document).ready(function () {
	'use strict';
	//Active link
	var pathname = window.location.pathname;
	$('nav li a[href*="pathname"]').parent().addClass('active');
	
	//Nice Scroll
	$("html").niceScroll({
		cursorcolor: '#666',
		cursorborder: '1px solid #666',
		cursorwidth: '10px'
	});
	// Slider Interval
	$('.carousel').carousel({
		interval: 6000
	});
	
	// Toggle the Color Option
	$('.gear-check').click(function () {
		$('.color-option').fadeToggle();
	});
	
	// Change theme Color when Click
	var colorLi = $('.color-option ul li'),
		scrollBtn = $('#scroll-top');
	colorLi
		.eq(0).css("backgroundColor", "crimson").end()
		.eq(1).css("backgroundColor", "#F48024").end()
		.eq(2).css("backgroundColor", "#00BFF3").end()
		.eq(3).css("backgroundColor", "#CD669A");
	
	colorLi.click(function () {
		$('link[href*="theme"]').attr("href", $(this).attr('data-value'));
		//console.log( $(this).attr('data-value') )
	});
	
	//Scroll Top
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 700) {
			scrollBtn.show();
		}
	});
	
	scrollBtn.click(function () {
		$("html,body").animate({ scrollTop : 0 }, 600);
	});
});

// Loading Screen
$(window).load(function () {
	'use strict';
	$('.loading-overlay .spinner').fadeOut(2000, function () {
		$('body').css("overflow", 'auto');
		$(this).parent().fadeOut(2000);
	});
});