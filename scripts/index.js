let popup = document.querySelector('.popup');
let buttonTypeEdit = document.querySelector('.button_type_edit');
let buttonTypeClose = document.querySelector('.button_type_close');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__item_type_name');
let jobInput = document.querySelector('.form__item_type_job');
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');


function OpenPopup() {
    popup.classList.add('popup__opened')
    // Почему-то не работает, если внутри функции не объявляю эти переменные снова...
    let name = document.querySelector('.profile__title');
    let job = document.querySelector('.profile__subtitle');
    nameInput.value = name.textContent
    jobInput.value = job.textContent
};

function ClosePopup() {
    popup.classList.remove('popup__opened')
};

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    // Почему-то не работает, если внутри функции не объявляю эти переменные снова...    
    let name = document.querySelector('.profile__title');
    let job = document.querySelector('.profile__subtitle');

    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

    ClosePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

buttonTypeEdit.addEventListener('click', function() {
    OpenPopup();
});

buttonTypeClose.addEventListener('click', function() {
    ClosePopup();
});


