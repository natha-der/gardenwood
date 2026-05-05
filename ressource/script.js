"use strict";

document.addEventListener('DOMContentLoaded', function() {

    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });


    let items = document.querySelectorAll('.faq-item');
    for (let item of items) {
        item.addEventListener('click', function() {
            let answer = this.querySelector(".faq-answer")
            let arrow = this.querySelector(".faq-arrow")
            if (answer.style.display === 'none') {
                answer.style.display = "block";
                arrow.textContent = "-";
            } else {
                answer.style.display = "none";
                arrow.textContent = "+";
            }
        });
    }
});
