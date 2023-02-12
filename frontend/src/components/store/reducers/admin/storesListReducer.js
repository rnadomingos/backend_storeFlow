import {
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
  STORE_LIST_FAIL
} from '../../constants/storeConstants'

export const storesListReducer = (state = { stores: [] }, action) => {
  switch (action.type) {
    case STORE_LIST_REQUEST:
      return { loading: true, stores: [] }

    case STORE_LIST_SUCCESS:
      return {
        loading: false,
        stores: action.payload.store
      }

    case STORE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

