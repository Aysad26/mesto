import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initial-cards.js';
import { PopupWithForm } from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import { list, buttonTypeEdit, buttonTypeAdd, formElementProfile, formElementAdd, popupAdd, popupEdit, nameInput, jobInput, name, job, titleInput, linkInput } from './constants.js';

const allClasses = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__input-error_active'
};
  
initialCards.forEach((item) => {
  list.append(createCard(item));
});

function createCard(item) {
  const cardElement = new Card(item, function handleCardClick() {popupWithImage.open(item)}, '.element__item-template');
  const cardToAppend = cardElement.generateCard();
  return cardToAppend;
}

function addCard (evt) {
  evt.preventDefault();
  list.prepend(createCard({name: titleInput.value , link: linkInput.value}));
  closePopup(popupAdd);
  formElementAdd.reset();
}

const userInfo = new UserInfo('.profile__title', '.profile__subtitle')

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners()

const popupEditForm = new PopupWithForm('.popup_type_edit', function submitHandler (userData) {
  userInfo.setUserInfo(userData)
});

popupEditForm.setEventListeners()

const popupAddForm = new PopupWithForm('.popup_type_add', function submitHandler (evt) {
  list.prepend(createCard({name: titleInput.value , link: linkInput.value}));
  formElementAdd.reset();
});

popupAddForm.setEventListeners()

function handlePopupEditProfile() {
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name
  jobInput.value = userData.job
  popupEditForm.open()
}

const profileFormValidator = new FormValidator(allClasses, formElementProfile);
profileFormValidator.enableValidation();

const addFormValidator = new FormValidator(allClasses, formElementAdd);
addFormValidator.enableValidation();

buttonTypeEdit.addEventListener('click', handlePopupEditProfile); 

buttonTypeAdd.addEventListener('click', () => {
  popupAddForm.open();
  addFormValidator.toggleButtonState();
});