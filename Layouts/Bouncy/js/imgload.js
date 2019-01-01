(function(d, w) {
  var images = document.images,
      wh = window.innerHeight;

  function loadVisible() {
    for (var i = 0; i < images.length; i++) {
      if ( !images[i].hasAttribute("data-src") ) continue;

      var c = images[i].getBoundingClientRect();

      var tv = c.top > 0 && c.top < wh,
          bv = c.bottom < wh && c.bottom > 0;

      if ( tv || bv ) {
        var src = images[i].getAttribute("data-src");
        images[i].removeAttribute("data-src");

        images[i].setAttribute("src", src);
      } else continue;
    }
  }

  window.addEventListener("load", loadVisible);
  window.addEventListener("scroll", loadVisible);
})(document, window);
