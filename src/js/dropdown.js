let burger = document.querySelector('.burger');
let dropdown = document.querySelector('.side-window');
let close = dropdown.querySelector('.side-window__button--close');
let sideBackOverlay = document.createElement('div');

burger.addEventListener('click', function() { 
    sideBackOverlay.classList.add('overlay');

    document.body.appendChild(sideBackOverlay);

    dropdown.classList.add('side-window--open');

    document.body.classList.add('fixed');
});

close.addEventListener('click', function() {
    dropdown.classList.remove('side-window--open');

    document.body.removeChild(sideBackOverlay);

    document.body.removeAttribute('class');
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        dropdown.classList.remove('side-window--open');

        document.body.removeAttribute('class');
    }
});

sideBackOverlay.addEventListener('click', function(){
    dropdown.classList.remove('side-window--open');
    document.body.removeChild(this);
    document.body.removeAttribute('class');
});


