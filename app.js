'use strict';

const headerEl = document.getElementById('header');
const btnEl = document.querySelector('.btn-mobile-nav');

btnEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
});