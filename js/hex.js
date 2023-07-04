'use strict'

import getRandomNumber from './utils/getRandomNumber.js'

/* DOM Elements */

const btn = document.getElementById('btn');

const color = document.querySelector('.color-span');

/* Variables */

const hex = ['17172B', '191919', '5E0A5E', '430A13'];

const body = document.body;

const hexLength = hex.length;

/* Handlers */

const changeBgHexColor = () => {
    let hexColor = '#';
    hexColor += hex[getRandomNumber(hex.length)];
    body.style.background = hexColor;
    color.textContent = hexColor;
}

/* Events */

btn.addEventListener('click', changeBgHexColor);
