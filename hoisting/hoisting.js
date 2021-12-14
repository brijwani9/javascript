'use strict';

// Here functiona can be called before its definition because of hoisting.
// Hoisting only works for functions and variables of type var.
printDateNow();


function printDateNow() {
    console.log(new Date());
}


//TDZ is Temporal Dead Zone. It is the zone when variable is not usable.
function tdzTest() {
    //TDZ starts for let tdzVariable
    console.log('Printing something.');
    printDateNow();
    //TDZ ends for let tdzVariable

    let tdzVariable = 10;
    console.log(tdzVariable);
}