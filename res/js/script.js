$(document).ready(function() {
	
	$(window).scroll(function () {
		if ($(window).scrollTop() > $('#join').offset().top) {
	    	$('#navbar').css('background', '#1c1c1c');
	    } else {
	        $('#navbar').css('background', 'none');
	    }
	});
});