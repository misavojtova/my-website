"use strict";
// CLOCK

const deg = 6;
const hr = document.querySelector(".hr");
const min = document.querySelector(".mn");
const sec = document.querySelector(".sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours();
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12})`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});
