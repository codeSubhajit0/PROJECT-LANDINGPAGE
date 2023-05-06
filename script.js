'use strict'
let Input = document.querySelector('input');
Input.addEventListener('click', function () {
    window.open("https://codesubhajit0.github.io/Create-Account-/Login.html", '_self');
})
const menue = document.querySelector('.hamburger_menue');

menue.addEventListener('click', function () {
    document.querySelector('.hamburger_menue').classList.toggle('pos')
    document.querySelector('.line1').classList.toggle('line1h');
    document.querySelector('.line3').classList.toggle('line3h');
    document.querySelector('.line2').classList.toggle('line2h');
    document.querySelector('.menue').classList.toggle('menue_vis');
    document.querySelector('.menue').classList.toggle('menue_dis');
})
