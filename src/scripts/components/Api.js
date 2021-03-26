export default class Api{
  constructor(config){
    this._url = config.url;
    this._headers = config.headers;
  }

_checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}


  getCards(){
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  getUserInfo(){
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  addCard(data){
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._checkResponse)
  }

  editProfile(data){
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._checkResponse)
  }

  editAvatar(data){
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._checkResponse)
  }

  addLike(cardId){
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    })
    .then(this._checkResponse)
  }

  removeLike(cardId){
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._checkResponse)
  }

  removeCard(cardId){
    return fetch(`${this._url}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    })
    .then(this._checkResponse)
  }

}


