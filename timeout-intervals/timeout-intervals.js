'use strict';

// Simple timeout function.
setTimeout(() => {
    console.log("This is after timeout.");
}, 3000);
console.log("Waiting for simple timer to finish.");

// timeout function with parameters
setTimeout((number1, number2) => {
    console.log("Addition is: " + (number1 + number2)); // It will print 3
}, 3000, 1, 2);
console.log("Waiting for simple timer to finish.");

// Clear timeout function
const timeout = setTimeout(() => {
    console.log("This will not be printed.");
}, 3000);
// This function will simply cancel timer and no call back fnction will be called.
clearTimeout(timeout);


// Intervals
let counter = 0;
const intervalVar = setInterval(() => {
    console.log(new Date());
    counter++;
    if (counter >= 4) {
        console.log("Printed 4 dates. Exiting now.");
        clearInterval(intervalVar);
    }
}, 1000);