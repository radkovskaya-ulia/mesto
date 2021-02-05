import {Popup} from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popUpSelector, link, name){
    super(popUpSelector);
    this._link = link;
    this._name = name;
    this._popupImage = popUpSelector.querySelector('.popup__image');
    this._popupText = popUpSelector.querySelector('.popup__text');
  }

  open(){
    super.open();
    this._popupImage.src = this._link;
    this._popupImage.alt = this._name + '.';
    this._popupText.textContent = this._name;
  }
}