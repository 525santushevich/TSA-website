const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
});

const marquee = document.getElementById("marquee");
const clone = marquee.cloneNode(true);
marquee.parentElement.appendChild(clone);
