import { popupImage } from './index.js';
import { popupImagePic } from './index.js';
import { popupCaption } from './index.js';
import { openPopup } from './index.js';


export class Card {
    constructor(cardData, templateSelector) {
      this._cardData = cardData;
      this._templateSelector = templateSelector;
      this._elementItem = this.generateCard();
      this._makeEventListeners();
      this.likeButton = this._elementItem.querySelector('.elements__like');
    }
  
    generateCard() {
      const _elementItem = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
      const image = _elementItem.querySelector('.elements__image')
      const title = _elementItem.querySelector('.elements__title');
      this.likeButton = _elementItem.querySelector('.elements__like');
      this.removeButton = _elementItem.querySelector('.elements__remove');
      this.imageButton = _elementItem.querySelector('.elements__image');
      image.src = this._cardData.link;
      image.alt = this._cardData.name;
      title.textContent = this._cardData.name;
      this._makeEventListeners();
      return _elementItem;
    }
  
    _like() {
      this.likeButton.classList.toggle("elements__like_active");
    }
  
    _preview() {
      popupImagePic.src = this._cardData.link;
      popupCaption.textContent = this._cardData.name;
      popupImagePic.alt = this._cardData.name;
      openPopup(popupImage);
    }

    _makeEventListeners() {
      this.likeButton.addEventListener('click', () => this._like());
      this.removeButton.addEventListener('click', (evt) => evt.target.parentElement.remove());
      this.imageButton.addEventListener('click', () => this._preview());
    }
}