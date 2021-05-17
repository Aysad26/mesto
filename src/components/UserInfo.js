import { nameInput, jobInput } from './constants.js';

export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._name = document.querySelector(nameSelector)
        this._job = document.querySelector(jobSelector)
    }
    getUserInfo() {
        const userData = {
            name: this._name.textContent,
            job: this._job.textContent
        }
        return userData
    }
    setUserInfo() {
        this._name.textContent = nameInput.value;
        this._job.textContent = jobInput.value;
    }
   
}