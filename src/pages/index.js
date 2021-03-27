import './index.css';
import Card from '../scripts/components/Сard.js'
import FormValidator from '../scripts/components/FormValidator.js'
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithSubmit from '../scripts/components/PopupWithSubmit.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import {
  popupProfileNode,
  popupPlaceNode,
  popupImageNode,
  profileButtonNode,
  addPlaceButtonNode,
  formProfileElement,
  formPlaceElement,
  formAvatarElement,
  nameInput,
  jobInput,
  listContainerElement,
  validationConfig,
  popupAvatarNode,
  avatarButtonNode,
  popupConfirmNode,
  firstnameSelector,
  jobSelector,
  avatarSelector
  
} from '../scripts/utils/constants.js';

let userId

//Создание элемента класса Api
const api = new Api({
  url:"https://mesto.nomoreparties.co/v1/cohort-21/",
  headers:{
    "Content-type": "application/json",
    "authorization": "ae3a42ef-6d53-43ab-8770-9b71d1abcd8b"
  }
})

const profileValidator = new FormValidator(validationConfig, formProfileElement);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, formPlaceElement);
addCardValidator.enableValidation();

const avatarValidator = new FormValidator(validationConfig, formAvatarElement);
avatarValidator.enableValidation();

const promises = [api.getUserInfo(), api.getCards()]

Promise.all(promises)
  .then(([userData, cards]) =>{
    const userInfo = new UserInfo({
      firstnameSelector,
      jobSelector,
      avatarSelector
    })
    userInfo.setUserInfo({
      firstname: userData.name,
      job: userData.about
    })
    userInfo.setUserAvatar(userData.avatar);
    userId = userData._id

    function createCard(data) {
      const card = new Card(
        {
        data: {name: data.name, link: data.link, likes: data.likes, owner: data.owner, id: data.id},
        handleImageClick: (link, name) => {
          popupImage.open(link, name);},
        handleDeleteIconClick: (card, cardId) => {
          popupConfirm.open(card, cardId)
        }
        },
        '.template',
        api,
        userId);
      const cardElement = card.generateCard();
      return cardElement;
    }
    const cardList = new Section({
      items: cards.map(item => {
        return {name : item.name, link : item.link, likes: item.likes, owner: item.owner._id, id: item._id}}
        ),
      renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement, true);
      },
      api
    },
    listContainerElement);
    cardList.render()

    //Создание попапа профайла
    const popupProfile = new PopupWithForm(popupProfileNode, {
      submitPopUp: (data) => {
        popupProfile.loading(true, "Сохранить");
        api.
          editProfile({name: data.firstname, about: data.job})
          .then((data) => {
            userInfo.setUserInfo({firstname: data.name, job: data.about})
            popupProfile.close()
          })
          .catch(err=>console.log(err))
          .finally(() => popupProfile.loading(false, "Сохранить"))
        }
      }
    )
    popupProfile.setEventListeners()

    //Листенер на кнопку открытия поп-апа профайла
    profileButtonNode.addEventListener('click', () => {
      profileValidator.resetValidation();
      popupProfile.open();
      const data = userInfo.getUserInfo();
      nameInput.value = data.name;
      jobInput.value = data.job;
    });

    //Листенер на кнопку открытия поп-апа аватара
    avatarButtonNode.addEventListener('click', () => {
      formAvatarElement.reset();
      avatarValidator.resetValidation();
      popupAvatar.open();
    });

    //Создание попапа аватара
    const popupAvatar = new PopupWithForm(popupAvatarNode, {
      submitPopUp: (data) => {
        popupAvatar.loading(true, "Сохранить");
        api.
          editAvatar({avatar: data.avatarlink})
          .then((data) => {
            userInfo.setUserAvatar(data.avatar)
            popupAvatar.close()
          })
          .catch(err=>console.log(err))
          .finally(() => popupProfile.loading(false, "Сохранить"))
        }})
    popupAvatar.setEventListeners()

    //Листенер на кнопку открытия поп-апа места
    addPlaceButtonNode.addEventListener('click', () => {
      formPlaceElement.reset();
      addCardValidator.resetValidation();
      popupPlace.open();
    });

    //Создание попапа места
    const popupPlace = new PopupWithForm(popupPlaceNode, {
      submitPopUp: (data) => {
        popupPlace.loading(true, "Создать");
        api.
          addCard(data)
          .then((data) => {
            const cardElement = createCard({
              name: data.name, 
              link: data.link, 
              likes: data.likes, 
              owner: data.owner._id,
              id: data._id
            })
            cardList.addItem(cardElement, false)
            popupPlace.close()
          })
          .catch(err=>console.log(err))
          .finally(() => popupPlace.loading(false, "Создать"))
      }
    })
    popupPlace.setEventListeners()

    //Создание попапа с изображением
    const popupImage = new PopupWithImage(popupImageNode);
    popupImage.setEventListeners()


    //Создание попапа подтверждения удаления карточки
    const popupConfirm = new PopupWithSubmit(popupConfirmNode,{
      submitPopUp: (cardId) => {
        popupConfirm.loading(false)
        api.
          removeCard(cardId)
          .then((data) => {
            popupConfirm.deleteCard();
            popupConfirm.close()
          })
          .catch(err=>console.log(err))
          .finally(() => popupConfirm.loading(false))
        }
    });

    popupConfirm.setEventListeners()

  })
  .catch(err=>console.log(err))