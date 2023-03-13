'use strict';

// All sections from HTML and its top offset
const aboutSection = document.querySelector('.section-about');
let topPosAbout = aboutSection.offsetTop;
const experienceSection = document.querySelector('.section-experience');
let topPosExperience = experienceSection.offsetTop;
const contactSection = document.querySelector('.section-contact');
let topPosContact = contactSection.offsetTop;
const projectSection = document.querySelector('.section-projects');
let topPostProjects = projectSection.offsetTop;
let header = document.getElementById("header");
let sticky = header.offsetTop;
const homeSection = document.querySelector('.section-home');
let topPosHome = homeSection.offsetTop;

// Add class list to each elements and removes it
function animationsOnScroll() {

  // Page YOffset is bigger or equal to sticky -> add sticky class
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    // Remove the sticky class
    header.classList.remove("sticky");
  }

  // Page YOffset is bigger or equal to sticky -> add appear class
  if (window.pageYOffset >= topPosAbout - 150) {
    aboutSection.classList.add('animationAppear');
  } else if (window.pageYOffset <= topPosAbout - 250) {
    // Remove the class
    aboutSection.classList.remove('animationAppear');
  }

  // Page YOffset is bigger or equal to sticky -> add appear class
  if (window.pageYOffset >= topPostProjects - 100) {
    projectSection.classList.add('animationAppear');

  } else if (window.pageYOffset <= topPostProjects - 250) {
    projectSection.classList.remove('animationAppear');
    // Remove the class
  }

  // Page YOffset is bigger or equal to sticky -> add appear class
  if (window.pageYOffset >= topPosExperience - 100) {
    experienceSection.classList.add('animationAppear');
  } else if (window.pageYOffset <= topPosExperience - 250){
    // Remove the class
    experienceSection.classList.remove('animationAppear');
  }

  // Page YOffset is bigger or equal to sticky -> add appear class
  if (window.pageYOffset >= topPosContact - 100) {
    contactSection.classList.add('animationAppear');
  } else if (window.pageYOffset <= topPosContact - 250) {
    // Remove the class

    contactSection.classList.remove('animationAppear');
  }
}

// On scroll fires the animations function
window.onscroll = function() {animationsOnScroll()};

// Add class list or removes it based on the pageYOffset
const showOnLoad = function() {
  if (window.pageYOffset >= topPosHome) {
    homeSection.classList.add('animationAppear');
  } else {
    homeSection.classList.remove('animationAppear');
  }
}

// On load fires the showOnLoad animation function
window.addEventListener('load', showOnLoad());

// Burger menu parent element of three lines
const burgerMenu = document.querySelector('.header-burger_menu');

// Burger menu's three lines: Top, Mid and bottom
const burgerMenuTop = document.querySelector('.burger_menu--top');
const burgerMenuMid = document.querySelector('.burger_menu--mid');
const burgerMenuBottom = document.querySelector('.burger_menu--bottom');
const navBar = document.querySelector('nav');

// Event listener that toggles classes of burger-menu
// For animation  
burgerMenu.addEventListener('click', () => {
  navBar.classList.toggle('nav-slide_in');
  burgerMenuTop.classList.toggle('top-rotate');
  burgerMenuBottom.classList.toggle('bottom-remove');
  burgerMenuMid.classList.toggle('mid-rotate');
});