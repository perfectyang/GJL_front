import actionTypes from '../actionTypes'

const startLogin = () => {
  window.localStorage.setItem('token_id', 'token_id')
  return {
    type: actionTypes.START_LOGIN
  }
}

const loginFailed = () => {
  window.localStorage.removeItem('token_id')
  return {
    type: actionTypes.LOGIN_FAILED
  }
}

export const loginFn = (userInfo) => {
  return dispatch => {
    dispatch(startLogin())
  }
}

export const logout = () => {
  return dispatch => {
    // 实际的项目中，在这里要告诉服务端用户退出
    dispatch(loginFailed())
  }
}
