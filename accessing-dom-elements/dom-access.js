'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Updated value for message with class  message."

console.log(document.querySelector('#message').textContent);
document.querySelector('#message').textContent = "Updated value for message with id  message."

document.querySelector('.inputText').value = "Input value";
console.log(document.querySelector('.inputText').value);