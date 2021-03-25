export default class Api{
  constructor(config){
    this._url = config.url;
    this._headers = config.headers;
  }

  getCards(){
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this._headers
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Сервер недоступен')
    })
  }

  getUserInfo(){
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Сервер недоступен')
    })
  }

  addCard(data){
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Сервер недоступен')
    })
  }

  editProfile(data){
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((res) => {
  
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Сервер недоступен')
    })
  }

  editAvatar(data){
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Сервер недоступен, lala')
    })
  }

  addLike(cardId){
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Сервер недоступен, nana')
    })
  }

  removeLike(cardId){
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Сервер недоступен, del')
    })
  }

  removeCard(cardId){
    return fetch(`${this._url}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    })
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Сервер недоступен, del card')
    })
  }

}


