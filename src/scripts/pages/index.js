import '../../pages/index.css';
import {Card} from '../components/Сard.js'
import {validationConfig, FormValidator} from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  popupProfileNode,
  popupPlaceNode,
  popupImageNode,
  profileButtonNode,
  addPlaceButtonNode,
  formProfileElement,
  formPlaceElement,
  nameInput,
  jobInput,
  listContainerElement
} from '../utils/constants.js';

//Создание новой карточки
function createCard(data) {
  const card = new Card({name: data.name, link: data.link}, '.template', imageClick);
  const cardElement = card.generateCard();
  return cardElement;
}

//Получение информации о пользователе
const userInfo = new UserInfo({
  name: document.querySelector('.profile__title').textContent,
  job: document.querySelector('.profile__subtitle').textContent
}
)

//Создание попапа профиля
const popupProfile = new PopupWithForm(popupProfileNode, {
  submitPopUp: (data) => {
    userInfo.setUserInfo(data)
    popupProfile.close()}
  }
)

popupProfile.setEventListeners()

//Создание попапа места
const popupPlace = new PopupWithForm(popupPlaceNode, {
  submitPopUp: (data) => {
    const cardElement = createCard({name: data.name, link: data.link})
    listContainerElement.prepend(cardElement);
    popupPlace.close()
  }
})

popupPlace.setEventListeners()

//Создание попапа изображения
function imageClick(link, name) {
  const popupImage = new PopupWithImage(popupImageNode, link, name);
  popupImage.setEventListeners()
  popupImage.open()
}

//Листенеры на кнопки открытия поп-апов
profileButtonNode.addEventListener('click', () => {
  profileValidator.resetValidation();
  popupProfile.open();
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
});

addPlaceButtonNode.addEventListener('click', () => {
  formPlaceElement.reset();
  addCardValidator.resetValidation();
  popupPlace.open();
});

//Включение валидации для каждой из форм
const profileValidator = new FormValidator(validationConfig, formProfileElement);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, formPlaceElement);
addCardValidator.enableValidation();

//Создание списка карточек
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
},
listContainerElement);

cardList.render()