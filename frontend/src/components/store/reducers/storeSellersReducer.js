import {
  STORE_LIST_SELLERS_FAIL,
  STORE_LIST_SELLERS_REQUEST,
  STORE_LIST_SELLERS_SUCCESS
} from "../constants/storeConstants"

export const storeSellersReducer = (state = { storeSellers: [] }, action) => {
  switch (action.type) {
    case STORE_LIST_SELLERS_REQUEST:
      return { loading: true, storeSellers: [] }

    case STORE_LIST_SELLERS_SUCCESS:
     
      return {
        loading: false,
        storeSellers: action.payload.sellers.filter(seller => seller.is_active === true)
      }

    case STORE_LIST_SELLERS_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    default:
      return state
  }
}