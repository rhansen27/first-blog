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
}
