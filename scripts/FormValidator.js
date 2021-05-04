export class FormValidator {
    constructor(allClasses, formElement) {
        this._allClasses = allClasses;
        this.formElement = formElement;
        this.inputList = Array.from(formElement.querySelectorAll(this._allClasses.inputSelector));
        this.buttonElement = this.formElement.querySelector(this._allClasses.submitButtonSelector);
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
      this.toggleButtonState(this.inputList, this.buttonElement);
      this.inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this.toggleButtonState(this.buttonElement);
        });
      });
    }; 
    
    enableValidation() {
      this.formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      });
      this._setEventListeners();
    }
   
    
  
    _hasInvalidInput() {
      return this.inputList.some((inputElement) => {
          return !inputElement.validity.valid
      })
    }
      
    toggleButtonState() {
      if (this._hasInvalidInput(this.inputList)) {
        this.buttonElement.setAttribute("disabled", "disabled");
        this.buttonElement.classList.add(this._allClasses.inactiveButtonClass);
      } else {
        this.buttonElement.removeAttribute("disabled", "disabled");
        this.buttonElement.classList.remove(this._allClasses.inactiveButtonClass);
      }
    };
   
  }