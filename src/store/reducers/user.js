import actionTypes from '../actionTypes'

const initState = {
  userInfo: JSON.parse(window.localStorage.getItem('userInfo') || '{}'),
  isLoading: 0
}

const ACTION_HANDLERS = {
  [actionTypes.START_LOGIN](state, action) {
    console.log('action', action)
    return {
      ...state,
      userInfo: action.userInfo,
      isLoading: 1
    }
  },
  [actionTypes.LOGIN_FAILED](state, action) {
    return {
      ...state,
      userInfo: {},
      isLoading: 0
    }
  }
}

export default (state = initState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
