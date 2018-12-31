window.addEventListener("load", function() {
  (function (d) {
    var anchors   = d.querySelectorAll("[href^='.']"),
        speed     = 0.5,
        scrolled  = false;

    for (var i = 0; i < anchors.length; i++) {
      anchors[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        scrolled = false;

        var elemClass = this.getAttribute("href"),
            elem      = d.querySelector(elemClass),
            eOffset   = elem.getBoundingClientRect().top + window.pageYOffset,
            wOffset   = window.pageYOffset;

        function step() {
          if (scrolled) return false;

          var currWOffset = window.pageYOffset;

          if (currWOffset >= eOffset || currWOffset == d.body.scrollHeight - window.innerHeight) {
            scrolled = true;
            return false;
          }
          window.scrollBy(0, speed * 150);

          requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }
  })(document);
});
