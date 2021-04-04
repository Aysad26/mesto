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
    popupCaption = item.name;
    popupImage.classList.add('popup_opened');
  }); 
  
  return elementItem;
};

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
  const elementItem = generateCard({name: titleInput.value , link: linkInput.value});
  
  const formElementAdd = document.querySelector('.form_type_add');

  formElementAdd.reset();

  List.prepend(elementItem);

  closePopup();
};


formElement.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', addCard);
buttonTypeEdit.addEventListener('click', openPopupEdit);
buttonTypeAdd.addEventListener('click', openPopupAdd);
buttonTypeCloseEdit.addEventListener('click', closePopup);
buttonTypeCloseAdd.addEventListener('click', closePopup);
buttonTypeCloseImage.addEventListener('click', closePopup);

console.log (buttonTypeAdd);









