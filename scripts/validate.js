const allClasses = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__input-error_active'
};

function showInputError(formElement, inputElement, errorMessage, allClasses) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(allClasses.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(allClasses.errorClass);
};

function hideInputError(formElement, inputElement, allClasses) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(allClasses.inputErrorClass);
  errorElement.classList.remove(allClasses.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, allClasses) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, allClasses);
  } else {
    hideInputError(formElement, inputElement, allClasses);
  }
};

const setEventListeners = (formElement, allClasses) => {
  const inputList = Array.from(formElement.querySelectorAll(allClasses.inputSelector));
  const buttonElement = formElement.querySelector(allClasses.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, allClasses);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, allClasses);
      toggleButtonState(inputList, buttonElement, allClasses);
    });
  });
}; 

setEventListeners

function enableValidation(allClasses) {
    const formList = Array.from(document.querySelectorAll(allClasses.formSelector));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
    setEventListeners(formElement, allClasses);
}); 
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

function toggleButtonState(inputList, buttonElement, allClasses) {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", "disabled");
    buttonElement.classList.add(allClasses.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled", "disabled");
    buttonElement.classList.remove(allClasses.inactiveButtonClass);
  }
}; 

enableValidation(allClasses); 