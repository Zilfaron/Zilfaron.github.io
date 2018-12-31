var initMap, map;
(function(d, w) {
  var map_open = d.querySelector(".map-section__open");

  map_open.addEventListener("click", function(evt) {
    evt.target.style.transform = "translateY(100%)";
    setTimeout( function() {
      evt.target.parentNode.removeChild(evt.target);
    }, 4000);
  });

  initMap = function initMap() {
    map = new google.maps.Map(d.querySelector(".map-section__map-container"), {
      center: {lat: 0, lng: 0},
      zoom: 8
    });
  }
})(document, window);
