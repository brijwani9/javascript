'use strict';

console.log(3 || 'brij'); // it will print 3  (😮)
console.log(0 || 'something'); // It will print something (😮)
// Basically || operator will alwats print truthy values if present.

console.log(3 && 'brij'); // it will print brij (😮)
console.log(0 && 'something'); // It will print 0 (😮)


// Nullish coalescing operator
// It will print other value only iff first value is null or undefined.
// For any other value other than null and undefined it will print first value.

const undefinedValue = undefined;
console.log(`${undefinedValue ?? 10}`); // It will print 10

const nullValue = null;
console.log(`${nullValue ?? 10}`); // It will print 10

const zeroValue = 0;
console.log(`${zeroValue ?? 10}`); // It will print 0

const emptyStringValue = '';
console.log(`${emptyStringValue ?? 10}`); // It will print empty string


// || && and ?? shorthand operator
const hotel1 = {
    name: 'Sai hotel',
    numGuest: 20
}

const hotel2 = {
    name: 'Krishna hotel',
    numGuest: 0
}

//Now we want to set number of guest to 10 of numGuest property is not present.
`hotel1.numGuest ||= 10`;
`hotel2.numGuest ||= 10`;
console.log(hotel1)
console.log(hotel2);