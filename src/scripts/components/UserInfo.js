export default class UserInfo{
  constructor(data){
    this._firstname = data.name;
    this._job = data.job;
  }

  getUserInfo(){
    this._firstname = document.querySelector('.profile__title').textContent;
    this._job = document.querySelector('.profile__subtitle').textContent;
    const data = {name: this._firstname, job: this._job}
    return data
  }

  setUserInfo(data){
    const firstname = document.querySelector('.profile__title');
    const job = document.querySelector('.profile__subtitle');
    firstname.textContent = data.firstname;
    job.textContent = data.job;
  }
}