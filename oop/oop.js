'use strict';

const Person = function (firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear
    console.log("This: ", this);

    // This is not optimized way to add methods.
    // This will create copy of method in all objects.
    // this.calculateAge = function () {
    //     console.log(`Age of ${this.firstName} is ${2021 - this.birthYear}`);
    // };
}

const p1 = new Person('FName1', 'LName1', 1989);
console.log("p1: ", p1);

const p2 = new Person('FName2', 'LName2', 1992);
console.log("p2: ", p2);

console.log("p1 instanceof Person: ", p1 instanceof Person);

// Prototypes

// This method will be the single copy for all objects
Person.prototype.printAge = function () {
    console.log(`Age: ${2021 - this.birthYear}`);
};

Person.prototype.species = "Human";

Person.prototype.printDetails = function () {
    console.log(`Age of ${this.firstName} ${this.lastName} is ${2021 - this.birthYear}`);
};

p1.printAge();
p1.printDetails();

// Checking prototypes of object
// new keyword creates __proto__ on every object
console.log(`p1 proto: `, p1.__proto__);
console.log(`p1.__proto__ == Person.prototype: `, p1.__proto__ === Person.prototype); // true
console.log(p1.hasOwnProperty('firstName')); // true
console.log(p1.hasOwnProperty('species')); // false

// Classes are not hoisted
// Classes are also another first-class citizens like functions
// Classes are executed in strict mode
class Home {
    constructor(numberOfRooms, numberOfBalcony, numberOfBathRooms) {
        this.numberOfRooms = numberOfRooms;
        this.numberOfBalcony = numberOfBalcony;
        this.numberOfBathRooms = numberOfBathRooms;
    }

    // This static function will not be present in the object prototype.
    static statFunction() {
        console.log("This is static function.");
    }

    // Getter method
    get getNumberOfRooms() {
        return this.numberOfRooms;
    }

    set setNumberOfRooms(updateRooms) {
        this.numberOfRooms = updateRooms;
    }

    // This will not be added in every object but it will be added in Home protoytpe.
    printDetails() {
        console.log(`Number of rooms: ${this.numberOfRooms}, number of bath rooms: ${this.numberOfBathRooms} and number of balcony: ${this.numberOfBalcony}`);
    }
}

console.log(Home.statFunction()); // This is static function

const home1 = new Home(2, 2, 2);
home1.printDetails(); // Number of rooms: 2, number of bath rooms: 2 and number of balcony: 2
home1.setNumberOfRooms = 100;
console.log(home1.getNumberOfRooms); // 100
console.log("Home.prototype === home1.__proto__: " + (Home.prototype === home1.__proto__)); // true

// Object.create
// This is mainly used to set prototype manually.
class City {
    constructor(name, state, country) {
        this.name = name;
        this.state = state;
        this.country = country;
    }

    // Setting some prototype function
    printDetails() {
        console.log(`Name: ${this.name}, State: ${this.state}, Country: ${this.country}`);
    }
}

const puneCity = new City('Pune', 'Maharashtra', 'India');
console.log('puneCity prototype: ', puneCity.__proto__); // Here printDetails will be part of prototype

const newCityProto = {
    printCityDetails() {
        console.log(`New city details, Name: ${this.name}, State: ${this.state}, Country: ${this.country}`);
    }
}

const mumbaiCity = Object.create(newCityProto);
mumbaiCity.name = 'Mumbai';
mumbaiCity.state = 'Maharashtra';
mumbaiCity.country = 'India';

console.log('mumbaiCity prototype: ', mumbaiCity.__proto__); // Here only printCityDetails will be present in prototype.


// Inheritance

const Animal = function (name) {
    this.name = name;
}

Animal.prototype.printName = function () {
    console.log("Name: " + this.name);
}


const Cat = function (name, legs) {
    Animal.call(this, name);
    this.legs = legs;
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.printCatDetails = function () {
    console.log("Cat deails");
}

const cat = new Cat('Cat', 4);
console.log("cat: ", cat);
console.log('Cat proto: ', cat);

// With ES6 classes

class Car {
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }

    printCarDetails() {
        console.log(`Name: ${this.name}, Company: ${this.company}`);
    }
}

class BMW extends Car {
    constructor(name, company, category) {
        super(name, company);
        this.category = category;
    }
}

const bmwCar = new BMW('BMW', 'BMW', 'XUV');
console.log("bmwCar: ", bmwCar);
console.log("bmwCar prototype: ", bmwCar.__proto__);


// Encapsulation
// Variables with _ are conventionally protecte or private variables and we are not supposed to touch them from outside.
class Employee {
    country = 'India';

    // This is private field
    // #privateField = 'This is private field';

    constructor(name, state, country) {
        this.name = name;
        this.state = state;
    }

    // Protected methods
    _protectedMethods() {}

    // Private method
    // #privateMethod() {
    // }
}