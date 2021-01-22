import {initialCards} from './initial-сards.js';

export class Card {

  constructor(data, cardSelector, imageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._imageClick = imageClick;
  }

  //Создание разметки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .cloneNode(true);
    
    return cardElement;
  }

  //Генерация карточек по шаблону
  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.photo-grid__photo');
    this._setEventListeners();
    this._element.querySelector('.photo-grid__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name + '.';
    return this._element;
  }

  //Лайк на карточке
  _likeItem(evt) {
    const targetItem = evt.target;
    targetItem.classList.toggle('photo-grid__like-button_active');
  }

  //Удаление карточек
  _removeItem(evt) {
    const targetItem = evt.target.closest('.photo-grid__item');
    targetItem.remove();
  }

  //Установка слушателей
  _setEventListeners() {
    const removeButton = this._element.querySelector('.photo-grid__delete-button');
    removeButton.addEventListener('click', (evt) => {
      this._removeItem(evt);
    });

    const likeButton = this._element.querySelector('.photo-grid__like-button');
    likeButton.addEventListener('click', (evt) => {
      this._likeItem(evt);
    });

    const imageItem = this._element.querySelector('.photo-grid__photo');
    imageItem.addEventListener('click', () => {
      this._imageClick(this._link, this._name);
    });
  };

}



