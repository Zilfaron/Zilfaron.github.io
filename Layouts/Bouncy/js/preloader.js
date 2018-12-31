(function(d, w) {
  var preloader_element = document.querySelector(".page-preloader");

  w.addEventListener("load", function() {
    preloader_element.style.opacity = 0;
    setTimeout( function() {
      d.body.removeChild(preloader_element);
    }, 800);
  });
})(document, window);
