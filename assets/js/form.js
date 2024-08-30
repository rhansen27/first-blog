let defaultTheme = localStorage.getItem("theme") || "night";
let theme = localStorage.getItem("theme");
const day_night = document.getElementById("day-night-pic");
const moonPic = "assets/images/moon.png";
const sunPic = "assets/images/sun.webp";
const colorDarkMode = "dimgrey";
const colorLightMode = "white";
const background = document.getElementsByClassName("background");
const labels = document.getElementsByTagName("label");
const blogPosts = [];
const darkStyle = {
  color: "white",
  backgroundColor: colorDarkMode,
};
const lightStyle = {
  color: "black",
  backgroundColor: colorLightMode,
};

document.getElementById("day-night-tooltip").innerHTML = "Switch to dark mode!";
loadTheme();

function loadTheme() {
  if (theme === "day") {
    day_night.src = sunPic;

    for (const element of background) {
      for (const key in lightStyle) {
        element.style[key] = lightStyle[key];
      }
    }
    for (const element of labels) {
      element.style.color = "black";
    }
    document.getElementById("day-night-tooltip").innerHTML =
      "Switch to dark mode!";
  } else {
    day_night.src = moonPic;

    for (const element of background) {
      for (const key in darkStyle) {
        element.style[key] = darkStyle[key];
      }
    }
    for (const element of labels) {
      element.style.color = "white";
    }
    document.getElementById("day-night-tooltip").innerHTML =
      "Switch to light mode!";
  }
}

function themeSwitch() {
  if (theme === "day") {
    theme = "night";
    day_night.src = moonPic;
    localStorage.setItem("theme", "night");

    for (const element of background) {
      for (const key in darkStyle) {
        element.style[key] = darkStyle[key];
      }
    }

    for (const element of labels) {
      element.style.color = "white";
    }

    document.getElementById("day-night-tooltip").innerHTML =
      "Switch to light mode!";
  } else {
    theme = "day";
    day_night.src = sunPic;
    localStorage.setItem("theme", "day");

    for (const element of background) {
      for (const key in lightStyle) {
        element.style[key] = lightStyle[key];
      }
    }

    for (const element of labels) {
      element.style.color = "black";
    }

    document.getElementById("day-night-tooltip").innerHTML =
      "Switch to dark mode!";
  }
}

function newBlogPost() {
  const username = document.getElementById("username-input").value;
  const title = document.getElementById("title-input").value;
  const content = document.getElementById("content-box").value;
  var posts = JSON.parse(localStorage.getItem("posts")) || [];
  let newPost = {
    username,
    title,
    content,
  };
  if (!username || !title || !content) {
    alert("Please fill out all fields");
    return;
  }
  posts.push(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));
}

document.getElementById("submt-button").onclick = function () {
  newBlogPost();
  window.location.href = "/blog.html";
};
