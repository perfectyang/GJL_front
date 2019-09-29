import apiUrl from './url'
import request from './request'
const allAction = {
  login (data) {
    return request.post(apiUrl.login, data)
  },
  logout (data) {
    console.log('data----', data)
    return request.post(apiUrl.logout, data)
  }
}

export default {
  ...allAction
}
