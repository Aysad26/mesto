export class Card {
    constructor(cardData, userId, handleCardClick, handleRemoveClick, handleLikeAdd, handleLikeRemove, templateSelector) {
      this._cardData = cardData;
      this._userId = userId;
      this._cardCreatorId = this._cardData.owner._id;
      this._cardId = this._cardData._id;
      this._likes = this._cardData.likes;
      this._isLiked = false;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._handleRemoveClick = handleRemoveClick;
      this._handleLikeAdd = handleLikeAdd;
      this._handleLikeRemove = handleLikeRemove;
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
      this._likeCounter.textContent = String(this._likes.length);
      this._checkLikeState()
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
  
   
  
    _removeCard() {
      this._elementItem.remove();
      this._elementItem = null;
    }

    deleteCard() {
      this._removeCard(this._elementItem);
    }

    getCardId() {
      return this._cardId;
    }

    _removelike(data) {
      this._likeButton.classList.remove("elements__like_active");
      this._handleLikeRemove(data);
    }
  
    _addlike(data) {
      this._likeButton.classList.add("elements__like_active");
      this._handleLikeAdd(data);
    }

    _checkLikeState() {
      this._likes.forEach((likeUser) => {
        if (likeUser._id === this._userId) {
          this._likeButton.classList.add("elements__like_active");
        }
      })
    }
  
    setLikeCounter(data) {
      this._likeCounter.textContent = String(data.likes.length);
    }
     
    _makeEventListeners() {
      this._likeButton.addEventListener('click', () => {
        if (this._likeButton.classList.contains("elements__like_active")) {
          this._removelike(this._cardData);
        } else {
          this._addlike(this._cardData);
        }
      })
      this.removeButton.addEventListener('click', () => this._handleRemoveClick());
      this.image.addEventListener('click', () => this._handleCardClick(this._cardData.name, this._cardData.link));
    }
}