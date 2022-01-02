'user strict';

// Old way fo fecthing data from API
const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();

request.addEventListener('load', function () {
    console.log('Request result: ', this);
    // Here this will print all data from that provided URL.
    // Here in this we will get different values like responseText, status etc.
});

// New way with fetch function
const res = fetch('https://jsonplaceholder.typicode.com/users');
res.then((val) => {
    console.log("Request result using fetch: ", val);
    val.json().then((data) => {
        console.log('Data: ', data);
    });
});

// Building promise which resolved immediately
Promise.resolve("Some data").then((data) => console.log(date));


// Creating a new promise
const manualPromise = new Promise(function (resolce, reject) {
    if (Math.random() >= 0.5) {
        resolce("You won..🤩");
    } else {
        reject("You lost..😪");
    }
});

manualPromise.then((res) => {
    console.log(res);
}, (error) => {
    console.log(error);
});