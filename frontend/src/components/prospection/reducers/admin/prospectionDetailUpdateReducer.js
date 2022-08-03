import {
  PROSPECTION_DETAIL_FAIL,
  PROSPECTION_DETAIL_REQUEST,
  PROSPECTION_DETAIL_SUCCESS,
  PROSPECTION_DETAIL_RESET
} from '../../constants/prospectionConstants'

export const prospectionDetailUpdateReducer = (state = { prospection: {} }, action) => {

  switch (action.type) {
    case PROSPECTION_DETAIL_REQUEST:
      return {
        ...state,
        loading: true
      }
    case PROSPECTION_DETAIL_SUCCESS:
      return {
        loading: false,
        prospection: action.payload
      }
    case PROSPECTION_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }
    case PROSPECTION_DETAIL_RESET:
      return {
        ...state,
        prospection: null,
        error: null
      }

    default:
      return state
  }
}