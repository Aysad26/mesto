import Popup from './Popup.js';

export class PopupWithConfirm extends Popup {
    constructor(popupSelector, submitHandler) {
      super(popupSelector, submitHandler);
      this._submitHandler = submitHandler;
      this._popup = document.querySelector(popupSelector); 
    }
  
    setEventListeners() {
      super.setEventListeners()
      this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._submitHandler(this._element);
        this.close();
      });
    }

    open(card) {
      this._element = card;
      super.open();
    }

}

