// Declare simple array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Declare array using Array class
const friends = new Array();

// Array operations

// Push: This will add element to array and return updated length of an array
let updatedLength = friends.push("Friend - B");
console.log("Updated length: " + updatedLength);

updatedLength = friends.push("Friend - C");
console.log("Updated length: " + updatedLength);

// Unshift: Adds element to the first position of array and returnes updated length of an array
updatedLength = friends.unshift("Friend - A");
console.log("Updated length: " + updatedLength);

console.log("Final array: " + friends);

// Pop: Removes and returns last element of an array
console.log(friends.pop());

//Shift: Removed and returns the first element of an array
console.log(friends.shift());