"use strict"

const slideWidth = document
  .querySelector(".slide_show")
  .getBoundingClientRect().width;
const slideContainer = document.querySelector(".slide_show_sections");
const slide = Array.from(slideContainer.children);

const menue = document.querySelector(".hamburger_menue");
const btn1 = document.querySelector(".slide_show_btn1");
const btn2 = document.querySelector(".slide_show_btn2");
// const btn2 = document.querySelector(".slide_show_btn2");

let Input = document.querySelector("input");
Input.addEventListener("click", function () {
  window.open(
    "https://codesubhajit0.github.io/Create-Account-/Login.html",
    "_self"
  );
});

menue.addEventListener("click", function () {
  document.querySelector(".hamburger_menue").classList.toggle("pos");
  document.querySelector(".line1").classList.toggle("line1h");
  document.querySelector(".line3").classList.toggle("line3h");
  document.querySelector(".line2").classList.toggle("line2h");
  document.querySelector(".menue").classList.toggle("menue_vis");
  document.querySelector(".menue").classList.toggle("menue_dis");
  document.querySelectorAll(".menue_text").forEach((item) => {
    item.classList.toggle("menue_text_vis");
  });
});

//Arranging the slides
const setPositionSlides = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slide.forEach(setPositionSlides);

const moveSlides = function (slideContainer, currentSlide, targetSlide) {
  slideContainer.style.transform =
    "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("active");
  targetSlide.classList.add("active");
};

btn1.addEventListener("click", function (e) {
  const currentSlide = slideContainer.querySelector(".active");
  const nextSlide = currentSlide.nextElementSibling;
  if (!nextSlide.className.includes("section_4")) {
    moveSlides(slideContainer, currentSlide, nextSlide);
  } else {
    moveSlides(slideContainer, currentSlide, nextSlide);
    btn1.classList.remove("active_btn");
    btn2.classList.add("active_btn");
  }
});

btn2.addEventListener("click", function (e) {
  const currentSlide = slideContainer.querySelector(".active");
  const previousSlide = currentSlide.previousElementSibling;

  // moveSlides(slideContainer , currentSlide , previousSlide);
  if (!previousSlide.className.includes("section_1")) {
    moveSlides(slideContainer, currentSlide, previousSlide);
  } else {
    moveSlides(slideContainer, currentSlide, previousSlide);
    btn2.classList.remove("active_btn");
    btn1.classList.add("active_btn");
  }
});

//Loader page
window.onload = function(){
    setTimeout(() => {
        document.querySelector(".loder_l").classList.add("loder_dis");
        document.querySelector('main').classList.add('main_vis');
    }, 3000);
}




document.querySelector('.ham-login').addEventListener('click' , function (e) {
  e.preventDefault;
  window.open("https://bakurachat.000webhostapp.com/" , "_self");
})

document.querySelector('.ham-sigin').addEventListener('click', function(e) {
  e.preventDefault;
  window.open("https://bakurachat.000webhostapp.com/login.php" , "_self");
});