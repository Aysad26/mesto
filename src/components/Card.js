export class Card {
    constructor(cardData, userId, handleCardClick, handleRemoveClick, templateSelector) {
      this._cardData = cardData;
      this._userId = userId;
      this._cardCreatorId = this._cardData.owner._id;
      this._cardId = this._cardData._id;
      this._likes = this._cardData.likes;
      this._isLiked = false;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._handleRemoveClick = handleRemoveClick;
    }
  
    _getTemplate() {
      const _elementCard = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
      return _elementCard;
    }
    
    generateCard() {
      this._elementItem = this._getTemplate();
      const title = this._elementItem.querySelector('.elements__title');
      this._likeButton = this._elementItem.querySelector('.elements__like');
      this._likeCounter = this._elementItem.querySelector('.elements__like-counter');
      this.removeButton = this._elementItem.querySelector('.elements__remove');
      if (this._userId === this._cardCreatorId) {
        this.removeButton.classList.remove('elements__remove_inactive');
      }
      this.image = this._elementItem.querySelector('.elements__image');
      this.image.src = this._cardData.link;
      this.image.alt = this._cardData.name;
      title.textContent = this._cardData.name;
      this._makeEventListeners();
      return this._elementItem;
    }
  
    _like() {
      this._likeButton.classList.toggle("elements__like_active");
    }
  
    _removeCard() {
      this._elementItem.remove();
      this._elementItem = null;
    }

    deleteCard() {
      this._removeCard(this._elementItem);
    }

    setCounter(data) {
      this._likeCounter.textContent = String(data.likes.length);
      console.log (String(data.likes.length));
    }

      
    _makeEventListeners() {
      this.likeButton.addEventListener('click', () => this._like());
      this.removeButton.addEventListener('click', () => this._handleRemoveClick());
      this.image.addEventListener('click', () => this._handleCardClick(this._cardData.name, this._cardData.link));
    }
}