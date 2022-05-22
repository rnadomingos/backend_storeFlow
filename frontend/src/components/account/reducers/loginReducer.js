import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  LOGOUT_SUCCESS,
  CLEAN_ERRORS

} from "../constants/accountConstants";


export const loginReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false
      }

    case LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true
      }

    case LOGIN_FAIL:
      return {
        loading: false,
        userInfo: null,
        error: action.payload.message,
        isAuthenticated: false
      }

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        userInfo: null,
        isAuthenticated: false
      }

    case CLEAN_ERRORS:
      return {
        ...state,
        error: null
      }

    default:
      return state
  }
}