'use strict'

const menue = document.querySelector('.hamburger_menue');
const btn1 = document.querySelector(".slide_show_btn1");
const btn2 = document.querySelector(".slide_show_btn2");

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

let slideCount1 = 1;
btn1.addEventListener('click', (e) => {    
    slideCount1+=1;
    if(slideCount1 <= 4) {
            document.querySelector(`.slide_show_section_${slideCount1 -1}`).style.display = "none";
            document.querySelector(`.slide_show_section_${slideCount1 - 1}`).classList.remove('s');
            document.querySelector(`.slide_show_section_${slideCount1}`).classList.add('s'); 
            document.querySelector(`.slide_show_section_${slideCount1}`).classList.add('animate');            
            console.log(slideCount1);
            
        }
    else {  
        // slideCount =  0;
        btn2.style.display = 'block';
        btn1.style.display = 'none';
            // document.querySelector(`.slide_show_section_${4}`).style.display = 'none';
            // document.querySelector(`.slide_show_section_${3}`).style.display = 'none';
            // document.querySelector(`.slide_show_section_${2}`).style.display = 'none';
            // document.querySelector(`.slide_show_section_${1}`).style.display = 'none';
            // document.querySelector(`.slide_show_section_${slideCount + 1}`).style.display = 'block';
            // document.querySelector(`.slide_show_section_${slideCount + 1}`).classList.add('animate');
            // slideCount -= 1;
            // slideCount = 2;
            console.log(slideCount1);
            
        }
})

let slideCount2 =4;
btn2.addEventListener('click', (e) => {    
    slideCount2-=1;
    // if(slideCount2 > 1) {
    //         document.querySelector(`.slide_show_section_${slideCount2 + 1}`).style.display = "none";
    //         document.querySelector(`.slide_show_section_${slideCount2 + 1}`).classList.remove('s');
    //         document.querySelector(`.slide_show_section_${slideCount2}`).classList.add('s'); 
    //         document.querySelector(`.slide_show_section_${slideCount2}`).classList.add('animate');            
    //         console.log(slideCount2);
            
    //     }
    // else {  
        // slideCount =  0;
        // btn1.style.display = 'block';
        // btn2.style.display = 'none';
            // document.querySelector(`.slide_show_section_${4}`).style.display = 'none';
            // document.querySelector(`.slide_show_section_${3}`).style.display = 'none';
            // document.querySelector(`.slide_show_section_${2}`).style.display = 'none';
            // document.querySelector(`.slide_show_section_${1}`).style.display = 'none';
            // document.querySelector(`.slide_show_section_${slideCount + 1}`).style.display = 'block';
            // document.querySelector(`.slide_show_section_${slideCount + 1}`).classList.add('animate');
            // slideCount -= 1;
            // slideCount = 2;
            // console.log(slideCount2);
            
        // }/
        console.log(slideCount2);
        
})
                                                                                                                                                                                              