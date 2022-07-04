import {
  USER_UPDATE_PASSWORD_FAIL,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_RESET,
  USER_UPDATE_PASSWORD_SUCCESS
} from "../constants/accountConstants"


export const userUpdatePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PASSWORD_REQUEST:
      return { loading: true }

    case USER_UPDATE_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }

    case USER_UPDATE_PASSWORD_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    case USER_UPDATE_PASSWORD_RESET:
      return {}

    default:
      return state
  }
}
