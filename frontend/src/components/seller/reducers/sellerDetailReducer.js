import {
  SELLER_DETAIL_FAIL,
  SELLER_DETAIL_REQUEST,
  SELLER_DETAIL_SUCCESS,
  SELLER_DETAIL_RESET
} from "../constants/sellerConstants"


export const sellerDetailReducer = (state = { seller: {} }, action) => {
  switch (action.type) {
    case SELLER_DETAIL_REQUEST:
      return { loading: true }

    case SELLER_DETAIL_SUCCESS:
      return {
        loading: false,
        seller: action.payload
      }

    case SELLER_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    case SELLER_DETAIL_RESET:
      return {}

    default:
      return state
  }
}
