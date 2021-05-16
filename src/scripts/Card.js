export class Card {
    constructor(cardData, handleCardClick, templateSelector) {
      this._cardData = cardData;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
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
  
    _removeCard() {
      this.removeButton.parentElement.remove()
    }
  
    _makeEventListeners() {
      this.likeButton.addEventListener('click', () => this._like());
      this.removeButton.addEventListener('click', () => this._removeCard());
      this.imageButton.addEventListener('click', () => this._handleCardClick());
    }
}