$(document).ready(function() {

	// Cookies
	cookies();
	
});

function cookies(){
	// SlideDown to SlideUp
    $(".cookies").delay(2000).slideDown();
    $(".cookies").click(function(){
		$(this).slideUp();
	})
};