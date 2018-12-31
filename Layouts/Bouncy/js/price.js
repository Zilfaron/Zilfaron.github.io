(function(d) {
  var addCards = function addCards(container) {
    var htmlTemplate = container.querySelector(".rate-template"),
        cardsData = [
          {
            name: "Premium",
            price: 60,
            paragraphs: ["Full Branding",
                        "Project Management",
                        "Unlimited Revisions",
                        "24/7 h Service",
                        "Free Domain",
                        "Free Hosting"]
          },
          {
            name: "Business",
            price: 70,
            paragraphs: ["Full Branding",
                        "Project Management",
                        "Unlimited Revisions",
                        "24/7 h Service",
                        "Free Domain",
                        "Free Hosting"]
          },
          {
            name: "Exclusive",
            price: 80,
            paragraphs: ["Full Branding",
                        "Project Management",
                        "Unlimited Revisions",
                        "24/7 h Service",
                        "Free Domain",
                        "Free Hosting"]
          }
        ],
        resultHTML = _.template(htmlTemplate.innerHTML)({ rates: cardsData });

    container.innerHTML = resultHTML;
  }

  var price_section = document.querySelector(".price"),
      cards_container = price_section.querySelector(".price-rates");
  addCards(cards_container);
})(document);
