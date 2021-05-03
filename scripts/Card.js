import { popupImage } from './index.js';
import { popupImagePic } from './index.js';
import { popupCaption } from './index.js';
import { openPopup } from './index.js';


export class Card {
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