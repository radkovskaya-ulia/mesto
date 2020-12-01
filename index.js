const profileButtonNode = document.querySelector('.profile__edit-button');
const popupNode = document.querySelector('.popup');
const popupCloseButtonNode = document.querySelector('.popup__close-button');
const photogridLikeButtonNode = document.querySelector('.photo-grid__like-button');
const nameInput = document.querySelector('.popup__form-item_el_name');
const jobInput = document.querySelector('.popup__form-item_el_job');
const formElement = document.querySelector('.popup__form');
const nameProfileNode = document.querySelector('.profile__title');
const jobProfileNode = document.querySelector('.profile__subtitle');

profileButtonNode.addEventListener('click', handleProfileButtonClick);
popupCloseButtonNode.addEventListener('click', handleCloseButtonClick);

function handleProfileButtonClick() {
  popupNode.classList.add('popup_visible');
}

function handleCloseButtonClick() {
  popupNode.classList.remove('popup_visible');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfileNode.textContent = nameInput.value;
  jobProfileNode.textContent = jobInput.value;
  popupNode.classList.remove('popup_visible');
}

formElement.addEventListener('submit', formSubmitHandler); 

