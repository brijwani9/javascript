'use strict';

// Concate mutliple arrays using spread operator.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // This will print 1 2 3 4 5 6


// Destructuring & spread operator
// Here ... in destructuring is called rest pattern
const [varA, varB, ...allOthers] = [...array1, ...array2];
console.log(varA, varB, allOthers); // This will print [1, 2, [3,4,5,6]]

// Spread operator can be used to pass multiple parameters to the functions.
function add(...values) {
    let addition = 0;
    for (let i = 0; i < values.length; i++) {
        addition += values[i];
    }
    console.log(addition);
}

add(1, 2);
add(1, 2, 3, 4);