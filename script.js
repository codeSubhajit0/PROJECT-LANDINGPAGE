'use strict'

const menue = document.querySelector('.hamburger_menue');
const btn = document.querySelector(".slide_show_btn");

let Input = document.querySelector('input');
Input.addEventListener('click', function () {
    window.open("https://codesubhajit0.github.io/Create-Account-/Login.html", '_self');
})

menue.addEventListener('click', function () {
    document.querySelector('.hamburger_menue').classList.toggle('pos')
    document.querySelector('.line1').classList.toggle('line1h');
    document.querySelector('.line3').classList.toggle('line3h');
    document.querySelector('.line2').classList.toggle('line2h');
    document.querySelector('.menue').classList.toggle('menue_vis');
    document.querySelector('.menue').classList.toggle('menue_dis');
})

let slideCount = 1;
btn.addEventListener('click', (e) => {
    console.log(document.querySelector(`.slide_show_section_${1}`));
    console.log(slideCount);
    
    
    if(slideCount <5) {
            // if(document.querySelectorAll('.1').classList.contains(1))
            document.querySelector(`.slide_show_section_${slideCount}`).style.display = 'none';
            document.querySelector(`.slide_show_section_${slideCount + 1}`).style.display = 'none';
            document.querySelector(`.slide_show_section_${slideCount}`).classList.add('animate');
            slideCount+=1;
        }
        else {
            slideCount -= 1;
            document.querySelector(`.slide_show_section_${slideCount}`).style.display = 'none';
            document.querySelector(`.slide_show_section_${slideCount + 1}`).style.display = 'none';
            document.querySelector(`.slide_show_section_${slideCount}`).classList.add('animate');
            slideCount+=1;
        }
})
                                                                                                                                                                                              