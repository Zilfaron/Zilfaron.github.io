// function for parity check
function even(number) {
  return !(number % 2);
}

var categories = ["Web-design", "illustration", "Photography", "Wallpapers", "Brochures"];

var posts_container = document.getElementById("posts-container");

var template = document.getElementById("post-template"),
article_template = template.children[0] || template.content.children[0];


// append 20 posts to homepage
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 4; j++) {
    var post = article_template.cloneNode(true);
    if (even(i) && even(j)) {
      post.className = "post post_light_preview";
    } else if (even(i) && !even(j)) {
      post.className = "post post_dark_preview";
    } else if (!even(i) && even(j)) {
      post.className = "post post_dark_preview";
    } else {
      post.className = "post post_light_preview";
    }

    var post_cover = post.children[0];

    post_cover.children[1].textContent = categories[Math.floor( Math.random() * categories.length )];

    // append post-element to posts container
    posts_container.appendChild(post);
  }
}
