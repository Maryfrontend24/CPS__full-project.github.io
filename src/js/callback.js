
let buttonCallback = document.querySelector('.button--tell');
let dropdown = document.querySelector('.callback-modal');
let close = dropdown.querySelector('.callback-modal__close');
let callDropdownOverlay = document.createElement('div');


buttonCallback.addEventListener('click', function() { 
    callDropdownOverlay.classList.add('overlay');

    document.body.appendChild(callDropdownOverlay);

    dropdown.classList.add('callback-modal--open');

    document.body.classList.add('fixed');
});

close.addEventListener('click', function() {
    dropdown.classList.remove('callback-modal--open');

    document.body.removeChild(callDropdownOverlay);

    document.body.removeAttribute('class');
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        dropdown.classList.remove('callback-modal--open');

        document.body.removeAttribute('class');
    }
});

    callDropdownOverlay.addEventListener('click', function(){
    dropdown.classList.remove('callback-modal--open');
    document.body.removeChild(this);
    document.body.removeAttribute('class');
});













