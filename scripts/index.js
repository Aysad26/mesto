// Находим элементы

let popup = document.querySelector('.popup');
let ButtonTypeEdit = document.querySelector('.button_type_edit');
let ButtonTypeClose = document.querySelector('.button_type_close');
let PopupOverlay = document.querySelector('.popup__overlay');

// По клику на кнопку button_type_edit открыть popup (дописываем класс popup__open)
// По клику на button_type_close закрыть popup (снимаем класс popup__open)
// По клику на popup__overlay закрыть popup (снимаем класс popup__open)


function OpenPopup() {
    popup.classList.add('popup__open')
};

function ClosePopup() {
    popup.classList.remove('popup__open')
};

ButtonTypeEdit.addEventListener('click', function() {
    OpenPopup();
});

ButtonTypeClose.addEventListener('click', function() {
    ClosePopup();
});

PopupOverlay.addEventListener('click', function() {
    ClosePopup();
});


// Находим форму в DOM
let formElement = document.querySelector('.form');

// Находим поля формы в DOM
let nameInput = document.querySelector('.form__item_type_name');
let jobInput = document.querySelector('.form__item_type_job');


// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    

    // Выберите элементы, куда должны быть вставлены значения полей
    
    let name = document.querySelector('.profile__title');
    let job = document.querySelector('.profile__subtitle');

    // Вставьте новые значения с помощью textContent

    name.textContent = `${nameInput.value}`;
    job.textContent = `${jobInput.value}`;
    nameInput.placeholder = `${nameInput.value}`;
    jobInput.placeholder = `${jobInput.value}`;

    

   
}

formElement.addEventListener('submit', formSubmitHandler);

// Находим кнопку сохранить

let ButtonTypeSubmit = document.querySelector('.button_type_submit');

//и реакция на клик - закрыть

ButtonTypeSubmit.addEventListener('click', function() {
    ClosePopup();
});

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
