'use strict';

// Globally this keyword will be window object.
console.log("Global this keyword: ", this);

function printSomething() {
    // If using strict mode, this keyword will be undefined
    // If using non-strict mode, this keyword will be window object
    console.log("Inside normal function: ", this);


    let arrowFunctionInsideFunction = () => {
        // Here this keyword will be undefined.
        // Arrow function will always take this keyword of its parent scope. 
        // Here every normal function will have undefined this keyword so this arrow function.
        console.log("arrowFunctionInsideFunction: ", this);
    }
    arrowFunctionInsideFunction();
}
printSomething();


let arrowFunction = () => {
    // Here this keyword will be window object.
    // Arrow function will always take this keyword of its parent scope.
    console.log("arrowFunction: ", this);
}
arrowFunction();

const person = {
    birthYear: 1965,
    name: "Abc",
    printDetails: function () {
        // Here this keyword will be current object.
        console.log("In object this: ", this);
    }
}
person.printDetails();

const otherPerson = {
    age: 23
}

// After method borrowing this keyword will start pointing to new object.
// So here this will hold value age only and not birthYear and name.
otherPerson.printDetails = person.printDetails;
otherPerson.printDetails();


// this keyword in arrow function inside an object
const jsClass = {
    year: 2020,
    batch: 2,

    normalFunction: function () {
        // Here this will be actual object
        console.log("This inside normal function inside an object: ", this);
    },

    // Here this keyword is global scope. So basically here this keyword will be window object.
    // Any arrow function will be defined in global scope only.
    arrowFunction: () => console.log("This inside arrow function inside an object: ", this)
}

jsClass.normalFunction();
jsClass.arrowFunction();