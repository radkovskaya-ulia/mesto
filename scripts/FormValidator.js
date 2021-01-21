export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-button',
  inputInvalidCLass: 'popup__form-item_state_invalid',
  buttonInvalidClass: 'popup__save-button_invalid'
};

export class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._formSelector = config.inputSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputInvalidCLass = config.inputInvalidCLass;
    this._buttonInvalidClass = config.buttonInvalidClass;
  }

  //Показ ошибок
  _showError() {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    error.textContent=this._input.validationMessage;
    this._input.classList.add(this._inputInvalidCLass);
  };

  //Скрытие ошибок
  _hideError() {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    error.textContent = "";
    this._input.classList.remove(this._inputInvalidCLass);
  };

  //Проверка поля на валидность
 _checkInputValidity(input) {
    this._input = input;
    console.log(this._input.validity.valid);
    if(this._input.validity.valid){
      this._hideError();
    } else {
      this._showError();
    }
  };

  //Настройка доступности кнопки
  _setButtonState(isActive) {
    this._button = this._form.querySelector(this._submitButtonSelector);
    if(isActive) {
      this._button.classList.remove(this._buttonInvalidClass);
      this._button.disabled = false;
    } else {
      this._button.classList.add(this._buttonInvalidClass);
      this._button.disabled = true;
    }
  }

  _setEventListener() {
    this._inputList = this._form.querySelectorAll(this._formSelector);
    this._inputList.forEach(input => {
      input.addEventListener('input', (evt) => {
        this._checkInputValidity(input);
        this._setButtonState(this._form.checkValidity());
      });
    })
  }

  enableValidation() {
    this._setEventListener()
    this._form.addEventListener('submit', () =>
    this._setButtonState(this._form._checkValidity()))
    }
}

