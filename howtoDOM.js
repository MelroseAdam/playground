"use strict";

console.log("Hello World!");

let bgcBtn = document.getElementsByClassName("bgc-button");

bgcBtn[0].addEventListener("click", function () {
  bgcBtn[0].style.color = "black";
});

//console.log(bgcBtn);

let bgcBtn2 = document.querySelector(".bgc-button");

bgcBtn2.addEventListener("click", function () {
  bgcBtn2.style.color = "black";
  bgcBtn2.style.fontSize = "80px";
  bgcBtn2.textContent = "SURPRISE!";
});

console.log(bgcBtn2);

// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);

// const color = prompt("Red or Blue?");
// if (color === "Red") {
//   document.getElementById(".first-paragraph").style.color = "red";
// } else {
//   document.getElementById(".first-paragraph").style.color = "blue";
// }

// let p1 = document.getElementsByClassName("first-paragraph");

// p1 = "Is anything happening?";
