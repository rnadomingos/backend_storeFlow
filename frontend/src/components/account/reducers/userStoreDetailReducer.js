import {
  USER_STORE_DETAIL_FAIL,
  USER_STORE_DETAIL_REQUEST,
  USER_STORE_DETAIL_RESET,
  USER_STORE_DETAIL_SUCCESS
} from "../constants/accountConstants"



export const userStoreDetailReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_STORE_DETAIL_REQUEST:
      return {
        ...state,
        loading: true
      }

    case USER_STORE_DETAIL_SUCCESS:
      return {
        loading: false,
        user: action.payload
      }

    case USER_STORE_DETAIL_RESET:
      return {}

    case USER_STORE_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    default:
      return state
  }
}
