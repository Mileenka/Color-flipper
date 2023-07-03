/* Variables */

const btn = document.getElementById('btn');

const color = document.querySelector('.color-span');

const hex = ['17172B', '191919', '5E0A5E', '430A13'];

/* Function */

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}

/* Events */

btn.addEventListener('click', () => {
    let hexColor = '#';
    hexColor += hex[getRandomNumber()];
    colors = hexColor;
    document.body.style.background = hexColor;
    color.textContent = hexColor;
});
