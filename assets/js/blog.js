const post = JSON.parse(localStorage.getItem("posts")) || [];
const postLength = post.length || 0;

function buildPostContainers(repeat = 0) {
  if (repeat === 0) {
    alert("No posts available, redirecting you to the homepage to add a post!");
    window.location.href = "/index.html";
    return;
  }
  repeat = parseInt(repeat);
  if (repeat > post.length) {
    repeat = post.length;
  }
  for (let i = 0; i < (repeat || 1); i++) {
    // creating all of the elements needed
    const blogContainer = document.createElement("div");
    const blogHeader = document.createElement("h2");
    const blogSpacer = document.createElement("div");
    const blogContent = document.createElement("p");
    const blogPoster = document.createElement("p");

    // adding classes to the elements
    blogContainer.classList.add("blog-post-container");
    blogHeader.classList.add("post-container-header");
    blogSpacer.classList.add("spacer");
    blogContent.classList.add("post-container-content");
    blogPoster.classList.add("post-container-poster");

    // adding an ID to each element
    blogContainer.setAttribute("id", `blogPost-container-${i + 1}`);
    blogHeader.setAttribute("id", `blogPost-header-${i + 1}`);
    blogContent.setAttribute("id", `blogPost-content-${i + 1}`);
    blogPoster.setAttribute("id", `blogPost-poster-${i + 1}`);
    blogSpacer.setAttribute("id", `blogPost-spacer-${i + 1}`);

    const sections = document.getElementById("blog-post-section");
    sections.appendChild(blogContainer);
    blogContainer.appendChild(blogHeader);
    blogContainer.appendChild(blogSpacer);
    blogContainer.appendChild(blogContent);
    blogContainer.appendChild(blogPoster);

    document.getElementById(`blogPost-header-${i + 1}`).innerText =
      post[i].title;
    document.getElementById(`blogPost-content-${i + 1}`).innerText =
      post[i].content;
    document.getElementById(
      `blogPost-poster-${i + 1}`
    ).innerText = `Posted by: ${post[i].username}`;
  }
}

function getOptions() {
  const selector = document.getElementById("select-delete");
  const posts = JSON.parse(localStorage.getItem("posts"));
  for (const post in posts) {
    const opt = document.createElement("option");
    opt.innerText = posts[post].title + " by " + posts[post].username;
    opt.value = posts[post].title + " by " + posts[post].username;
    selector.appendChild(opt);
  }
}

document.getElementById("back-button").onclick = function () {
  window.location.href = "/index.html";
};

document.getElementById("delete-button").onclick = function () {
  const whatToDelete = document.getElementById("select-delete").value || "";
  const posts = JSON.parse(localStorage.getItem("posts"));
  const newArray = [];
  for (const title in posts) {
    if (
      posts[title].title.toLowerCase() +
        " by " +
        posts[title].username.toLowerCase() ===
      whatToDelete.toLowerCase()
    ) {
      if (confirm("Are you sure you want to delete this post")) {
      } else {
        newArray.push(posts[title]);
      }
    } else {
      newArray.push(posts[title]);
    }
  }

  localStorage.setItem("posts", JSON.stringify(newArray));
  window.location.href = "/blog.html";
};
