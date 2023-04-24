'use strict';

// Sticky navigation and nav's link indicator
// Highlights link once the certain section gets into the view
const headerEl = document.querySelector('.header');
const sectionHome = document.querySelector('.section-home');
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
obs.observe(sectionHome);