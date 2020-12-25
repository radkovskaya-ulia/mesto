//Валидация форм

//Функция выведения ошибок
function showError(form, input, config){
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent=input.validationMessage;
  input.classList.add(config.inputInvalidCLass);
};

//Функция скрытия ошибок
function hideError(form, input, config){
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = "";
  input.classList.remove(config.inputInvalidCLass);
};

//Проверка поля на валидность
function checkInputValidity(form, input, config){
  if(input.validity.valid){
    hideError(form, input, config);
  } else {
    showError(form, input, config);
  }
};

//Настройка доступности кнопки
function setButtonState(button, isActive, config){
  if(isActive) {
    button.classList.remove(config.buttonInvalidClass);
    button.disabled = false;
  } else {
    button.classList.add(config.buttonInvalidClass);
    button.disabled = true;
  }
}

//Валидация всех полей в форме
function setEventListener(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);
  inputList.forEach( input => {
    input.addEventListener('input', (evt) => {
      checkInputValidity(form, input, config);
      setButtonState(submitButton, form.checkValidity(), config);
    });
  })
}

//Валидация всех форм
function enableValidation(config){
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach(form => {
    setEventListener(form, config);
    const submitButton = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButton, form.checkValidity(), config)
  })
}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-button',
  inputInvalidCLass: 'popup__form-item_state_invalid',
  buttonInvalidClass: 'popup__save-button_invalid'
};



