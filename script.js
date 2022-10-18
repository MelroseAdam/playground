"use strict";

const darkModeBtn = document.querySelector("#dark-mode");
const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);

const turnOffLights = function () {
  document.body.classList.toggle("dark-mode");
  console.log("clicked");
};

darkModeBtn.addEventListener("click", turnOffLights);
console.log(darkModeBtn);
