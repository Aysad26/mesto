export class FormValidator {
    constructor(allClasses, formElement) {
        this._allClasses = allClasses;
        this.formElement = formElement;
        this.inputList = Array.from(formElement.querySelectorAll(this._allClasses.inputSelector));
    }
  
    _showInputError(inputElement, errorMessage) {
      const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._allClasses.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._allClasses.errorClass);
    };
    
    _hideInputError(inputElement) {
      const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._allClasses.inputErrorClass);
      errorElement.classList.remove(this._allClasses.errorClass);
      errorElement.textContent = '';
    };
    
    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
    
    _setEventListeners = () => {
      const inputList = Array.from(this.formElement.querySelectorAll(this._allClasses.inputSelector));
      const buttonElement = this.formElement.querySelector(this._allClasses.submitButtonSelector);
      this._toggleButtonState(inputList, buttonElement);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState(buttonElement);
        });
      });
    }; 
    
    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._allClasses.formSelector));
      formList.forEach(() => {
        this.formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
        this._setEventListeners();
      }); 
    };
   
    
  
    _hasInvalidInput() {
      return this.inputList.some((inputElement) => {
          return !inputElement.validity.valid
      })
    }
      
    _toggleButtonState(inputList) {
        const buttonElement = this.formElement.querySelector(this._allClasses.submitButtonSelector);
      if (this._hasInvalidInput(inputList)) {
        buttonElement.setAttribute("disabled", "disabled");
        buttonElement.classList.add(this._allClasses.inactiveButtonClass);
      } else {
        buttonElement.removeAttribute("disabled", "disabled");
        buttonElement.classList.remove(this._allClasses.inactiveButtonClass);
      }
    };
   
  }