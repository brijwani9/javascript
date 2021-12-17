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

// Destructuring array
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // It will print 1 2 3

// Skipping aray element while destructuring
const [p, , q] = arr;
console.log(p, q); // It will print 1 3


//Setting default values while destructuring arrays.
const newArray = [10, 20];
const [age1 = 10, age2 = 10, age3 = 30] = newArray;
console.log(age1, age2, age3); // It will print 10 20 10

// slice function
// This will actually change the array
const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(exampleArray.slice(-1)); // 10
console.log(exampleArray.slice(8)); // [9, 10]
console.log(exampleArray.slice(6, 8)); // [7, 8]
console.log(exampleArray.reverse()); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(exampleArray.at(-1)); // 1


const ar1 = [1, 2, 3];
const ar2 = [4, 5, 6];
console.log(ar1.concat(ar2)); // [1, 2, 3, 4, 5, 6]

// Loopng on array

// In foreach we can not use break.
exampleArray.forEach(element => {
    console.log(element);
});

for (const value of exampleArray) {
    console.log(value);
}

for (const entry of exampleArray.entries()) {
    console.log(entry);
}



// Reduce function
const sumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = sumArray.reduce((total, value, index, originalArray) => {
    return total += value;
}, 0);
console.log("Sum of first 10 elements: " + sum); // Sum of first 10 elements: 55

// find method
const foundValue = sumArray.find((val) => {
    console.log("Find called"); // It will be called till the first element matches.
    return val < 2;
});
console.log("Found value = " + foundValue); // 1

// map method
const doubledValueArray = sumArray.map((val) => val * 2);
console.log("Doubled array: " + doubledValueArray); // 2,4,6,8,10,12,14,16,18,20

// findIndex
const indexOfTwo = sumArray.findIndex((val) => val == 2);
console.log("indexOfTwo: " + indexOfTwo); // 1

// some method
// This is same like includes except that we can add some condition instead fo exact euality.
console.log(sumArray.some(val => val > 9)); // true

// every method
console.log(sumArray.every(val => val > 0)); // true
console.log(sumArray.every(val => val > 9)); // false

// flat method
const nestedArray = [
    [1, 2, 3, [100, 200, 300]],
    [4, 5, 6], 7, 8, [20, 30]
];
console.log(nestedArray.flat()); //  [1, 2, 3, Array(3), 4, 5, 6, 7, 8, 20, 30]
console.log(nestedArray.flat(2)); // [1, 2, 3, 100, 200, 300, 4, 5, 6, 7, 8, 20, 30]

// flatMap method
const employee = {
    name: 'A',
    leaves: ['1 Dec 2021', '2 Dec 2021']
}
const empArray = [employee];
empArray.flatMap(emp => emp.leaves).forEach(val => console.log(val));
// 1 Dec 2021
// 2 Dec 2021
// flatMap method can not take depth parameter as flat method.

// Sort
// This method will mutate original array
// Sort always works on strings by default. So basically if we try to sort number array,
// then sort methd will by default convert it to string and then sorts.
const sortArray = [-1, 20, -30, 34, -78];
console.log(sortArray.sort()); // [-1, -30, -78, 20, 34]
// This is because sort converts anything to string and then sorts. 
// We can make this work properly as below,
console.log(sortArray.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
})); // [-78, -30, -1, 20, 34]

// Array constructor behaviour
const arConst1 = new Array(1, 2, 3, 4, 5);
console.log(arConst1); // [1, 2, 3, 4, 5]
// But if we create na array with single value in constructor
const arConst2 = new Array(5);
console.log(arConst2); // [empty × 5]
// This creates array with length 5 and all elements will be empty


// from method
const fromArray = Array.from({
    length: 2
}, () => 1);
console.log(fromArray); // [1, 1]