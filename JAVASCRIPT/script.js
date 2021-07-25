"use strict";

// const toggleNavigationBar = function () {
//   const nav = document.querySelector(".nav");
//   const navToggle = document.querySelector(".toggle-collapse");

//   navToggle.addEventListener("click", () => {
//     nav.classList.toggle("collapse");
//   });

//   window.addEventListener("resize", () => {
//     if (innerWidth < 800) {
//       nav.classList.remove("collapse");
//     }
//   });
// };

// toggleNavigationBar();
document.addEventListener("DOMContentLoaded", () => {
  const iconsToggle = function () {
    const social = document.querySelector(".social");
    const social1000 = document.querySelector(".social-1000");

    window.addEventListener("resize", () => {
      if (innerWidth > 1000) {
        console.log(innerWidth);
        social.classList.add("hidden");
        social1000.classList.remove("hidden");
      } else {
        social.classList.remove("hidden");
        social1000.classList.add("hidden");
      }
    });
  };
  iconsToggle();
});

// console.log(innerWidth);

// document.addEventListener("DOMContentLoaded", () => {
//   let resizer = new ResizeObserver(handleResize);
//   resizer.observe(document.querySelector(".social"));
//   // resizer.observe(document.querySelector(".container"));
//   // resizer.observe(document.querySelector(".social-1000"));
// });

// function handleResize(entries) {
//   let div = entries[0].target;
//   console.log(div);
//   if (entries[0].contentRect.width > ) {
//     div.classList.add("hidden");
//   } else {
//     div.classList.remove("hidden");
//   }
// }
