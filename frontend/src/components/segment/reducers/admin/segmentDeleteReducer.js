import { 
  SEGMENT_DELETE_FAIL, 
  SEGMENT_DELETE_REQUEST, 
  SEGMENT_DELETE_SUCCESS 
} from "../../constants/segmentConstants"


export const segmentDeleteReducer = (state = { }, action) => {

  switch (action.type) {
    case SEGMENT_DELETE_REQUEST:
      return {
        loading: true
      }
    case SEGMENT_DELETE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case SEGMENT_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    default:
      return state
  }
}