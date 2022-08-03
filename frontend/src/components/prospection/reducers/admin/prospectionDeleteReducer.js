import {
  PROSPECTION_DELETE_FAIL,
  PROSPECTION_DELETE_SUCCESS,
  PROSPECTION_DELETE_REQUEST,
  PROSPECTION_DELETE_RESET
} from "../../constants/prospectionConstants"

export const prospectionDeleteReducer = (state = { }, action) => {

  switch (action.type) {
    case PROSPECTION_DELETE_REQUEST:
      return {
        loading: true
      }
    case PROSPECTION_DELETE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case PROSPECTION_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }
      
    case PROSPECTION_DELETE_RESET:
        return {}
  

    default:
      return state
  }
}