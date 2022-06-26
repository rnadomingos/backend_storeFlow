import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_RESET,

} from "../constants/accountConstants";


export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        loading: true
      }
    case FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case FORGOT_PASSWORD_FAIL:
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