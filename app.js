'use strict';

const headerEl = document.querySelector('.header');
const btnEl = document.querySelector('.btn-mobile-nav');
const navEl = document.getElementById('nav');

// Glass morphism animation
btnEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
    if (headerEl.classList.contains('nav-open')) {
        document.body.classList.add('.overflow');
    } else {
        document.body.classList.remove('.overflow');
    }
    headerEl.classList.toggle('glass');
    navEl.classList.toggle('glass');
});

// Sticky navigation and nav's link indicator
// Highlights link once the certain section gets into the view
const sectionHomeMessage = document.querySelector('.section-home');
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        if (!ent.isIntersecting) {
            document.body.classList.add('sticky');
        } else {
            document.body.classList.remove('sticky');
        }
    }, {
        root: null,
        treshold: 0,
    }
);

obs.observe(sectionHomeMessage);

// Closing the navigation
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
    link.addEventListener('click', () => {
        if (link.classList.contains('close-nav')) {
            headerEl.classList.toggle('nav-open');
            headerEl.classList.toggle('glass');
            navEl.classList.toggle('glass');
        }
    });
});