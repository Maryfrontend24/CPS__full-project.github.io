var arrowLinkClass1 = document.querySelector('.arrow-link-header');

arrowLinkClass1.addEventListener('click',  (event) => {
    event.preventDefault();
    let itemsListClass = document.querySelector('.description__text');
    if (itemsListClass.classList.contains('unset-block--header')&& arrowLinkClass1.classList.contains('arrow-link-header--open')) {
        itemsListClass.classList.remove('unset-block--header');
        arrowLinkClass1.classList.remove('arrow-link-header--open');
        arrowLinkClass1.innerHTML="Читать далее";


        return ;
    }
    itemsListClass.classList.add('unset-block--header');
    arrowLinkClass1.classList.add('arrow-link-header--open');
    arrowLinkClass1.innerHTML="Скрыть все";

})






var arrowLinkClass2 = document.querySelector('.arrow-link--brends');

arrowLinkClass2.addEventListener('click',  (event) => {
    event.preventDefault();
    let itemsListClass = document.querySelector('.items__list');
    if (itemsListClass.classList.contains('unset-block--brends')&& arrowLinkClass2.classList.contains('arrow-link-brends--open')) {
        itemsListClass.classList.remove('unset-block--brends');
        arrowLinkClass2.classList.remove('arrow-link-brends--open');
        arrowLinkClass2.innerHTML="Показать все";


        return ;
    }
    itemsListClass.classList.add('unset-block--brends');
    arrowLinkClass2.classList.add('arrow-link-brends--open');
    arrowLinkClass2.innerHTML="Скрыть все";

})






var arrowLinkClass3 = document.querySelector('.arrow-link--technique');

arrowLinkClass3.addEventListener('click',  (event) => {
    event.preventDefault();
    let itemsListClass = document.querySelector('.items__list-technique');
    if (itemsListClass.classList.contains('unset-block')&& arrowLinkClass3.classList.contains('arrow-link--technique--open')) {
        itemsListClass.classList.remove('unset-block');
        arrowLinkClass3.classList.remove('arrow-link--technique--open');
        arrowLinkClass3.innerHTML="Показать все";


        return ;
    }
    itemsListClass.classList.add('unset-block');
    arrowLinkClass3.classList.add('arrow-link--technique--open');
    arrowLinkClass3.innerHTML="Скрыть все";

})



