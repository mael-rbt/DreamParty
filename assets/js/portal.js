document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '.h-g',
        translateX: function() { return anime.random(-20, -35); },
        translateY: function() { return anime.random(115, 105); },
        easing: 'easeInQuart',
        delay: 0,
        easing: 'easeInOutQuad',
        duration: 5000
    });
    anime({
        targets: '.h-d',
        translateX: function() { return anime.random(150, 160); },
        translateY: function() { return anime.random(190, 200); },
        easing: 'easeInQuart',
        delay: 0,
        easing: 'easeInOutQuad',
        duration: 5000
    });

    anime({
        targets: '.b-g',
        translateX: function() { return anime.random(-30, -35); },
        translateY: function() { return anime.random(-110, -115); },
        easing: 'easeInQuart',
        delay: 0,
        easing: 'easeInOutQuad',
        duration: 5000
    });

    anime({
        targets: '.b-d',
        translateX: function() { return anime.random(-5, 0); },
        translateY: function() { return anime.random(-110, -100); },
        easing: 'easeInQuart',
        delay: 0,
        easing: 'easeInOutQuad',
        duration: 5000
    });

    anime({
        targets: '.pchoice',
        opacity: [0, 1],
        translateY: [0, -150],
        easing: 'spring(1, 80, 20, 0)',
        delay: 3000
    });
    anime({
        targets: '.logo',
        translateY: [0, -25],
        easing: 'spring(1, 80, 20, 0)',
        delay: 3000
    });
});     
