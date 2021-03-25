export default class Card {

  constructor({data, handleImageClick, handleDeleteIconClick}, cardSelector, api) {
    this._name = data.name;
    this._link = data.link;
    this._owner = data.owner;
    this._likes = data.likes;
    this._id = data.id;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._api = api;
    this._userId = 'c9b0fb2021c6601fa350f204'
  }

  //Создание разметки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .firstElementChild
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
    this._cardImage.alt = `${this._name}.`;
    this._countLikes(this._likes.length)
    // this._element.querySelector('.photo-grid__like-count').textContent = this._likes.length;
    if (this._userId != this._owner) {
      this._element.querySelector('.photo-grid__delete-button').remove()
    }
    if (this._ownerLike()){
      this._changeStatusLikeButton()
    }

    return this._element
  }

  _ownerLike (){
    return this._likes.some((item) => {
      return item._id === this._userId
    })
  }

  _countLikes(data){
    return this._element.querySelector('.photo-grid__like-count').textContent = data;
  }

  _changeStatusLikeButton(){
    return this._element.querySelector('.photo-grid__like-button').classList.toggle('photo-grid__like-button_active');
  }

  _handleLikeClick(id, status) {
    if (status){
      this._api.
        removeLike(id)
        .then((data) => {
          this._likes = data.likes;
          this._countLikes(this._likes.length);
          this._changeStatusLikeButton()
        }
        )
        .catch(err=>console.log(err))
    }
    else {
      this._api.
        addLike(id)
        .then((data) => {
          this._likes = data.likes
          this._countLikes(this._likes.length)
          this._changeStatusLikeButton()
        })
        .catch(err=>console.log(err))
      }
  }
 
  //Установка слушателей
  _setEventListeners() {
    const removeButton = this._element.querySelector('.photo-grid__delete-button');
    removeButton.addEventListener('click', () => {
      this._handleDeleteIconClick(this, this._id)
    });

    const likeButton = this._element.querySelector('.photo-grid__like-button');
    likeButton.addEventListener('click', () => {
      this._handleLikeClick(this._id, this._ownerLike());
    });

    const imageItem = this._element.querySelector('.photo-grid__photo');
    imageItem.addEventListener('click', () => {
      this._handleImageClick(this._link, this._name);
    });
  };

}



