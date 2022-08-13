import {
  SEGMENT_UPDATE_REQUEST,
  SEGMENT_UPDATE_SUCCESS,
  SEGMENT_UPDATE_FAIL,
  SEGMENT_UPDATE_RESET,
  SEGMENT_CLEAN_ERRORS
} from '../../constants/segmentConstants'


export const segmentUpdateReducer = (state = { segment: {} }, action) => {

  switch (action.type) {
    case SEGMENT_UPDATE_REQUEST:
      return {
        loading: true
      }
    case SEGMENT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case SEGMENT_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }
    case SEGMENT_CLEAN_ERRORS:
      return {
        ...state,
        success: false,
        error: null
      }
    case SEGMENT_UPDATE_RESET:
      return {}
    default:
      return state
  }
}