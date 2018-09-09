var contacts_button = $(".contact-icon"),
    info_container  = $(".info");

contacts_button.bind("click", function() {
  info_container.toggleClass("visible_info");
});
