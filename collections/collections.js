'use strict';

// Set:
const setOfFood = new Set(['Pizza', 'Burger', 'Pasta', 'Pasta']);
console.log(setOfFood); // {'Pizza', 'Burger', 'Pasta'}

setOfFood.add('Pizza');
setOfFood.add('Samosa');
console.log(setOfFood); // It will print {'Pizza', 'Burger', 'Pasta', 'Samosa'}


//Map:
const mapValues = new Map();
mapValues.set(1, 'Number one');
mapValues.set(2, 'Number two');
mapValues.set(3, 'Number three');
console.log(mapValues); // It will print
/*
0: {1 => "Number one"}
1: {2 => "Number two"}
2: {3 => "Number three"}
*/

// Get value from map
console.log(mapValues.get(1)); // It will print Number one

// Add value to map
mapValues.set(4, 'Number four');

// Delete value from map
mapValues.delete(1);

// Get size of map
mapValues.size;

// We can use objects as map keys
const obj = {
    name: 'Brij',
    age: 32
}

mapValues.set(obj, "This is brijesh entry");
console.log(mapValues.get(obj)); // This will print This is brijesh entry

//Iterating on map
for (const entry of mapValues.entries()) {
    console.log(entry);
}
// The above for loop will print
/*
(2)[2, 'Number two']
collections.js: 47(2)[3, 'Number three']
collections.js: 47(2)[4, 'Number four']
collections.js: 47(2)[{…}, 'This is brijesh entry']
*/

//Get all keys of map
console.log(mapValues.keys()); // This will print
/*
0: 2
1: 3
2: 4
3:
    value: {
        name: 'Brij',
        age: 32
    }
 */

// Get all values of map
console.log(mapValues.values());
// This will print
/*
0: "Number two"
1: "Number three"
2: "Number four"
3: "This is brijesh entry"
 */