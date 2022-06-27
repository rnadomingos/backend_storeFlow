import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_RESET,
  NEW_PASSWORD_REQUEST,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAIL

} from "../constants/accountConstants";


export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
    case NEW_PASSWORD_REQUEST:
      return {
        loading: true,
        error: null
      }
    case FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }

    case NEW_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }

    case FORGOT_PASSWORD_FAIL:
    case NEW_PASSWORD_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    case FORGOT_PASSWORD_RESET:
      return {}

    default:
      return state
  }
}