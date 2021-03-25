import {Popup} from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popUpSelector, {submitPopUp}){
    super(popUpSelector);
    this._submitPopUp = submitPopUp;
    this._form = this._popUpSelector.querySelector('.popup__form');
    this._saveButton = this._popUpSelector.querySelector('.popup__save-button');
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitPopUp(this._cardId)})
  }

  open(card, cardId){
    super.open()
    this._element = card._element;
    this._cardId = cardId;
    console.log(this._form)
  }

  deleteCard(){
    this._element.remove()
  }

  loading(isLoading){
    if (isLoading) {
      this._saveButton.textContent = "Удаление ..."
    } else {
      this._saveButton.textContent = "Да"
    }
  }
}