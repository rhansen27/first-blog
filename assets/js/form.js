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
