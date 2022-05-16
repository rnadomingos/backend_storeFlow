import {
  SELLER_UPDATE_FAIL,
  SELLER_UPDATE_REQUEST,
  SELLER_UPDATE_RESET,
  SELLER_UPDATE_SUCCESS
} from "../../constants/sellerConstants"


export const sellerUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_UPDATE_REQUEST:
      return { loading: true }

    case SELLER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }

    case SELLER_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    case SELLER_UPDATE_RESET:
      return {}

    default:
      return state
  }
}
