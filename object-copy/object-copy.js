'use strict';

const brij = {
    name: 'Brij',
    age: 30,
    friends: ['A', 'B', 'C']
}

const brijShallowCopy = brij;
brijShallowCopy.age = 20;

console.log("Sallow copy examples");
console.log(brij);
console.log(brijShallowCopy);
console.log("==========================================");

// Note that Object.assign will not copy inner reference types.
console.log("Deep copy examples using Object.assign");
const brijDeepCopy1 = Object.assign({}, brij);
brijDeepCopy1.age = 19;
brijDeepCopy1.friends.push('PQR');
console.log(brij);
console.log(brijDeepCopy1);
console.log("==========================================");

// This will deeply clone the object.
console.log("Deep copy examples using JSON");
const brijDeepCopy2 = JSON.parse(JSON.stringify(brij));
brijDeepCopy2.age = 18;
brijDeepCopy2.friends.push("New in copy");
console.log(brij);
console.log(brijDeepCopy2);
console.log("==========================================");