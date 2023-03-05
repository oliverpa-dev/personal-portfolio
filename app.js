'use strict';

// On scroll run the stickyNavbar function
window.onscroll = function() {stickyNavbar()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyNavbar() {
  // When the top part of the view hits the header
  // Add sticky class to the header
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    // Remove the sticky class from header
    header.classList.remove("sticky");
  }
}

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