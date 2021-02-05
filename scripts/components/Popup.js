export class Popup {

  constructor(popUpSelector) {
    this._popUpSelector = popUpSelector;
  }

  open() {
    this._popUpSelector.classList.add('popup_visible');
  }

  close() {
    this._popUpSelector.classList.remove('popup_visible');
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape"){
      this.close();
    }
  }

  setEventListeners(){
    const bodyNode = document.querySelector('.page');
    bodyNode.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    this._popUpSelector.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close(evt.target);
      }
      if (evt.target.classList.contains('popup__close-button')) {
        this.close(evt.target.closest('.popup'));
      }
    })

  }

}