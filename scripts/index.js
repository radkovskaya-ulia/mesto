import {Card} from './Сard.js'
import {validationConfig, FormValidator} from './FormValidator.js'
import {initialCards} from './initial-сards.js';

//Поп-апы
const popupProfileNode = document.querySelector('.popup_type_profile');
const popupPlaceNode = document.querySelector('.popup_type_place');
const popupImageNode = document.querySelector('.popup_type_image');

//Кнопки открытия поп-апов
const profileButtonNode = document.querySelector('.profile__edit-button');
const addPlaceButtonNode = document.querySelector('.profile__add-button');

//Кнопки закрытия поп-апов
const popupProfileCloseButtonNode = document.querySelector('.popup__close-button_type_profile');
const popupPlaceCloseButtonNode = document.querySelector('.popup__close-button_type_place');
const popupImageCloseButtonNode = document.querySelector('.popup__close-button_type_image');

//Элементы поп-апа с изображением
const photogridLikeButtonNode = document.querySelector('.photo-grid__like-button');
const popupImage = popupImageNode.querySelector('.popup__image');
const popupText = popupImageNode.querySelector('.popup__text');

//Формы
const formProfileElement = document.querySelector('form[name=edit_profile]');
const formPlaceElement = document.querySelector('form[name=add_place]');

//Инпуты
const nameInput = document.querySelector('.popup__form-item_el_name');
const jobInput = document.querySelector('.popup__form-item_el_job');
const placeNameInput = document.querySelector('.popup__form-item_el_place-name');
const placeLinkInput = document.querySelector('.popup__form-item_el_place-link');

//Другие элементы
const bodyNode = document.querySelector('.page');

//Информация из профиля 
const nameProfileNode = document.querySelector('.profile__title');
const jobProfileNode = document.querySelector('.profile__subtitle');

//Контейнер для добавления карточек
const listContainerElement = document.querySelector('.photo-grid__item-list');

//Функция открытия поп-апа
function openPopup(popup){
  popup.classList.add('popup_visible');
  bodyNode.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closePopupClick);
}

//Функции работы с формами
function submitProfileForm (evt) {
  evt.preventDefault();
  nameProfileNode.textContent = nameInput.value;
  jobProfileNode.textContent = jobInput.value;
  closePopup(popupProfileNode);
}

function submitPlaceForm (evt) {
  evt.preventDefault();
  const card = new Card({name: placeNameInput.value, link: placeLinkInput.value}, '.template', imageClick);
  const cardElement = card.generateCard();
  document.querySelector('.photo-grid__item-list').prepend(cardElement);
  closePopup(evt.target.closest('.popup'));
  formPlaceElement.reset();
}

//Функция открытия и заполнения поп-апа профайла
function openAndFillProfilePopup(popup){
  openPopup(popup);
  nameInput.value = nameProfileNode.textContent;
  jobInput.value = jobProfileNode.textContent;
  const submitButton = formProfileElement.querySelector('.popup__save-button');
}

//Функция закрытия поп-апа
function closePopup(popup) {
  popup.classList.remove('popup_visible');
  bodyNode.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener('click', closePopupClick);
}

//Функция закрытия поп-апа на кнопку ESC
function closePopupEsc(evt){
  if (evt.key === "Escape"){
    popup = document.querySelector('.popup_visible');
    closePopup(popup);
  }
};

//Функция закрытия поп-апа по клику на оверлей
function closePopupClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

//Листенеры на кнопки открытия поп-апов
profileButtonNode.addEventListener('click', () => openAndFillProfilePopup(popupProfileNode));
addPlaceButtonNode.addEventListener('click', () => openPopup(popupPlaceNode));

//Листенеры на кнопки закрытия поп-апов
popupProfileCloseButtonNode.addEventListener('click', () => closePopup(popupProfileNode));
popupPlaceCloseButtonNode.addEventListener('click', () => closePopup(popupPlaceNode));
popupImageCloseButtonNode.addEventListener('click', () => closePopup(popupImageNode));

//Листенеры на формы
formProfileElement.addEventListener('submit', submitProfileForm); 
formPlaceElement.addEventListener('submit', submitPlaceForm); 

//Функция открытия и заполнения поп-апа с изображением
function imageClick(link, name) {
  openPopup(popupImageNode);
  const popupImage = popupImageNode.querySelector('.popup__image');
  const popupText = popupImageNode.querySelector('.popup__text');
  popupImage.src = link;
  popupImage.alt = name + '.';
  popupText.textContent = name;
}

//Включение валидации для каждой из форм
const formList = document.querySelectorAll('form');
formList.forEach(form => {
  const valid = new FormValidator(validationConfig, form);
  valid.enableValidation();
});

//Создание списка карточек
initialCards.forEach((item) => {
  const card = new Card(item, '.template', imageClick);
  const cardElement = card.generateCard();
  listContainerElement.append(cardElement);
  });