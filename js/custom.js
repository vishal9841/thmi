$(function(){
	$mobileNav = jQuery('<div id="mobileNav"></div>').prependTo('.offcanvas .nano .nano-content ');
	$mobileNav.append(jQuery('.header  .mynav ul').clone());
	jQuery('.toggle a').click(function(e) {
		jQuery('.offcanvas').addClass('show-offcanvas');
		jQuery('body').addClass('pushed');
		jQuery('.body-inactive').fadeIn(350);
		e.preventDefault();
	});
	jQuery('.body-inactive, .coff a').click(function(e) {
		jQuery('.offcanvas').removeClass('show-offcanvas');
		jQuery('.body-inactive').fadeOut(350);
		e.preventDefault();
	});
	$('.offcanvas ul li.menu-item-has-children > a').click(function(e){
		e.preventDefault();
		findIfAlreadyOpen = $(this).parent().children('ul').css('display');
		if(findIfAlreadyOpen == "block"){
			window.location = $(this).attr('href');

		}
		else{
			$('.mynav ul li ul').slideDown(300);
			$(this).parent().children('ul').slideDown(300);
		}
	})



	// scrollbar js initialization
	$(".nano").nanoScroller();


$('.owl-content').owlCarousel({
		loop:false,
		margin:50,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:6
			}
		}
	})




});







