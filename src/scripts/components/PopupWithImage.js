import {Popup} from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popUpSelector){
    super(popUpSelector);
    this._popupImage = popUpSelector.querySelector('.popup__image');
    this._popupText = popUpSelector.querySelector('.popup__text');
  }

  open(link, name){
    super.open();
    this._popupImage.src = link;
    this._popupImage.alt = name + '.';
    this._popupText.textContent = name;
  }
}