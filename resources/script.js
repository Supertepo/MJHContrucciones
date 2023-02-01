const button = document.getElementById("all");
const button22 = document.getElementById("22");
const button21 = document.getElementById("21");
const divs = document.querySelectorAll(".proyectos");

button.addEventListener("click", function() {
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
  }
  button22.classList.remove("active");
  button21.classList.remove("active");
  button.classList.toggle("active");
});
button22.addEventListener("click", function() {
  for (let i = 0; i < divs.length; i++) {
  divs[i].style.display = "flex";
  }
  for (let i = 0; i < divs.length; i++) {
  if (divs[i].parentNode.id !== "2022") {
  divs[i].style.display = "none";
  }
  }
  button.classList.remove("active");
  button21.classList.remove("active");
  button22.classList.toggle("active");
  });
  button21.addEventListener("click", function() {
    for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "flex";
    }
    for (let i = 0; i < divs.length; i++) {
    if (divs[i].parentNode.id !== "2021") {
    divs[i].style.display = "none";
    }
    }
    button.classList.remove("active");
    button22.classList.remove("active");
    button21.classList.toggle("active");
    });
