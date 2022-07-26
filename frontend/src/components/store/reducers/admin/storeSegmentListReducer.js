import {
  STORE_SEGMENT_LIST_FAIL,
  STORE_SEGMENT_LIST_REQUEST,
  STORE_SEGMENT_LIST_RESET,
  STORE_SEGMENT_LIST_SUCCESS
} from "../../constants/storeConstants";

export const storeSegmentListReducer = (state = { storeSegment: [] }, action) => {
  switch (action.type) {
    case STORE_SEGMENT_LIST_REQUEST:
      return {
        loading: true,
        storeSegment: []
      }

    case STORE_SEGMENT_LIST_SUCCESS:
      return {
        loading: false,
        storeSegment: action.payload.segments.filter(ss => ss.is_active === true)
      }

    case STORE_SEGMENT_LIST_RESET:
      return {}

    case STORE_SEGMENT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}