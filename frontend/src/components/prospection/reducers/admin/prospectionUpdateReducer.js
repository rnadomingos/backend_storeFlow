import {
  PROSPECTION_UPDATE_FAIL,
  PROSPECTION_UPDATE_RESET,
  PROSPECTION_UPDATE_SUCCESS,
  PROSPECTION_UPDATE_REQUEST
} from "../../constants/prospectionConstants"

export const prospectionUpdateReducer = (state = { prospection: {} }, action) => {

  switch (action.type) {
    case PROSPECTION_UPDATE_REQUEST:
      return {
        loading: true
      }
    case PROSPECTION_UPDATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case PROSPECTION_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }
    case PROSPECTION_UPDATE_RESET:
      return {
        ...state,
        success: false,
        error: null
      }

    default:
      return state
  }
}