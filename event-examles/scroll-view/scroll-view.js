'use strict';

// This is not completely optimised method. Can be optimized using adding click event on top element and then add check on event.target element.
document.querySelectorAll('.section-link').forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    })
})