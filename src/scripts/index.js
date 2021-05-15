import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initial-cards.js';

export const popupImage = document.querySelector('.popup_type_image');
export const popupImagePic = popupImage.querySelector('.popup__image');
export const popupCaption = popupImage.querySelector('.popup__caption');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupOverlayEdit = document.querySelector('.popup__overlay_edit');
const popupOverlayAdd = document.querySelector('.popup__overlay_add');
const popupOverlayImage = document.querySelector('.popup__overlay_image');
const buttonTypeEdit = document.querySelector('.button_type_edit');
const buttonTypeAdd = document.querySelector('.button_type_add');
const buttonTypeCloseEdit = popupEdit.querySelector('.button_type_close');
const buttonTypeCloseAdd = popupAdd.querySelector('.button_type_close');
const buttonTypeCloseImage = popupImage.querySelector('.button_type_close');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form');
const formElementProfile = document.querySelector('.form_type_profile'); 
const formElementAdd = document.querySelector('.form_type_add');
const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_job');
const titleInput = document.querySelector('.form__item_type_title');
const linkInput = document.querySelector('.form__item_type_link');
const list = document.querySelector('.elements__grid');

  
initialCards.forEach((item) => {
  list.append(createCard(item));
});

function createCard(item) {
  const cardElement = new Card(item, '.element__item-template');
  const cardToAppend = cardElement.generateCard();
  return cardToAppend;
}

function addCard (evt) {
  evt.preventDefault();
  list.prepend(createCard({name: titleInput.value , link: linkInput.value}));
  closePopup(popupAdd);
  formElementAdd.reset();
}



function closeEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
}

export function openPopup(popup) {
  document.addEventListener('keydown', closeEscape);
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  document.removeEventListener('keydown', closeEscape);
  popup.classList.remove('popup_opened');
};

function handleFormProfileSubmit (evt) {
  evt.preventDefault(); 
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupEdit);
}


formElement.addEventListener('submit', handleFormProfileSubmit);
formElementAdd.addEventListener('submit', addCard);

buttonTypeEdit.addEventListener('click', function (){
  nameInput.value = name.textContent; 
  jobInput.value = job.textContent;
  openPopup(popupEdit);
}); 

buttonTypeEdit.addEventListener('click', function (){
  nameInput.value = name.textContent; 
  jobInput.value = job.textContent;
  openPopup(popupEdit);
}); 

buttonTypeCloseAdd.addEventListener('click', function () {
  closePopup(popupAdd);
  formElementAdd.reset();
}); 

buttonTypeAdd.addEventListener('click', () => {
  openPopup(popupAdd);
  addFormValidator.toggleButtonState();
});

buttonTypeCloseEdit.addEventListener('click', () => closePopup(popupEdit));
buttonTypeCloseAdd.addEventListener('click', () => closePopup(popupAdd));
buttonTypeCloseImage.addEventListener('click', () => closePopup(popupImage));
buttonTypeCloseImage.addEventListener('click', () => closePopup(popupImage));
popupOverlayEdit.addEventListener('click', () => closePopup(popupEdit));
popupOverlayAdd.addEventListener('click', () => closePopup(popupAdd));
popupOverlayImage.addEventListener('click', () => closePopup(popupImage));


const allClasses = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__input-error_active'
};


const profileFormValidator = new FormValidator(allClasses, formElementProfile);
profileFormValidator.enableValidation();

const addFormValidator = new FormValidator(allClasses, formElementAdd);
addFormValidator.enableValidation();