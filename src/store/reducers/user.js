import actionTypes from '../actionTypes'

const initState = {
  list: [
    {
      name: 1
    }
  ],
  isLoading: 0
}

export default (state = initState, action) => {
  switch(action.type) {
    case actionTypes.START_LOGIN:
      return {
        ...state,
        isLoading: 1
      }
    case actionTypes.LOGIN_FAILED:
      return {
       ...state,
       isLoading: 0
      }
    default:
      return state
    }
}