'use strict';

const sampleString = 'This project contains js lot of js examples.';

console.log(sampleString[0]); // T
console.log(sampleString.indexOf('t')); // 11
console.log(sampleString.lastIndexOf('t')); // 27

// slice: first argument is starting index from which string will be returned.
console.log(sampleString.slice(35)); // This will print: examples.

// splice also works with negative argument
console.log(sampleString.slice(-9)); // This will print: examples.

console.log(sampleString.slice(0, 4)); // This will print: This

// Find first word
const firstWord = sampleString.slice(0, sampleString.indexOf(' '));
console.log(firstWord); // This will print: This

// Find last word
const lastWord = sampleString.slice(sampleString.lastIndexOf(' ') + 1);
console.log(lastWord); // This will print: examples.

const someName = "John Carter";
console.log(someName.toUpperCase()); // JOHN CARTER
console.log(someName.toLowerCase()); // john carter
console.log(someName.trim()); // This will remove all white spaces and new line characters.

const priceGB = '27,78@';
const priceUS = priceGB.replace('@', '$');
console.log(priceUS); // This will print: 27,78$

// Using regex
const poem = "The wheels on the bus goes square and square";
console.log(poem.replace(/square/g, 'round')); // The wheels on the bus goes round and round

// includes
console.log(poem.includes('wheels')); // true

// starts with
console.log(poem.startsWith('The')); // true

// Ends  with
console.log(poem.endsWith('square')); // true

// split
const poemWords = poem.split(' ');
console.log([poemWords]); // This will print: ['The', 'wheels', 'on', 'the', 'bus', 'goes', 'square', 'and', 'square']

// Join multiple strings
const stringArray = ['Mr', 'Davis', 'Goerge'];
console.log(stringArray.join(' ')); // This will print: Mr Davis Goerge

// padStart
const someNumber = '25';
console.log(someNumber.padStart(5, '0')); // This will print: 00025