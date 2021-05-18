import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../components/initial-cards.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { list, buttonTypeEdit, buttonTypeAdd, formElementProfile, formElementAdd, popupAdd, popupEdit, nameInput, jobInput, name, job, titleInput, linkInput } from '../components/constants.js';

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

const popupEditForm = new PopupWithForm('.popup_type_edit', 
  function submitHandler() {
      userInfo.setUserInfo({name: nameInput.value , job: jobInput.value})
  }
);

popupEditForm.setEventListeners()

const popupAddForm = new PopupWithForm('.popup_type_add', function submitHandler() {
  list.prepend(createCard({name: titleInput.value , link: linkInput.value}));
  formElementAdd.reset();
});

formSubmit: (data) => {
    userInfo.setUserInfo(data)
}

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