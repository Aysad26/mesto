let popup = document.querySelector('.popup');
let popupEdit = document.querySelector('.popup_type_edit');
let popupImage = document.querySelector('.popup_type_image');
let popupAdd = document.querySelector('.popup_type_add');
let buttonTypeEdit = document.querySelector('.button_type_edit');
let buttonTypeAdd = document.querySelector('.button_type_add');
let buttonTypeCloseEdit = popupEdit.querySelector('.button_type_close');
let buttonTypeCloseAdd = popupAdd.querySelector('.button_type_close');
let buttonTypeCloseImage = popupImage.querySelector('.button_type_close');
let formElement = document.querySelector('.form');
let formElementAdd = document.querySelector('.form_type_add');
let nameInput = document.querySelector('.form__item_type_name');
let jobInput = document.querySelector('.form__item_type_job');
let titleInput = document.querySelector('.form__item_type_title');
let linkInput = document.querySelector('.form__item_type_link');
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');
let popupImagePic = popupImage.querySelector('.popup__image');
let popupCaption = popupImage.querySelector('.popup__caption');
console.log (job);


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
  
  const List = document.querySelector('.elements__grid');
  const elementItemTemplate = document.querySelector('.element__item-template').content.querySelector('.elements__item');

  initialCards.forEach(function(initialCards) {
  const elementItem = elementItemTemplate.cloneNode(true);
  const elementItemTitle = elementItem.querySelector('.elements__title');
  const elementItemImage = elementItem.querySelector('.elements__image');
  const List = document.querySelector('.elements__grid');
  elementItemTitle.textContent = initialCards.name;
  elementItemImage.src = initialCards.link;
  List.append(elementItem);
  const likeButton = elementItem.querySelector('.elements__like');
  function like () {
  likeButton.classList.toggle('elements__like_active');
  };
  likeButton.addEventListener('click', like);

  const removeButton = elementItem.querySelector('.elements__remove');

  removeButton.addEventListener('click', function () {
    const listItem = removeButton.closest('.elements__item');
    listItem.remove();
  }); 
  
  const imageButton = elementItem.querySelector('.elements__image');
  imageButton.addEventListener('click', function () {
    popupImagePic.src = initialCards.link;
    popupCaption = initialCards.name;
    popupImage.classList.add('popup_opened');
  }); 
  
  
});



function openPopupEdit() {
  popupEdit.classList.add('popup_opened')
  nameInput.value = name.textContent
  jobInput.value = job.textContent
};

function openPopupAdd() {
  popupAdd.classList.add('popup_opened')
};

function closePopup() {
  popupEdit.classList.remove('popup_opened');
  popupAdd.classList.remove('popup_opened');
  popupImage.classList.remove('popup_opened');
};

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup();
};

function addCard (evt) {
  evt.preventDefault();
  const elementItem = elementItemTemplate.cloneNode(true);
  const elementItemTitle = elementItem.querySelector('.elements__title');
  const elementItemImage = elementItem.querySelector('.elements__image');
  const List = document.querySelector('.elements__grid');
  elementItemTitle.textContent = titleInput.value;
  elementItemImage.src = linkInput.value;
  List.prepend(elementItem);
  closePopup();
  const likeButton = elementItem.querySelector('.elements__like');
  function like () {
  likeButton.classList.toggle('elements__like_active');
  };
  likeButton.addEventListener('click', like);

  const removeButton = elementItem.querySelector('.elements__remove');

  removeButton.addEventListener('click', function () {
    const listItem = removeButton.closest('.elements__item');
    listItem.remove();

   }); 

  const imageButton = elementItem.querySelector('.elements__image');
  imageButton.addEventListener('click', function () {
    popupImagePic.src = elementItemImage.src;
    popupCaption = elementItemTitle.textContent;
    popupImage.classList.add('popup_opened');
  }); 

  const formElementAdd = document.querySelector('.form_type_add');

  formElementAdd.reset();

};


formElement.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', addCard);
buttonTypeEdit.addEventListener('click', openPopupEdit);
buttonTypeAdd.addEventListener('click', openPopupAdd);
buttonTypeCloseEdit.addEventListener('click', closePopup);
buttonTypeCloseAdd.addEventListener('click', closePopup);
buttonTypeCloseImage.addEventListener('click', closePopup);

console.log (buttonTypeAdd);









