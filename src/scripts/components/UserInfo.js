export default class UserInfo{
  constructor(data){
    this._firstname = data.name;
    this._job = data.job;
    this._firstnameElement= document.querySelector('.profile__title');
    this._jobValueElemnt= document.querySelector('.profile__subtitle');
    this._avatarElement = document.querySelector('.profile__avatar-button')
  }

  getUserInfo(){
    const data = {name: this._firstnameElement.textContent, job: this._jobValueElemnt.textContent}
    return data
  }

  setUserInfo(data){
    this._firstnameElement.textContent = data.firstname;
    this._jobValueElemnt.textContent = data.job;
  }

  setUserAvatar(link){
    this._avatarElement.style.backgroundImage = `url('${link}')`;
  }
}