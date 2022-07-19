import {
  STORE_SEGMENT_JOIN_FAIL,
  STORE_SEGMENT_JOIN_REQUEST,
  STORE_SEGMENT_JOIN_RESET,
  STORE_SEGMENT_JOIN_SUCCESS
} from "../../constants/storeConstants";

export const storeJoinSegmentReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_SEGMENT_JOIN_REQUEST:
      return {
        loading: true
      }
    case STORE_SEGMENT_JOIN_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case STORE_SEGMENT_JOIN_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }
    case STORE_SEGMENT_JOIN_RESET:
      return {}
    default:
      return state
  }
}