import {
  SELLER_LIST_FAIL,
  SELLER_LIST_REQUEST,
  SELLER_LIST_SUCCESS
} from "../constants/sellerConstants"


export const sellersListReducer = (state = { sellers: [] }, action) => {
  switch (action.type) {
    case SELLER_LIST_REQUEST:
      return {
        loading: true,
        sellers: []
      }

    case SELLER_LIST_SUCCESS:
      return {
        loading: false,
        sellers: action.payload,
        total: action.payload.total,
        limit_per_page: action.payload.limit_per_page
      }

    case SELLER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

