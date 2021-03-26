import {Popup} from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popUpSelector, {submitPopUp}){
    super(popUpSelector);
    this._submitPopUp = submitPopUp;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__form-item');
    this._saveButton = this._popup.querySelector('.popup__save-button');
  }

  _getInputValues() {
    const data = {}
    this._inputList.forEach(input => {
      data[input.name] = input.value;
    });
    return data;
  }

  _submit(evt) {
    evt.preventDefault();
    this._submitPopUp(this._getInputValues())
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) =>
     {this._submit(evt)})
  }

  close(){
    super.close();
    this._form.reset()
  }

  loading(isLoading, message){
    if (isLoading) {
      this._saveButton.textContent = "Сохранение ..."
    } else {
      this._saveButton.textContent = message;
    }
  }

}