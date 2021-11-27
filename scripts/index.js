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

/**
 * Создает и добавляет радикнопки в раздел Пресса
 * @param {Object} pressItem 
 */
function addRadioButtonPress(pressItem) {
   
    //СТАТИЧЕСКАЯ ИНИЦИАЛИЗАЦИЯ
    addRadioButtonPress.pressContent ||= document.querySelector('.press__content');
    addRadioButtonPress.subTitle ||= addRadioButtonPress.pressContent.querySelector('.press__subtitle');
    addRadioButtonPress.link ||= addRadioButtonPress.pressContent.querySelector('.press__button');
    addRadioButtonPress.pressRadio ||= document.querySelector('.press__radio');

    addRadioButtonPress.count ||= 0;
    addRadioButtonPress.count++;

    const button = document.createElement('input');
    button.type = "radio";
    button.classList.add("press__link-select");
    button.id = `press_select_${addRadioButtonPress.count}`;
    button.name = 'press_select';
    button.value = addRadioButtonPress.count;

    button.pressItem = pressItem;

    button.addEventListener('change', ev=>{
        const pressItem = ev.target.pressItem;

        const accent = document.createElement('span');
        accent.classList.add('press__accent');
        accent.textContent = pressItem.acccent;

        addRadioButtonPress.subTitle.textContent = "";
        addRadioButtonPress.subTitle.append(accent); 
        addRadioButtonPress.subTitle.append(pressItem.description);
        addRadioButtonPress.link.href = pressItem.link;

    });

    label = document.createElement('label');
    label.htmlFor = button.id;
    label.classList.add('press__radio-label');

    addRadioButtonPress.pressRadio.append(button);
    addRadioButtonPress.pressRadio.append(label);    
}

//ОБРАБОТЧИКИ СОБЫТИЙ

//Видимость меню хедера
buttonMenuHeader.addEventListener('click', switchVisibilityHeaderMenu);
buttonCloseMenu.addEventListener('click', switchVisibilityHeaderMenu);

//Кнопки вперед-назад галереи
buttonForwardGallery.addEventListener('click', () => scrollGalery(contentGallery.scrollLeft + imgGallery.offsetWidth));
buttonBackGallery.addEventListener('click', () => scrollGalery(contentGallery.scrollLeft - imgGallery.offsetWidth));


///INIT DATA

const dataPress = [{
    "acccent": "Engadget: ",
    "description": "VW’s e-BULLI concept shows how your classic van can become an EV.",
    "link": "https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html"
}, {
    "acccent": "Drive.ru: ",
    "description": "Вэн Volkswagen e-Bulli скрестил классику с современной техникой.",
    "link": "https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html"
}];

dataPress.forEach(element => {
    addRadioButtonPress(element);
});

document.querySelector('.press__link-select').click();


const formSubsription = document.querySelector('.subscription__form');
const inputsSubscription = Array.from(formSubsription.querySelectorAll('.subscription__input'));
const buttonSubmitSubscription = formSubsription.querySelector('.subscription__submit');

formSubsription.addEventListener('submit', (event)=>{    

    if (inputsSubscription.every(el=>el.validity.valid)) {
        event.preventDefault();        
        buttonSubmitSubscription.value = "Готово!";
    }    
    
});