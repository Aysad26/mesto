let popup = document.querySelector('.popup');
let buttonTypeEdit = document.querySelector('.button_type_edit');
let buttonTypeClose = document.querySelector('.button_type_close');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__item_type_name');
let jobInput = document.querySelector('.form__item_type_job');
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');


function openPopup() {
    popup.classList.add('popup_opened')
    nameInput.value = name.textContent
    jobInput.value = job.textContent
};

function closePopup() {
    popup.classList.remove('popup_opened')
};

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
buttonTypeEdit.addEventListener('click', openPopup);
buttonTypeClose.addEventListener('click', closePopup);


