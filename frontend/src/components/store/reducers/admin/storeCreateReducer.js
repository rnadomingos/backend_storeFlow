import {

  STORE_CREATE_REQUEST,
  STORE_CREATE_SUCCESS,
  STORE_CREATE_FAIL,
  STORE_CREATE_RESET,
  CLEAN_ERRORS
} from '../../constants/storeConstants'

export const storeCreateReducer = (state = {}, action) => {



  switch (action.type) {
    case STORE_CREATE_REQUEST:
      return { loading: true }
    case STORE_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case STORE_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    case STORE_CREATE_RESET:
      return {}

    default:
      return state
  }
}