(function(d, w) {
  var portfolio_section = d.querySelector(".portfolio"),
      projects = portfolio_section.querySelectorAll(".portfolio-project");

  for (var i = 0; i < projects.length; i++) {
    var project_info = document.createElement("div"),
        title_wrapper = document.createElement("div"),
        btns = document.createElement("div");

    project_info.className = "portfolio-project__info project-info";
    title_wrapper.className = "project-info__title-wrapper";
    btns.className = "project-info__btns-container";

    var title = document.createElement("h3");
    title.className = "project-info__title";
    title.textContent = "Title Here";
    title_wrapper.appendChild(title);

    var decoration = document.createElement("div");
    decoration.className = "project-info__decoration-line";
    title_wrapper.appendChild(decoration);

    project_info.appendChild(title_wrapper);

    var description = document.createElement("p");
    description.className = "project-info__description";
    description.textContent = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium";
    project_info.appendChild(description);

    var link_btn = document.createElement("button");
    link_btn.className = "project-info__btn project-info__link-btn";
    btns.appendChild(link_btn);

    var like_btn = document.createElement("button");
    like_btn.className = "project-info__btn project-info__like-btn";
    btns.appendChild(like_btn);

    project_info.appendChild(btns);

    projects[i].appendChild(project_info);
  }
})(document, window);
