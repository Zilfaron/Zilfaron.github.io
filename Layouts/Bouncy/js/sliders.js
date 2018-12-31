(function(d) {
    var initSlider = function initSlider(slider, control_class, active_control_class, axis, sizeProp, trs_delay, trs_type, time, slides_data) {
      try {
        if (slides_data.length > 6) {
          throw new Error("Max slides number is 6");
        }

        var slides_list = slider.querySelector(".slides_list"), // get container of slides in slider
            slides_html = _.template(slides_list.querySelector(".slide-template").innerHTML)({ slides: slides_data }), // LoDash template
            slides_n = slides_data.length, // number of slides
            slider_controls = slider.querySelector(".slider_controls"), // get control btns container in slider
            slider_viewport = slider.querySelector(".slider_viewport"), // get viewport of the slider
            slide_offset = 100 / slides_n, // value for one slide
            slider_offset = 0, // offset value
            slide_progress = 0, // time on current slider
            slide_time = time; // max time on one slide

        slides_list.innerHTML = slides_html; // add HTML of slides in slides-container element

        if (slides_n < 2) { // if number of slides is less than two then don't add scrolling and controls
          return true;
        }

        slides_list.style[sizeProp] = slides_n * 100 + "%"; // size of the slides container
        slides_list.style.transition = "transform " + trs_delay + "s " + trs_type; // set transition for smooth scroll
        slides_list.style.transform = "translate" + axis + "(0%)";

        for (var i = 0; i < slides_n; i++) {
          var control_btn = document.createElement("li");
          control_btn.className = control_class;
          control_btn.setAttribute("data-index", i);

          control_btn.addEventListener("click", function(evt) {
            clearInterval(autoScrollInterval);

            d.querySelector("." + active_control_class).classList.remove(active_control_class);
            evt.target.classList.add(active_control_class);
            slider_offset = evt.target.getAttribute("data-index") * -slide_offset;
            slides_list.style.transform = "translate" + axis + "(" + slider_offset + "%)";
          });

          slider_controls.appendChild(control_btn);
        }
        slider_controls.children[0].classList.add(active_control_class);

        var autoScroll = function autoScroll() {
          slide_progress += 1000;

          if (slide_progress >= slide_time) { // if the time on current slide is equals max time on the slide scroll to the new slide
            slide_progress = 0;

            slider_offset <= (slides_n - 1) * -slide_offset ? slider_offset = 0 : slider_offset -= slide_offset;
            slides_list.style.transform = "translate" + axis + "(" + slider_offset + "%)";

            var slide_index = slider_offset / -slide_offset;
            d.querySelector("." + active_control_class).classList.remove(active_control_class);
            slider_controls.children[slide_index].classList.add(active_control_class);
          } else {
            return false;
          }
        }
        var autoScrollInterval = setInterval(autoScroll, 1000);
      } catch (e) {
        console.error(e.message);
      }
    }

    var team_slider = d.querySelector(".team-slider"); // slider of the "team" section
    initSlider(team_slider,
              "team-slider__control slider_control",
              "team-slider__active_control",
              "X", "width", 0.8, "cubic-bezier(0.73, 0.15, 0.15, 0.98)", 3000,
              [
                {
                  photoSrc: "img/team-photos/photo.png",
                  memberName: "Lorem ipsum.",
                  memberRank: "Lorem ipsum dolor sit.",
                  memberDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nobis nihil cum.",
                  brandingValue: "30",
                  designValue: "90",
                  uiValue: "40"
                },
                {
                  photoSrc: "img/team-photos/photo.png",
                  memberName: "Lorem ipsum.",
                  memberRank: "Lorem ipsum dolor sit.",
                  memberDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nobis nihil cum.",
                  brandingValue: "60",
                  designValue: "20",
                  uiValue: "50"
                },
                {
                  photoSrc: "img/team-photos/photo.png",
                  memberName: "Lorem ipsum.",
                  memberRank: "Lorem ipsum dolor sit.",
                  memberDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nobis nihil cum.",
                  brandingValue: "70",
                  designValue: "35",
                  uiValue: "25"
                }
              ]);

    var testimonials_slider = d.querySelector(".testimonials-slider"); // slider of the "testimonials" section
    initSlider(testimonials_slider,
              "testimonials-slider__control slider_control",
              "testimonials-slider__active_control",
              "X", "width", 0.9, "cubic-bezier(0.42, 0.38, 0.01, 0.97)", 4000,
              [
                {
                  photoSrc: "img/testimonials-photos/photo.png",
                  text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.",
                  authorName: "Partho",
                  authorRank: "Founder, artways bd"
                },
                {
                  photoSrc: "img/testimonials-photos/photo.png",
                  text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.",
                  authorName: "Partho",
                  authorRank: "Founder, artways bd"
                },
                {
                  photoSrc: "img/testimonials-photos/photo.png",
                  text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.",
                  authorName: "Partho",
                  authorRank: "Founder, artways bd"
                }
              ]);

    var blog_slider = d.querySelector(".blog-slider"); // slider of the "latest news" section
    initSlider(blog_slider,
               "blog-slider__control slider_control",
               "blog-slider__active_control",
               "Y", "height", 0.7, "cubic-bezier(0.3, 0.2, 0, 1)", 5000,
               [
                 {
                   postName: "The trending Landing Pages",
                   authorName: "Kabir Uddin",
                   postLikes: 6950,
                   postComments: 243,
                   postShares: 703,
                   postText: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio"
                 },
                 {
                   postName: "The trending Landing Pages",
                   authorName: "Kabir Uddin",
                   postLikes: 6950,
                   postComments: 243,
                   postShares: 703,
                   postText: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio"
                 },
                 {
                   postName: "The trending Landing Pages",
                   authorName: "Kabir Uddin",
                   postLikes: 6950,
                   postComments: 243,
                   postShares: 703,
                   postText: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio"
                 }
              ]);
})(document);
