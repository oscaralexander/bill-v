'use strict';

import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
    direction: 'vertical',
    lerp: 0.1,
    smooth: true,
});

lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    document.body.style.setProperty('--scroll-velocity', velocity);
});

const raf = () => {
    lenis.raf();
    requestAnimationFrame(raf);
}

const updatePositions = () => {
    const $$sections = document.querySelectorAll('.section:not(.intro)');
    const viewportHeight = window.innerHeight;

    $$sections.forEach($section => {
        const sectionHeight = $section.offsetHeight;
        $section.style.top = ((sectionHeight - viewportHeight) * -1) + 'px'
    });
}

window.onload = updatePositions;
window.onresize = updatePositions;

updatePositions();
requestAnimationFrame(raf);