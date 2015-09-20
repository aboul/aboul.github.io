jQuery(document).ready(function($) {
	// After css backgrounds animations has been played (2000ms), jquery display content with opacity animation
	$("section.content").delay(2000).animate(
		{ 
			opacity: 1
		},
		2000
	);

	// View Gallery
	$('#gallery-link').click(function() {
		console.log('gallery-link clicked!');

		// Scroll to Gallery section
		$('body').animate(
			{
				top: '-600px'
			},
			{
				duration: 2000,
				easing: 'easeOutBounce',
				complete: function() {
					$('body').toggleClass('gallery-view');
					// Animate gallery section to 100% width
					$('#gallery').animate(
						{
							width: '100%'
						}, {
							duration: 1000, 
							complete: function() {
								// Finally show the gallery content
								$('#gallery-content').show(500, function() {
									$("#owl-example").owlCarousel({
										items: 3,
										itemsDesktop: [1000,3],
										itemsDesktopSmall : false,
										itemsTablet: false,
										itemsMobile : false,
										pagination: true,
										lazyLoad: true,
										navigation: false
									});
							    });
							}
						}
					);
				}
			}
		);
	});

	// Go back to intro/home
	$('#goBack').click(function() {
		console.log('goBack clicked!');

		// Go back to top of body
		$('body').animate(
			{
				top: '0'
			},
			{
				duration: 2000,
				easing: 'easeOutBounce',
				complete: function() {
					$('body').toggleClass('gallery-view');
					// then reset css attributes to defaults for gallery section and content
					$('#gallery').animate(
						{
							width: '33.33%'
						}, 100);
					$('#gallery-content').hide();
				}
			}
		);
	});

	$('.popup-link-1').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}		
	});

	$('.popup-link-2').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}		
	});
});