import {
  SEGMENT_LIST_SUCCESS,
  SEGMENT_LIST_FAIL,
  SEGMENT_LIST_REQUEST,
} from '../../constants/segmentConstants'

export const segmentListReducer = (state = { segment: [] }, action) => {

  switch (action.type) {
    case SEGMENT_LIST_REQUEST:
      return {
        loading: true,
        segment: []
      }
    case SEGMENT_LIST_SUCCESS:
      return {
        loading: false,
        segment: action.payload
      }
    case SEGMENT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}