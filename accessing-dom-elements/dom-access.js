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