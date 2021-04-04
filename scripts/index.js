const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const popupAdd = document.querySelector('.popup_type_add');
const buttonTypeEdit = document.querySelector('.button_type_edit');
const buttonTypeAdd = document.querySelector('.button_type_add');
const buttonTypeCloseEdit = popupEdit.querySelector('.button_type_close');
const buttonTypeCloseAdd = popupAdd.querySelector('.button_type_close');
const buttonTypeCloseImage = popupImage.querySelector('.button_type_close');
const formElement = document.querySelector('.form');
const formElementAdd = document.querySelector('.form_type_add');
const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_job');
const titleInput = document.querySelector('.form__item_type_title');
const linkInput = document.querySelector('.form__item_type_link');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const popupImagePic = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector('.popup__caption');
const List = document.querySelector('.elements__grid');
const elementItemTemplate = document.querySelector('.element__item-template').content.querySelector('.elements__item');
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
  
initialCards.forEach(function(item) {
  const elementItem = generateCard(item);
  List.append(elementItem);
});

function generateCard(item) {
  const elementItem = elementItemTemplate.cloneNode(true);
  const elementItemTitle = elementItem.querySelector('.elements__title');
  const elementItemImage = elementItem.querySelector('.elements__image');
  const likeButton = elementItem.querySelector('.elements__like');
  const removeButton = elementItem.querySelector('.elements__remove');
  const imageButton = elementItem.querySelector('.elements__image');
  elementItemTitle.textContent = item.name;
  elementItemImage.src = item.link;

  likeButton.addEventListener('click', function (){
    likeButton.classList.toggle('elements__like_active');});

  removeButton.addEventListener('click', function () {
    const listItem = removeButton.closest('.elements__item');
    listItem.remove();
  }); 

  imageButton.addEventListener('click', function () {
    popupImagePic.src = item.link;
    popupCaption.textContent = item.name;
    openPopup(popupImage);
  }); 
  
  return elementItem;
};

function openPopup(popup) {
  popup.classList.toggle('popup_opened')
};

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  openPopup(popupEdit);
};

function addCard (evt) {
  const elementItem = generateCard({name: titleInput.value , link: linkInput.value});
  const formElementAdd = document.querySelector('.form_type_add');

  evt.preventDefault();
  List.prepend(elementItem);
  openPopup(popupAdd);
  formElementAdd.reset();
};


formElement.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', addCard);
buttonTypeEdit.addEventListener('click', () => openPopup(popupEdit));
buttonTypeAdd.addEventListener('click', () => openPopup(popupAdd));
buttonTypeCloseEdit.addEventListener('click', () => openPopup(popupEdit));
buttonTypeCloseAdd.addEventListener('click', () => openPopup(popupAdd));
buttonTypeCloseImage.addEventListener('click', () => openPopup(popupImage));