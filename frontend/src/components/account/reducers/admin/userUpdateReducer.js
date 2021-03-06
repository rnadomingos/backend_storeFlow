import {
  CLEAN_ERRORS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS
} from "../../constants/accountConstants"


export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true }

    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }

    case USER_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    case CLEAN_ERRORS:
      return {
        ...state,
        error: null
      }


    case USER_UPDATE_RESET:
      return {}

    default:
      return state
  }
}
