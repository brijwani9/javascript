const myName = "Brij";

function printDetails() {
    const age = 65;

    function moreDetails() {
        const bd = 1965;

        // Here myName and age variables will be resolved from variable lookup and scope chaining.
        console.log(`${myName} ${age} ${bd}`);
    }
    moreDetails();
}

printDetails();