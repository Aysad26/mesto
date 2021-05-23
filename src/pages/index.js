import './index.css';
import { Api } from '../components/Api.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../components/initial-cards.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirm } from '../components/PopupWithConfirm';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

import { 
  list, 
  buttonTypeEdit, 
  buttonTypeAdd,
  buttonTypeEditProfile, 
  formElementProfile, 
  formElementAdd, 
  formElementImageProfile,
  popupAdd, 
  popupEdit, 
  nameInput, 
  jobInput, 
  name, 
  job, 
  titleInput, 
  linkInput,
  linkAvatarInput,
  userImage
} from '../components/constants.js';

import Section from '../components/Section';

let userId = null;
let cardId = null;
let targetCard = null;

const allClasses = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__input-error_active'
};

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-24',
  headers: {
    authorization: 'a161955b-22e4-44f7-ad97-c36f2565c1c8',
    'Content-Type': 'application/json'
  }
});


const addNewCard = (data) => {
  const cardElement = new Card(
    data, 
    userId, 
    function handleCardClick() {popupWithImage.open(data)}, 
    function handleRemoveClick() {
      targetCard = cardElement;
      popupWithConfirm.open(data)
    },
    function handleLikeAdd(data) {
      api.setLike(data)
        .then((data) => {
          cardElement.setLikeCounter(data);
        })
    },
    function handleLikeRemove(data) {
      api.deleteLike(data)
        .then((data) => {
          cardElement.setLikeCounter(data);
        })
    },
    '.element__item-template'
  );
  const cardData = data;
  cardId = cardData._id; 
  return cardElement; 
}


api.getUserInfo()
.then((data) => {
  const userData = data
  userId = userData._id;
  userInfo.setUserInfo(data);
  })

api.getCards()
.then((data) => {
  const cardSection = new Section({ 
    items: data, 
    renderer: (data) => { 
      const cardElement = addNewCard(data);
      const newCard = cardElement.generateCard(); 
      return newCard; 
    } 
  },  
  '.elements__grid' 
  ); 
  cardSection.renderItems(data);
})

const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__image')

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupWithConfirm = new PopupWithConfirm('.popup_type_remove', function submitHandler() {
    api.deleteCard(cardId)
      .then(() => targetCard.deleteCard())
      .then(() => {
        targetCard = null;
      })
});

popupWithConfirm.setEventListeners()

const popupEditForm = new PopupWithForm('.popup_type_edit', 
  function submitHandler() {
    api.changeUserInfo({name: nameInput.value , job: jobInput.value})
    .then((res) => {
      userInfo.setUserInfo(res);
    })
  });

popupEditForm.setEventListeners();



const popupAddForm = new PopupWithForm('.popup_type_add', 
function submitHandler() {
    api.addCard({name: titleInput.value , link: linkInput.value})
    .then((data) => {
      const cardSection = new Section({ 
        items: data, 
        renderer: (data) => { 
          const cardElement = addNewCard(data);
          const newCard = cardElement.generateCard(); 
          return newCard; 
        } 
      },  
      '.elements__grid' 
      ); 
      cardSection.addItem(data);
  formElementAdd.reset();
  })
});

popupAddForm.setEventListeners()

const popupEditAvatarForm = new PopupWithForm('.popup_type_edit-profile', 
function submitHandler() {
  api.changeUserImage(linkAvatarInput.value)
    .then((data) => {
      userInfo.setUserAvatar(data);
    })
  formElementImageProfile.reset();
}
  
);

popupEditAvatarForm.setEventListeners()

function handlePopupEditProfile() {
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name
  jobInput.value = userData.job
  popupEditForm.open()
}

const profileFormValidator = new FormValidator(allClasses, formElementProfile);
profileFormValidator.enableValidation();

const profileImageFormValidator = new FormValidator(allClasses, formElementImageProfile);
profileImageFormValidator.enableValidation();

const addFormValidator = new FormValidator(allClasses, formElementAdd);
addFormValidator.enableValidation();

buttonTypeEdit.addEventListener('click', handlePopupEditProfile); 

buttonTypeAdd.addEventListener('click', () => {
  popupAddForm.open();
  addFormValidator.toggleButtonState();
});

buttonTypeEditProfile.addEventListener('click', () => {
  popupEditAvatarForm.open();
  profileImageFormValidator.toggleButtonState();
});