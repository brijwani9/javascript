const person = {
    name: "Brij",
    age: 20,
    city: "Savda",
    country: "India"
}

const {
    name,
    age
} = person;
console.log(name, age); // It will print Brij 20

// Giving different names to variables
const {
    name: personName,
    age: personAge,
    city: personCity = 'Default city',
    state: personState = 'Default state'
} = person;
console.log(personName, personAge, personCity, personState); // It will print Brij 20 Savda Default state

// Mutate existing variables
let pName = "Default name";
let pAge = 100;
({
    name: pName,
    age: pAge
} = person);
console.log(pName, pAge); // It will print Brij 20


// Destructuring while passing object to function
function printPersonDetails({
    name: pName,
    age: pAge
}) {
    console.log("From printPersonDetails: " + pName, pAge); // It will print From printPersonDetails: Brij 20
}

printPersonDetails(person);