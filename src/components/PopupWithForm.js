import Popup from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
      super(popupSelector);
      this._submitHandler = submitHandler;
      this._form = this._popup.querySelector('.form');
      this._submitButton = this._popup.querySelector('.button_type_submit')
      this._buttonText = this._submitButton.textContent;
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
        console.log (this._getInputValues());
          evt.preventDefault();
          this._submitHandler(this._getInputValues());
      })
  }

    close() {
      super.close();
      this._form.reset();
    }
}

