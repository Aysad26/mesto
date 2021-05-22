import Popup from './Popup.js';

export class PopupWithConfirm extends Popup {
    constructor(popupSelector, submitHandler) {
      super(popupSelector);
      this._submitHandler = submitHandler;
    }
  
    setEventListeners() {
      super.setEventListeners()
      this._form.addEventListener("submit", (evt) => {
          evt.preventDefault();
          this._submitHandler();
          this.close();
      })
  }

    close() {
      super.close();
      this._form.reset();
    }
}

