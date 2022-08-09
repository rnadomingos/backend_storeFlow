import {
  SEGMENT_CREATE_REQUEST,
  SEGMENT_CREATE_SUCCESS,
  SEGMENT_CREATE_FAIL,
  SEGMENT_CREATE_RESET,
  SEGMENT_CLEAN_ERRORS
} from '../../constants/segmentConstants'

export const segmentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SEGMENT_CREATE_REQUEST:
      return {
        loading: true
      }
    case SEGMENT_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case SEGMENT_CREATE_FAIL:
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
    case SEGMENT_CREATE_RESET: 
      return { }

    default:
      return state
  }
}