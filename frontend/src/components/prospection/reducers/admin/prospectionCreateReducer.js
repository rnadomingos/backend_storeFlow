import {
  PROSPECTION_CREATE_FAIL,
  PROSPECTION_CREATE_REQUEST,
  PROSPECTION_CREATE_RESET,
  PROSPECTION_CREATE_SUCCESS
} from '../../constants/prospectionConstants'

export const prospectionCreateReducer = (state = {}, action) => {

  switch (action.type) {
    case PROSPECTION_CREATE_REQUEST:
      return {
        loading: true
      }
    case PROSPECTION_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case PROSPECTION_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    case PROSPECTION_CREATE_RESET:
      return {
        ...state,
        success: false,
        error: null
      }

    default:
      return state
  }
}