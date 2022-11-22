const heading = document.querySelector(".heading");

heading.addEventListener("mouseover", function () {
  heading.style.color = "red";
  heading.style.fontSize = "70px";
});

heading.addEventListener("mouseout", function () {
  heading.style.color = "green";
  heading.style.fontSize = "30px";
});
