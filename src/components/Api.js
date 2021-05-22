export class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getCards() {
      return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: this._headers,
    })
        .then(result => {
            if (result.ok) {
              return result.json()
            } else {
              return Promise.reject(`Ошибка: ${result.status}`)
            }
        })
    }

}

