const buttonCloseMenu = document.querySelector('.header__close-menu');
const buttonMenuHeader = document.querySelector('.header__menu');
const linksHeader = document.querySelector('.header__links');
const logoHeader = document.querySelector('.header__logo');


function switchVisibilityHeaderMenu() {
    linksHeader.classList.toggle('header__item_active');
    logoHeader.classList.toggle('header__item_inactive');
    buttonMenuHeader.classList.toggle('header__item_inactive');
    buttonCloseMenu.classList.toggle('header__item_active');
}

buttonMenuHeader.addEventListener('click',switchVisibilityHeaderMenu);
buttonCloseMenu.addEventListener('click',switchVisibilityHeaderMenu);