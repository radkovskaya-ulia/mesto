export default class UserInfo{
  constructor(data){
    this._firstnameElement= document.querySelector(data.firstnameSelector);
    this._jobValueElemnt= document.querySelector(data.jobSelector);
    this._avatarElement = document.querySelector(data.avatarSelector);
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