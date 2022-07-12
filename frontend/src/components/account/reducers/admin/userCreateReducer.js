import {
  CLEAN_ERRORS,
  USER_CREATE_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_RESET,
  USER_CREATE_SUCCESS
} from "../../constants/accountConstants"

export const userCreateReducer = (state = {}, action) => {



  switch (action.type) {

    case USER_CREATE_REQUEST:
      return { loading: true }

    case USER_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }

    case USER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    case CLEAN_ERRORS:
      return {
        ...state,
        error: null
      }


    case USER_CREATE_RESET:
      return {}

    default:
      return state
  }
}