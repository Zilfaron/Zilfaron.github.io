(function(d, w) {
  w.addEventListener("load", function() {
    var scroll = localStorage.lastScroll;
    if ( !scroll ) return false;

    w.scrollTo(0, scroll);
    localStorage.removeItem("lastScroll");
  });

  w.addEventListener("submit", function() {
    var scrollTop = w.scrollY;

    localStorage.setItem("lastScroll", scrollTop);
  });
})(document, window);
