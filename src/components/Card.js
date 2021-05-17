export class Card {
    constructor(cardData, handleCardClick, templateSelector) {
      this._cardData = cardData;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
    }
  
    _getTemplate() {
      const _elementCard = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
      return _elementCard;
    }
    
    generateCard() {
      this._elementItem = this._getTemplate();
      const title = this._elementItem.querySelector('.elements__title');
      this.likeButton = this._elementItem.querySelector('.elements__like');
      this.removeButton = this._elementItem.querySelector('.elements__remove');
      this.image = this._elementItem.querySelector('.elements__image');
      this.image.src = this._cardData.link;
      this.image.alt = this._cardData.name;
      title.textContent = this._cardData.name;
      this._makeEventListeners();
      return this._elementItem;
    }
  
    _like() {
      this.likeButton.classList.toggle("elements__like_active");
    }
  
    _removeCard() {
      this._elementItem.remove();
      this._elementItem = null;
    }
  
    _makeEventListeners() {
      this.likeButton.addEventListener('click', () => this._like());
      this.removeButton.addEventListener('click', () => this._removeCard());
      this.image.addEventListener('click', () => this._handleCardClick(this._cardData.name, this._cardData.link));
    }
}