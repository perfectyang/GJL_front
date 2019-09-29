import actionTypes from '../actionTypes'
const initState = {
  userInfo: JSON.parse(window.localStorage.getItem('userInfo') || '{}'),
  isLoading: 0
}

export default (state = initState, {type, ...args}) => {
  console.log('args', args)
  switch(type) {
    case actionTypes.START_LOGIN:
      return {
        ...state,
        userInfo: args.userInfo,
        isLoading: 1
      }
    case actionTypes.LOGIN_FAILED:
      return {
       ...state,
       userInfo: {},
       isLoading: 0
      }
    case actionTypes.UPDATEDUSERINFO:
      console.log('arg--------s', args)
      return {
       ...state,
       userInfo: args.userInfo
      }
    default:
      return state
    }
}