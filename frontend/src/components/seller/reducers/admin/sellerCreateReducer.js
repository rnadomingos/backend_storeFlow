import {
  SELLER_CLEAN_ERRORS,
  SELLER_CREATE_FAIL,
  SELLER_CREATE_REQUEST,
  SELLER_CREATE_RESET,
  SELLER_CREATE_SUCCESS
} from "../../constants/sellerConstants"


export const sellerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_CREATE_REQUEST:
      return { loading: true }

    case SELLER_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }

    case SELLER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    case SELLER_CLEAN_ERRORS:
        return {
          ...state,
          success: false,
          error: null
        }

    case SELLER_CREATE_RESET:
      return {}

    default:
      return state
  }
}
