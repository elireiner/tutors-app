import config from '../config';
//import TokenService from './token-service.js'

const UsersApiService = {
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
        //'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUser(userId) {
    return fetch(`${config.API_ENDPOINT}/${userId}`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUserComments(userId) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}/comments`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(userId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default UsersApiService
