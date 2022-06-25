import {
  SEGMENT_DETAIL_REQUEST,
  SEGMENT_DETAIL_SUCCESS,
  SEGMENT_DETAIL_FAIL,
  SEGMENT_DETAIL_RESET
} from '../../constants/segmentConstants'

export const segmentDetailReducer = (state = { segment: {} }, action) => {
  switch (action.type) {
    case SEGMENT_DETAIL_REQUEST:
      return {
        loading: true
      }
    case SEGMENT_DETAIL_SUCCESS:
      return {
        loading: false,
        segment: action.payload
      }
    case SEGMENT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }
    case SEGMENT_DETAIL_RESET:
      return {}
    default:
      return state
  }
}