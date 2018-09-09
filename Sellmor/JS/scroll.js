$(document).ready( function() {
	$(document).bind("mousewheel", function(e) {
	  if ( $(this).scrollTop() == 0 && e.originalEvent.deltaY >= 0 ) {
	  	$("html, body").stop().animate({
	  		scrollTop: $("main").offset().top 
	  	}, 800)
	  } else if ( $(this).scrollTop() <= $("main").offset().top && e.originalEvent.deltaY <= 0 ) {
	  	$("html, body").stop().animate({
	  		scrollTop: 0
	  	}, 800);
	  }	
	});  
});