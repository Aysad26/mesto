import Popup from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
      super(popupSelector);
      this._submitHandler = submitHandler;
      this._form = this._popup.querySelector('.form')
    }
  
    _getInputValues() {
      this._inputList = this._form.querySelectorAll('.form__item')
        const value = {}
        this._inputList.forEach((input) => {
            value[input.name] = input.value
        })
        return value
    }

    setEventListeners() {
      super.setEventListeners()
      this._form.addEventListener("submit", (evt) => {
          evt.preventDefault();
          this._submitHandler(this._getInputValues());
          this.close();
      })
  }

    close() {
      super.close();
      this._form.reset();
    }
}

