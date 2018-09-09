$(function() {
  function switch_view() {
    $(".mobile-menu").slideToggle(250, "linear").scrollTop(0);
  }
  $(".mobile-open-btn").on("click", function() {
    switch_view();
  });
});
