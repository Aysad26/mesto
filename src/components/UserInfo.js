import { nameInput, jobInput } from './constants.js';

export default class UserInfo {
    constructor(nameSelector, jobSelector, userPhotoSelector, userId) {
        this._name = document.querySelector(nameSelector)
        this._job = document.querySelector(jobSelector)
        this._userPhoto = document.querySelector(userPhotoSelector)
        this._userId = userId
        this._avatar = document.querySelector('.profile__image')
    }
    getUserInfo() {
        const userData = {
            name: this._name.textContent,
            job: this._job.textContent
        }
        return userData
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.about;
        this.setUserAvatar(data);
        this._avatar.alt = `${data.name}`;
    }

    setUserAvatar(data) {
    this._avatar.src = data.avatar;
  }
}