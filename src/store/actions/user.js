import actionTypes from '../actionTypes'
const startLogin = (userInfo) => {
  window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
  window.localStorage.setItem('token_id', JSON.stringify(userInfo.token_id))
  return {
    type: actionTypes.START_LOGIN,
    userInfo
  }
}



const loginFailed = () => {
  window.localStorage.removeItem('token_id')
  window.localStorage.removeItem('userInfo')
  return {
    type: actionTypes.LOGIN_FAILED
  }
}

export const loginFn = (userInfo) => {
  return dispatch => {
    dispatch(startLogin(userInfo))
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(loginFailed())
  }
}

