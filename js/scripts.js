'use strict';
import getRandomNumber from './utils/getRandomNumber.js'


/* DOM Element */

const btn = document.getElementById('btn');

const color = document.querySelector(".color-span");

/* Variables */

const colors = ["rgb(23, 23, 43)", "rgb(25, 25, 25)", "rgb(94, 10, 94)",
    "rgb(67, 10, 19)"];

const borderColors = ["rgb(12, 13, 23)", "rgb(00, 15, 05)", "rgb(64, 00, 74)",
    "rgb(37, 00, 09)"];

const colorsLength = colors.length;

const body = document.body;

/* Handlers */

const changeColors = () => {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber(colorsLength);
    const randomColors = colors[randomNumber];
    body.style.backgroundColor = randomColors;
    btn.style.backgroundColor = randomColors;
    color.textContent = randomColors;
    btn.style.border = `3px solid ${borderColors[randomNumber]}`;
}

/* Events */

btn.addEventListener('click', changeColors);
