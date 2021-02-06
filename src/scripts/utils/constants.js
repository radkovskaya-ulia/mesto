//Массив карточек
export const initialCards = [
  {
      name: 'Финляндия',
      link: 'https://images.unsplash.com/photo-1522885147691-06d859633fb8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80'
  },
  {
      name: 'Исландия',
      link: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80'
  },
  {
      name: 'Австралия',
      link: 'https://images.unsplash.com/photo-1524820197278-540916411e20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2272&q=80'
  },
  {
      name: 'Российская Федерация',
      link: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80'
  },
  {
      name: 'Испания',
      link: 'https://images.unsplash.com/photo-1544918877-460635b6d13e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80'
  },
  {
      name: 'США',
      link: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
  }
]; 

//Поп-апы
export const popupProfileNode = document.querySelector('.popup_type_profile');
export const popupPlaceNode = document.querySelector('.popup_type_place');
export const popupImageNode = document.querySelector('.popup_type_image');

//Кнопки открытия поп-апов
export const profileButtonNode = document.querySelector('.profile__edit-button');
export const addPlaceButtonNode = document.querySelector('.profile__add-button');

//Формы
export const formProfileElement = document.querySelector('form[name=edit_profile]');
export const formPlaceElement = document.querySelector('form[name=add_place]');

//Инпуты
export const nameInput = document.querySelector('.popup__form-item_el_name');
export const jobInput = document.querySelector('.popup__form-item_el_job');

//Другие элементы
export const bodyNode = document.querySelector('.page');

//Контейнер для добавления карточек
export const listContainerElement = document.querySelector('.photo-grid__item-list');

//Конфиг валидации
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-item',
    submitButtonSelector: '.popup__save-button',
    inputInvalidCLass: 'popup__form-item_state_invalid',
    buttonInvalidClass: 'popup__save-button_invalid'
  };