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
