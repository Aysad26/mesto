import Popup from './Popup.js';

export class PopupWithConfirm extends Popup {
    constructor(popupSelector, submitHandler) {
      super(popupSelector);
      this._submitHandler = submitHandler;
      this._popup = document.querySelector(popupSelector); 
      this._submitButton = this._popup.querySelector('.button_type_submit')
      this._buttonText = this._submitButton.textContent;
    }
  
    setEventListeners() {
      super.setEventListeners()
      this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._submitHandler(this._element);
      });
    }

    open(card) {
      this._element = card;
      super.open();
    }

}

