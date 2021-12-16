'use strict';

// Function with default value to parameters
function functionWithDefaultValueToParam(param1 = 10) {
    console.log(param1); // This will print: 10
}

functionWithDefaultValueToParam();


// Operations on parameters
function test(passengers = 1, price = 200 * passengers) {
    console.log(passengers, price); // This will print: 1 200
}
test();

// call function
const tajHotel = {
    name: 'Taj hotel',
    city: 'Mumbai',
    state: 'Maharashtra',

    printDetails() {
        console.log(this.name, this.city, this.state);
    }
}
tajHotel.printDetails(); // This will print: Taj hotel Mumbai Maharashtra

const oyoHotel = {
    name: 'Oyo hotel',
    city: 'Pune',
    state: 'Maharashtra'
}

const printDetailsFUnction = tajHotel.printDetails;

// The difference between call and apply is that,
// call accepts arguments as comma separated values
// apply accepts arguments as array

// call function
printDetailsFUnction.call(oyoHotel); // This will print: Oyo hotel Pune Maharashtra

// apply function
printDetailsFUnction.apply(oyoHotel); // This will print: Oyo hotel Pune Maharashtra

// bind function
// Bind returns new function which is already bound to provided object.
const newFunction = printDetailsFUnction.bind(oyoHotel);
newFunction(); // This will print: Oyo hotel Pune Maharashtra


// Function which will bb eexecuted only once
// This is also called as 'Immediately invoked function expression'
(function () {
    console.log('This will run only once.');
})();

(() => console.log("This arrow function will be called only once."))();

// Closures example 1
function higherOrderFunction() {
    let counter = 0;

    return function () {
        counter++;
        console.log(counter);
    }
}
const firstClassFunction = higherOrderFunction();
firstClassFunction(); // 1
firstClassFunction(); // 2
firstClassFunction(); // 3
// Here as you can see counter is maintained even after the higher order function is returned.

// Closures example 2
let f;

const h = function () {
    let a = 10;
    f = function () {
        console.log("From h: " + a * 2);
    }
}

const g = function () {
    let b = 100;
    f = function () {
        console.log("From g: " + b * 2);
    }
}

h();
f(); // From h: 20
console.dir(f);

g();
f(); // From g: 200
console.dir(f);