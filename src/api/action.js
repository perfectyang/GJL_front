import apiUrl from './url'
import request from './request'
const allAction = {
  login (data) {
    return request.post(apiUrl.login, data)
  },
  register (data) {
    console.log('data', data)
    return request.post(apiUrl.register, data)
  },
  logout (data) {
    return request.post(apiUrl.logout, data)
  },
  userList (data) {
    console.log('到这里', data)
    return request.post(apiUrl.userList, data)
  }
}

export default {
  ...allAction
}
