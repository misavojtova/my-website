"use strict";
// ----- NAV MeNU -----
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");
const navHeight = document.querySelector(".nav");
const hide = document.querySelector(".hide");

// -------- joke -----
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// NAV
function openMenu() {
  navMenu.classList.toggle("active");
  hide.style.display = "block";

  setTimeout(() => {
    navHeight.classList.toggle("active");
  }, 300);
}

function closeMenu() {
  navMenu.classList.remove("active");
  hide.style.display = "none";
  setTimeout(() => {
    navHeight.classList.remove("active");
  }, 400);
}
hamburger.addEventListener("click", openMenu);
window.addEventListener("resize", closeMenu);
window.addEventListener("scroll", closeMenu);
if (innerWidth > 1000) hide.style.display = "none";

//JOKE
const getAJoke = function () {
  generateJoke();
  // Using async/await
  async function generateJoke() {
    // variable config for fetching the data
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const response = await fetch("https://icanhazdadjoke.com/", config);

    const data = await response.json();

    jokeEl.innerHTML = data.joke;
  }
};

jokeBtn.addEventListener("click", getAJoke);
