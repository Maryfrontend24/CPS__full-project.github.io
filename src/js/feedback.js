let buttonFeedback = document.querySelector('.button--mail-window');
let dropdown = document.querySelector('.feedback-modal');
let close = dropdown.querySelector('.feedback-modal__close');
let feedBackOverlay = document.createElement('div');


buttonFeedback.addEventListener('click', function() { 
    feedBackOverlay.classList.add('overlay');

    document.body.appendChild(feedBackOverlay);

    dropdown.classList.add('feedback-modal--open');

    document.body.classList.add('fixed');
});

close.addEventListener('click', function() {
    dropdown.classList.remove('feedback-modal--open');

    document.body.removeChild(feedBackOverlay);

    document.body.removeAttribute('class');
});

document.addEventListener('keydown', function(e) {
    if (e.key === 27) {
        dropdown.classList.remove('feedback-modal--open');

        document.body.removeAttribute('class');
    }
});

feedBackOverlay.addEventListener('click', function(){
    dropdown.classList.remove('feedback-modal--open');
    document.body.removeChild(this);
    document.body.removeAttribute('class');
});


