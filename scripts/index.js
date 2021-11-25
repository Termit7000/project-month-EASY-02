const buttonCloseMenu = document.querySelector('.header__close-menu');
const buttonMenuHeader = document.querySelector('.header__menu');
const linksHeader = document.querySelector('.header__links');
const logoHeader = document.querySelector('.header__logo');

const buttonForwardGallery = document.querySelector('.gallery__button_type_forward');
const buttonBackGallery = document.querySelector('.gallery__button_type_back');
const contentGallery = document.querySelector('.gallery__content');
const imgGallery = document.querySelector('.gallery__img');


/**
 * Переключает видимость меню шапки
 */
function switchVisibilityHeaderMenu() {
    linksHeader.classList.toggle('header__item_active');
    logoHeader.classList.toggle('header__item_inactive');
    buttonMenuHeader.classList.toggle('header__item_inactive');
    buttonCloseMenu.classList.toggle('header__item_active');
}

/**
 * перемещает фокус галереи
 * @param {Number} xScroll 
 */
function scrollGalery(xScroll) {
    contentGallery.scrollTo({
        top: 0,
        left: xScroll,
        behavior: 'smooth'
    });
}

//Видимость меню хедера
buttonMenuHeader.addEventListener('click',switchVisibilityHeaderMenu);
buttonCloseMenu.addEventListener('click',switchVisibilityHeaderMenu);

//Кнопки вперед-назад галереи
buttonForwardGallery.addEventListener('click',()=>scrollGalery(contentGallery.scrollLeft + imgGallery.offsetWidth));
buttonBackGallery.addEventListener('click',()=>scrollGalery(contentGallery.scrollLeft - imgGallery.offsetWidth));