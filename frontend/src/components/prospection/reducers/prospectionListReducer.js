import {
  PROSPECTION_LIST_FAIL,
  PROSPECTION_LIST_REQUEST,
  PROSPECTION_LIST_SUCCESS
} from '../constants/prospectionConstants'

export const prospectionListReducer = (state = { prospection: [] }, action) => {
  switch (action.type) {
    case PROSPECTION_LIST_REQUEST:
      return {
        loading: true,
        prospection: []
      }
    case PROSPECTION_LIST_SUCCESS:
      return {
        loading: false,
        prospection: action.payload.prospections,
        total: action.payload.total,
        limit_per_page: action.payload.limit_per_page
      }
    case PROSPECTION_LIST_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}