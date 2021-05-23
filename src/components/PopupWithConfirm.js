import Popup from './Popup.js';

export class PopupWithConfirm extends Popup {
    constructor(popupSelector, submitHandler) {
      super(popupSelector);
      this._submitHandler = submitHandler;
      this._confirmButton = this._popup.querySelector('.button_type_submit'); 
    }
  
    setEventListeners() {
      super.setEventListeners()
      this._confirmButton.addEventListener("submit", (evt) => {
          evt.preventDefault();
          this._submitHandler();
          this.close();
      })
  }

}

