import {
  STORE_DETAIL_REQUEST,
  STORE_DETAIL_SUCCESS,
  STORE_DETAIL_FAIL,
  STORE_DETAIL_RESET,
} from '../constants/storeConstants'

export const storesDetailReducer = (state = { store: {} }, action) => {
  switch (action.type) {
    case STORE_DETAIL_REQUEST:
      return { loading: true }

    case STORE_DETAIL_SUCCESS:
      return {
        loading: false,
        store: action.payload
      }

    case STORE_DETAIL_RESET:
      return {}

    case STORE_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}
