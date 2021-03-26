//Селекторы попапов
export const popupProfileNode = '.popup_type_profile';
export const popupPlaceNode = '.popup_type_place';
export const popupImageNode = '.popup_type_image';
export const popupAvatarNode = '.popup_type_avatar';
export const popupConfirmNode = '.popup_type_confirm';

//Селекторы информации о пользователе
export const firstnameSelector = '.profile__title';
export const jobSelector = '.profile__subtitle';
export const avatarSelector = '.profile__avatar-button';

//Кнопки открытия поп-апов
export const profileButtonNode = document.querySelector('.profile__edit-button');
export const addPlaceButtonNode = document.querySelector('.profile__add-button');
export const avatarButtonNode = document.querySelector('.profile__avatar-button')

//Формы
export const formProfileElement = document.querySelector('form[name=edit_profile]');
export const formPlaceElement = document.querySelector('form[name=add_place]');
export const formAvatarElement = document.querySelector('form[name=edit_avatar]');

//Инпуты
export const nameInput = document.querySelector('.popup__form-item_el_name');
export const jobInput = document.querySelector('.popup__form-item_el_job');

//Другие элементы
export const bodyNode = document.querySelector('.page');
export const avatar = document.querySelector('.profile__avatar-button')

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