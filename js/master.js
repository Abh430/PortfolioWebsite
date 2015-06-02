$(document).ready(function() {


// scroll active class ====================================

	$(window).scroll(function() {
    var windScroll = $(window).scrollTop();
    if (windScroll >= 0) {
        $('#main article').each(function(i) {
            if ($(this).position().top <= windScroll + 100) {
                $('.nav-header a.active').removeClass('active');
                $('.nav-header a').eq(i).addClass('active');
            }
        });

    } else {

        $('.nav-header a.active').removeClass('active');
        $('.nav-header a:first').addClass('active');
    }

	});
	
// scroll animations ======================================

	$('.nav-header a').click(function() {
		var anchor = $(this);
		$('body, html').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 1200, 'easeInOutExpo');
		return false;
	});
	

  // Project image dividers =====================================

  $('.project-image').not(':last-of-type').after('<hr class="project-seperator">');
	
	
});