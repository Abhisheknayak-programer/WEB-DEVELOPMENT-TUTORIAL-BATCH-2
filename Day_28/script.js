const box = document.querySelector(".box");

window.addEventListener("keydown", function (e) {
  if (e.key === "s") {
    box.style.background = "crimson";
    box.style.width = "100%";
  } else if (e.key === "a") {
    box.style.width = "100%";
    box.style.background = "blue";
  } else {
    box.style.background = "violet";
    box.style.width = "50%";
  }
});

// TASK
// a = image will change
// b = image will change and increase in height
// c = image will change and decrease in height
