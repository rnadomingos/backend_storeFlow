import {
  STORE_SEGMENT_SEPARATE_FAIL,
  STORE_SEGMENT_SEPARATE_REQUEST,
  STORE_SEGMENT_SEPARATE_RESET,
  STORE_SEGMENT_SEPARATE_SUCCESS
} from "../../constants/storeConstants";

export const storeSeparateSegmentReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_SEGMENT_SEPARATE_REQUEST:
      return {
        loading: true
      }
    case STORE_SEGMENT_SEPARATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case STORE_SEGMENT_SEPARATE_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }
    case STORE_SEGMENT_SEPARATE_RESET:
      return {}

    default:
      return state
  }
}