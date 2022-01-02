'use strict';

const asyncFucntion = async function () {
    // await can be used only in async functions and top level bodies of modules.
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("Users: ", users);

    // Async function will always return promise and we can handle it just like normal promise.
    return 'Async function is executed successfully';
}

asyncFucntion().then((res) => {
    console.log(res);
});
console.log('Some log');



const getUserData = function () {
    return fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
        return res.json();
    })
}

const otherFunction = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Some string data");
        }, 1000)

    });
}

// ######################## Promise.all() ########################
// execute parallel tasks
const parallelAsync = async function () {

    // In combined data we will result of all promises.
    // We might get different data like array or string based on function
    const combinedData = await Promise.all([getUserData(), getUserData(), getUserData(), otherFunction()]);
    console.log("parallelAsync: ", combinedData);
}
parallelAsync();

const rejectedPromise = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject("Some error");
        }, 2000)
    });
}

const parallelAsync2 = async function () {
    try {
        // Here whole promise will fail and error will be thrown.
        // Here error will be thrown if any promise fails. All needs to be resolved.
        const combinedData = await Promise.all([otherFunction(), rejectedPromise()]);
        console.log("parallelAsync2: ", combinedData);
    } catch (err) {
        console.log("Some error");
    }

    // Here no error will be thrown even though one promise is rejected.
    const combinedData2ncludingRejectedPromise = await Promise.allSettled([otherFunction(), rejectedPromise()]);
    console.log("combinedData2ncludingRejectedPromise: ", combinedData2ncludingRejectedPromise);
    // This will return result something like below,
    // 0: {
    //     status: 'fulfilled',
    //     value: 'Some string data'
    // }
    // 1: {
    //     status: 'rejected',
    //     reason: 'Some error'
    // }
}
parallelAsync2();

// ######################## Promise.race() ########################
// This function will return result of first completing promise

const raceExample = async function () {
    // Here if first promise fails then whole promise will fail.
    // Here error will be thrown if all fails. Also error will be thrown if first settling promise fails.
    const firstResolvedPromise = await Promise.race([otherFunction(), rejectedPromise()]);
    console.log("firstResolvedPromise from raceExample: ", firstResolvedPromise);
}
raceExample();



const anyExample = async function () {
    // Here whole promise will not fail if one fails. It will ignore rejected promises
    // Here error will be thrown if all fails.
    const firstResolvedPromise = await Promise.any([otherFunction(), rejectedPromise()]);
    console.log("firstResolvedPromise from anyExample: ", firstResolvedPromise);
}
anyExample();