"use strict"

window.onload = function(){
    setTimeout(() => {
        document.querySelector(".loder_l").classList.add("loder_dis");
        document.querySelector('main').classList.add('main_vis');
    }, 3000);
};