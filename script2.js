// Update CSS variables --x and --y with mouse coordinates (pixels)
document.addEventListener("mousemove", function (e) {
  document.documentElement.style.setProperty("--x", e.clientX + "px");
  document.documentElement.style.setProperty("--y", e.clientY + "px");
});


