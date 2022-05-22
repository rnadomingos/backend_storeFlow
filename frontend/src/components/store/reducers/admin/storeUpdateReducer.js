import {
  STORE_UPDATE_REQUEST,
  STORE_UPDATE_SUCCESS,
  STORE_UPDATE_FAIL,
  STORE_UPDATE_RESET
} from '../../constants/storeConstants'


export const storesUpdateReducer = (state = { store: {} }, action) => {
  switch (action.type) {
    case STORE_UPDATE_REQUEST:
      return { loading: true }

    case STORE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }

    case STORE_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    case STORE_UPDATE_RESET:
      return {}

    default:
      return state
  }
}
