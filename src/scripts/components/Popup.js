export class Popup {

  constructor(popUpSelector) {
    this._popup = document.querySelector(popUpSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._popup.classList.add('popup_visible');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape"){
      this.close();
    }
  }

  setEventListeners(){
    const bodyNode = document.querySelector('.page');
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close(evt.target);
      }
      if (evt.target.classList.contains('popup__close-button')) {
        this.close(evt.target.closest('.popup'));
      }
    })

  }

}