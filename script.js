"use strict";

let darkModeBtn = document.querySelector("#dark-mode");
// const lightModeBtn = document.querySelector("#light-mode");

let turnOffLights = function () {
  document.body.classList.toggle("dark-mode");
  console.log("clicked");
};

darkModeBtn.addEventListener("click", turnOffLights);
console.log(darkModeBtn);

// darkModeBtn.onclick = turnOffLights;
