(function(d) {
  var skills_container = d.querySelector(".services-content__skills");

  var addChart = function addChart(container, value, classes) {
    var chart = d.createElement("svg");
    classes.forEach( function(c) {
      chart.classList.add(c);
    } );

    var main_circle = d.createElementNS("http://www.w3.org/2000/svg", "circle");
    main_circle.setAttribute("r", "48%");
    main_circle.setAttribute("cx", "50%");
    main_circle.setAttribute("cy", "50%");
    main_circle.classList.add("main-circle");
    chart.appendChild(main_circle);

    var progress_circle = d.createElementNS("http://www.w3.org/2000/svg", "circle");
    progress_circle.setAttribute("r", "48%");
    progress_circle.setAttribute("cx", "50%");
    progress_circle.setAttribute("cy", "50%");
    progress_circle.setAttribute("stroke-dasharray", value * 4 + "px");
    progress_circle.classList.add("skill-circle");
    chart.appendChild(progress_circle);

    var progress_value = d.createElementNS("http://www.w3.org/2000/svg", "text");
    progress_value.setAttribute("y", "55%");
    progress_value.setAttribute("x", "30%");
    progress_value.classList.add("skill-value");
    progress_value.textContent = value;
    chart.appendChild(progress_value);

    var percent_symbol = d.createElementNS("http://www.w3.org/2000/svg", "text");
    percent_symbol.setAttribute("y", "55%");
    percent_symbol.setAttribute("x", "55%");
    percent_symbol.classList.add("percent-symbol");
    percent_symbol.textContent = "%";
    chart.appendChild(percent_symbol);

    container.appendChild(chart);
  }

  function initCharts() {
    addChart(skills_container, 80, ["services-content__skill", "branding-skill"]);
    addChart(skills_container, 75, ["services-content__skill", "design-skill"]);
    addChart(skills_container, 60, ["services-content__skill", "uiux-skill"]);
  }

  initCharts();
})(document);
