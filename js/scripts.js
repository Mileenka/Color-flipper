'use strict';

/* Variables */

const btn = document.getElementById('btn');

const color = document.querySelector(".color-span");

const colors = ["rgb(23, 23, 43)", "rgb(25, 25, 25)", "rgb(94, 10, 94)",
    "rgb(67, 10, 19)"];

const borderColors = ["rgb(12, 13, 23)", "rgb(00, 15, 05)", "rgb(64, 00, 74)",
    "rgb(37, 00, 09)"];

/* Functions */

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}

/* Events */

btn.addEventListener('click', () => {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    btn.style.backgroundColor = colors[randomNumber];
    btn.style.border = `3px solid ${borderColors[randomNumber]}`;
    color.textContent = colors[randomNumber];
});
