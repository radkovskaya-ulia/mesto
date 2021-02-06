export default class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputInvalidCLass = config.inputInvalidCLass;
    this._buttonInvalidClass = config.buttonInvalidClass;
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._inputList = this._form.querySelectorAll(this._inputSelector);
  }

  //Показ ошибок
  _showError(input) {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(this._inputInvalidCLass);
  };

  //Скрытие ошибок
  _hideError(input) {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    input.classList.remove(this._inputInvalidCLass);
  };

  //Проверка поля на валидность
 _checkInputValidity(input) {
    if(input.validity.valid){
      this._hideError(input);
    } else {
      this._showError(input);
    }
  };

  //Настройка доступности кнопки
  _setButtonState(isActive) {
    if(isActive) {
      this._button.classList.remove(this._buttonInvalidClass);
      this._button.disabled = false;
    } else {
      this._button.classList.add(this._buttonInvalidClass);
      this._button.disabled = true;
    }
  }

  _setEventListener() {
    this._inputList.forEach(input => {
      input.addEventListener('input', (evt) => {
        this._checkInputValidity(input);
        this._setButtonState(this._form.checkValidity());
      });
    })
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement)
    });
    this._setButtonState(this._form.checkValidity());
  }

  enableValidation() {
    this._setEventListener()
    this._form.addEventListener('submit', () =>
      this._setButtonState(this._form.checkValidity()))
    }
}

