class Card {
  constructor(_cardData) {
    this._cardData = _cardData;
    this._elementItem = this._generateCard();
    this.likeButton = this._elementItem.querySelector('.elements__like');
    this._makeEventListeners();
  }

  _generateCard() {
    const _elementItem = document.querySelector('.element__item-template').content.querySelector('.elements__item').cloneNode(true);
    const image = _elementItem.querySelector('.elements__image')
    const title = _elementItem.querySelector('.elements__title');
    image.src = this._cardData.link;
    image.alt = this._cardData.name;
    title.textContent = this._cardData.name;
    return _elementItem;
  }

  _like() {
    this.likeButton.classList.toggle("elements__like_active");
  }

  _remove() {
    this._elementItem.remove();
  }

  _preview() {
    popupImagePic.src = this._cardData.link;
    popupCaption.textContent = this._cardData.name;
    popupImagePic.alt = this._cardData.name;
    openPopup(popupImage);
  }

  _makeEventListeners() {
    const removeButton = this._elementItem.querySelector('.elements__remove');
    const imageButton = this._elementItem.querySelector('.elements__image');
    this.likeButton.addEventListener('click', () => this._like());
    removeButton.addEventListener('click', () => this._remove());
    imageButton.addEventListener('click', () => this._preview());
  }

  getElement() {
    return this._elementItem;
  }
 
}

const popup = document.querySelector('.popup');
const popupWindow = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
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
const popupImagePic = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector('.popup__caption');

const formElement = document.querySelector('.form');
const formElementProfile = document.querySelector('.form_type_profile'); 
const formElementAdd = document.querySelector('.form_type_add');
const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_job');
const titleInput = document.querySelector('.form__item_type_title');
const linkInput = document.querySelector('.form__item_type_link');
const formInputError = popup.querySelector('.form__input-error_active');



const list = document.querySelector('.elements__grid');


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  
initialCards.forEach((item) => {
  list.append(createCard(item));
});

function createCard(item) {
  const cardElement = new Card(item, '.element__item-template');
  const cardToAppend = cardElement.getElement();
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

function openPopup(popup) {
  document.addEventListener('keydown', closeEscape);
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  document.removeEventListener('keydown', closeEscape);
  popup.classList.remove('popup_opened');
};

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupEdit);
}


formElement.addEventListener('submit', handleFormSubmit);
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

buttonTypeAdd.addEventListener('click', () => {openPopup(popupAdd);
  const buttonElement = formElementAdd.querySelector('.button_type_submit');
  buttonElement.setAttribute("disabled", "disabled");
  buttonElement.classList.add('button_inactive');
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

class FormValidator {
  constructor(allClasses) {
      this._allClasses = allClasses;
      this.inputList = Array.from(formElement.querySelectorAll(this._allClasses.inputSelector));
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._allClasses.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._allClasses.errorClass);
  };
  
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._allClasses.inputErrorClass);
    errorElement.classList.remove(this._allClasses.errorClass);
    errorElement.textContent = '';
  };
  
  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }
  
  _setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(this._allClasses.inputSelector));
    const buttonElement = formElement.querySelector(this._allClasses.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }; 
  
  enableValidation() {
      const formList = Array.from(document.querySelectorAll(this._allClasses.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
    }); 
  };
 
  

  _hasInvalidInput() {
    return this.inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
  }
    
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute("disabled", "disabled");
      buttonElement.classList.add(this._allClasses.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute("disabled", "disabled");
      buttonElement.classList.remove(this._allClasses.inactiveButtonClass);
    }
  };
 
}

const profileFormValidator = new FormValidator(allClasses, formElementProfile);
profileFormValidator.enableValidation();

const addFormValidator = new FormValidator(allClasses, formElementAdd);
addFormValidator.enableValidation();