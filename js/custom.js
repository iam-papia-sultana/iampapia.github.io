/*=====================================
			services
======================================*/
$(document).ready(function(){
	new WOW().init();
});
/*=====================================
			work
======================================*/
$(function(){
		$("#work").magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery:{
				enabled:true
			}
		});
	});
/*=====================================
			navigation
======================================*/
$(function(){
		$(window).scroll(function(){
			if($(this).scrollTop() < 50) {
				$("nav").removeClass("vesco-top-nav");
			}
			else{
				$("nav").addClass("vesco-top-nav");
			}
		});
			
	});