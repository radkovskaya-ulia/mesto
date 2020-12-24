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

//Другие кнопки
const photogridLikeButtonNode = document.querySelector('.photo-grid__like-button');

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

//Массив карточек
const initialCards = [
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

//Контейнер для добавления карточек
const listContainerElement = document.querySelector('.photo-grid__item-list');

//Шаблон для карточек
const templateElement = document.querySelector('.template');

//Функция открытия поп-апа
function openPopup(popup){
  popup.classList.add('popup_visible');
  bodyNode.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closePopupClick);
}

//Функция закрытия поп-апа
function handleCloseButtonClick (evt) {
  const targetItem = evt.target.closest('.popup');
  targetItem.classList.remove('popup_visible');
}

//Функции работы с формами
function submitProfileForm (evt) {
  evt.preventDefault();
  nameProfileNode.textContent = nameInput.value;
  jobProfileNode.textContent = jobInput.value;
  handleCloseButtonClick(evt);
}

function submitPlaceForm (evt) {
  evt.preventDefault();
  addNewItem(placeNameInput.value, placeLinkInput.value);
  handleCloseButtonClick(evt);
  formPlaceElement.reset();
}

//Функция открытия и заполнения поп-апа профайла
function openAndFillProfilePopup(popup){
  openPopup(popup);
  nameInput.value = nameProfileNode.textContent;
  jobInput.value = jobProfileNode.textContent;
}

//Функция закрытия поп-апа на кнопку ESC
function closePopupEsc(evt){
  if (evt.key === "Escape"){
    popup = document.querySelector('.popup_visible');
    popup.classList.remove('popup_visible');
    bodyNode.removeEventListener('keydown', closePopupEsc);
  }
};

//Функция закрытия поп-апа по клику на оверлей
function closePopupClick(evt) {
  if (evt.target.classList.contains('popup')) {
    handleCloseButtonClick(evt)
  }
}

//Листенеры на кнопки открытия поп-апов
profileButtonNode.addEventListener('click', () => openAndFillProfilePopup(popupProfileNode));
addPlaceButtonNode.addEventListener('click', () => openPopup(popupPlaceNode));

//Листенеры на кнопки закрытия поп-апов
popupProfileCloseButtonNode.addEventListener('click', handleCloseButtonClick);
popupPlaceCloseButtonNode.addEventListener('click', handleCloseButtonClick);
popupImageCloseButtonNode.addEventListener('click', handleCloseButtonClick);

//Листенеры на формы
formProfileElement.addEventListener('submit', submitProfileForm); 
formPlaceElement.addEventListener('submit', submitPlaceForm); 

//Функция добавления новой карточки
function addNewItem(name, link) {
  const newItem = composeItem({name: name, link: link})
  listContainerElement.prepend(newItem);
}

//Функция удаления карточки
function removeItem(evt) {
  const targetItem = evt.target.closest('.photo-grid__item');
  targetItem.remove();
}

//Функция добавления лайка на карточку
function likeItem(evt) {
  targetItem = evt.target;
  targetItem.classList.toggle('photo-grid__like-button_active');
}

//Функция открытия и заполнения поп-апа с изображением
function imageClick(link, name) {
  openPopup(popupImageNode);
  const popupImage = popupImageNode.querySelector('.popup__image');
  const popupText = popupImageNode.querySelector('.popup__text');
  popupImage.src = link;
  popupImage.alt = name + '.';
  popupText.textContent = name;
}

//Функция генерации списка карточек
function renderList() {
  const listItems = initialCards.map(composeItem);
  listContainerElement.append(...listItems);
}

//Создание карточек
function composeItem(item) {
  const newItem = templateElement.content.cloneNode(true);
  const headerElement = newItem.querySelector('.photo-grid__title');
  headerElement.textContent = item.name;
  const photoElement = newItem.querySelector('.photo-grid__photo');
  photoElement.src = item.link;
  photoElement.alt = item.name + '.';
  const removeButton = newItem.querySelector('.photo-grid__delete-button');
  removeButton.addEventListener('click', removeItem);
  const likeButton = newItem.querySelector('.photo-grid__like-button');
  likeButton.addEventListener('click', likeItem);
  const imageItem = newItem.querySelector('.photo-grid__photo');
  imageItem.addEventListener('click', () => {
    imageClick(item.link, item.name)
  });
  return newItem;
}

renderList();

