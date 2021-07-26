"use strict";
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");
const navHeight = document.querySelector(".nav");
const hide = document.querySelector(".hide");

hamburger.addEventListener("click", openMenu);
window.addEventListener("resize", closeMenu);
if (innerWidth > 1000) hide.style.display = "none";

function openMenu() {
  navMenu.classList.toggle("active");
  hide.style.display = "block";

  setTimeout(() => {
    navHeight.classList.toggle("active");
  }, 300);
}

function closeMenu() {
  navMenu.classList.remove("active");
  navHeight.classList.remove("active");
  hide.style.display = "none";
}
