$(function() {
  $(".m-menu-btn").click( function() {
  	$(".m-menu").toggleClass("m-menu-active");
  	$(".m-menu-background").toggleClass("m-menu-active");
  });
  $(".close").click( function() {
  	$(".m-menu").removeClass("m-menu-active");
  	$(".m-menu-background").removeClass("m-menu-active");
  });
   $(".m-menu-background").click( function() {
  	$(".m-menu").removeClass("m-menu-active");
  	$(".m-menu-background").removeClass("m-menu-active");
  });
});