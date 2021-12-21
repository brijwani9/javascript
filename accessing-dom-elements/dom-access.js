'use strict';

// Access element with some class attached with it.
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Updated value for message with class  message."

// Access some element from DOM with specific id.
console.log(document.querySelector('#message').textContent);
document.querySelector('#message').textContent = "Updated value for message with id  message."

//Set value to input field of type text.
document.querySelector('.inputText').value = "Input value";
console.log(document.querySelector('.inputText').value);

// Add click event listener on specific element.
document.querySelector('.show_alert_button').addEventListener('click', () => {
    alert("Input value is: " + document.querySelector('.inputText').value);
    document.querySelector('#button_click_text').style.backgroundColor = 'Green';
    document.querySelector('.final_message').classList.remove('final_message_red_class');
    document.querySelector('.final_message').classList.add('final_message_green_class');
});

//Add keydown event listener on the whole document
document.addEventListener('keydown', (event) => {
    document.querySelector('.key_press_message').textContent = `${event.key} pressed.`;
});

// Access whole html. head and body
console.log(document.documentElement); // Whole html
console.log(document.head); // This will select only head part
console.log(document.body); // This will select only body part

// Get all elements by class section
console.log(document.querySelectorAll('.section')); // This will return array of NodeList

// Get all input tags
console.log(document.getElementsByTagName('input')); // This will return array of HTMLCollection
// The difference between NodeList & HTMLCollection is that, NodeList is not updated real time but HTMLCollection dose.

// Creaing new elements
const createdMessage = document.createElement('div');
createdMessage.textContent = "This is programatically added message";

// Both of the below lines will add createdMessage only once.
// Because prepend and append methods will either add new element or move if already exists.
// As a result we will see only element at the end of the document.
document.body.prepend(createdMessage);
document.body.append(createdMessage);

// If we need element to be added twice then we can use something like below.
const clonedExampleMessage = document.createElement('div');
clonedExampleMessage.textContent = "This will appear twice in the DOM";
document.body.prepend(clonedExampleMessage);
document.body.append(clonedExampleMessage.cloneNode(true));

// Before after examples
const beforeAfterExample = document.createElement('div');
beforeAfterExample.textContent = "BEFORE AFTER EXAMPLES";
document.body.before(beforeAfterExample);
document.body.after(beforeAfterExample.cloneNode(true));

// Delete element from DOM
const deleteExample = document.createElement('div');
deleteExample.textContent = "THIS WILL BE REMOVED AFTER 3 SECONDS";
document.body.after(deleteExample);

setTimeout(() => {
    deleteExample.remove();
}, 3000);