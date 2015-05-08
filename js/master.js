$(document).ready(function() {


// scroll active class ====================================

	$(window).scroll(function() {
    var windScroll = $(window).scrollTop();
    if (windScroll >= 0) {
        $('#main article').each(function(i) {
            if ($(this).position().top <= windScroll - 100) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });

    } else {

        $('nav a.active').removeClass('active');
        $('nav a:first').addClass('active');
    }

	});
	
// scroll animations ======================================

	$('nav a').click(function() {
		var anchor = $(this);
		$('body, html').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 1200, 'easeInOutExpo');
		return false;
	});
	
	$('.popup-gallery').each(function() {
		$(this).magnificPopup({
  		delegate: 'a', // child items selector, by clicking on it popup will open
  		type: 'image',
  		gallery:{enabled:true},
  		preload: [1,3],
  		});
	});
	
	
});