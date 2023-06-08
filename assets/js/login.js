document.addEventListener('DOMContentLoaded', function(){
    let firstBtn = document.getElementById('first');
    let secondBtn = document.getElementById('second');
    let thirdBtn = document.getElementById('third');
    let fourthBtn = document.getElementById('fourth');
    let fithbisBtn = document.getElementById('fithbis');
    let fithBtn = document.getElementById('fith');
    let sixBtn = document.getElementById('six');

    firstBtn.addEventListener('click', function(event){
        event.preventDefault();
        let prenom = document.getElementById('prenom').value;
        document.getElementById('firstname').innerHTML = prenom;
        console.log(prenom);
        anime({
            targets: '.first-section',
            opacity: ['100%', '0%'],
            translateX: [0, -500],
            easing: 'easeInQuart',
            zIndex: [-1],
            delay: 0,
            duration: 250
        });
        anime({
            targets: '.second-section',
            opacity: ['0%', '100%'],
            translateX: [500, 0],
            easing: 'easeOutQuart',
            zIndex: [1],
            delay: 250,
            duration: 250
        });
    });

    secondBtn.addEventListener('click', function(event){
        event.preventDefault();
        anime({
            targets: '.second-section',
            opacity: ['100%', '0%'],
            translateX: [0, -500],
            easing: 'easeInQuart',
            zIndex: [-1],
            delay: 0,
            duration: 250
        });
        anime({
            targets: '.third-section',
            opacity: ['0%', '100%'],
            translateX: [500, 0],
            easing: 'easeOutQuart',
            zIndex: [1],
            delay: 250,
            duration: 250
        });
    });

    thirdBtn.addEventListener('click', function(event){
        event.preventDefault();
        anime({
            targets: '.third-section',
            opacity: ['100%', '0%'],
            translateX: [0, -500],
            easing: 'easeInQuart',
            zIndex: [-1],
            delay: 0,
            duration: 250
        });
        anime({
            targets: '.fourth-section',
            opacity: ['0%', '100%'],
            translateX: [500, 0],
            easing: 'easeOutQuart',
            zIndex: [1],
            delay: 250,
            duration: 250
        });
    });

    fourthBtn.addEventListener('click', function(event){
        event.preventDefault();
        anime({
            targets: '.fourth-section',
            opacity: ['100%', '0%'],
            translateX: [0, -500],
            easing: 'easeInQuart',
            zIndex: [-1],
            delay: 0,
            duration: 250
        });
        anime({
            targets: '.fith-section',
            opacity: ['0%', '100%'],
            translateX: [500, 0],
            easing: 'easeOutQuart',
            zIndex: [1],
            delay: 250,
            duration: 250
        });
    });
    fithbisBtn.addEventListener('click', function(event){
        event.preventDefault();
        let prenom = document.getElementById('prenom').value;
        document.getElementById('user-name').innerHTML = prenom;
        anime({
            targets: '.fithbis-section',
            opacity: ['100%', '0%'],
            translateX: [0, -500],
            easing: 'easeInQuart',
            zIndex: [-1],
            delay: 0,
            duration: 250
        });
        anime({
            targets: '.six-section',
            opacity: ['0%', '100%'],
            translateX: [500, 0],
            easing: 'easeOutQuart',
            zIndex: [1],
            delay: 250,
            duration: 250
        });
    });
    fithBtn.addEventListener('click', function(event){
        event.preventDefault();
        anime({
            targets: '.fith-section',
            opacity: ['100%', '0%'],
            translateX: [0, -500],
            easing: 'easeInQuart',
            zIndex: [-1],
            delay: 0,
            duration: 250
        });
        anime({
            targets: '.fithbis-section',
            opacity: ['0%', '100%'],
            translateX: [500, 0],
            easing: 'easeOutQuart',
            zIndex: [1],
            delay: 250,
            duration: 250
        });
    });
    sixBtn.addEventListener('click', function(event){
        event.preventDefault();
        window.location.href = './app.html';
    });
});