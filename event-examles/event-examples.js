'use strict';

const h1Element = document.querySelector("h1");

// This will be called while bubbling pahse
h1Element.addEventListener('click', (e) => {
    alert("Mouse clicked on h1.");
    console.log('Target of event means the origin element of event: ', e.target);
    console.log('This', e);
    console.log('Current target: ', e.currentTarget);
    console.log('this and e.currentTarge are always same: ' + e.currentTarget == this); // true
    h1Element.removeEventListener('click', () => {});
});

// This will be called while capturing phase
h1Element.addEventListener('click', (e) => {
    alert("Capturing phase.");
}, true);

// h1Element.onmouseenter = function (e) {
//     alert("Another way of adding event listener.");
// }

setTimeout(() => {
    h1Element.removeEventListener('mouseenter', () => {});

    h1Element.onmouseenter = undefined;
}, 3000);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;