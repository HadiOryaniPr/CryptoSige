"use strict";

const hamburgurMenu = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
hamburgurMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
