import {
  SERVICE_TYPE_DETAIL_FAIL,
  SERVICE_TYPE_DETAIL_REQUEST,
  SERVICE_TYPE_DETAIL_SUCCESS,
  SERVICE_TYPE_DETAIL_RESET
} from '../constants/serviceTypeConstant'


export const serviceTypeDetailReducer = (state = { serviceType: {} }, action) => {
  switch (action.type) {
    case SERVICE_TYPE_DETAIL_REQUEST:
      return {
        loading: true
      }

    case SERVICE_TYPE_DETAIL_SUCCESS:
      return {
        loading: false,
        serviceType: action.payload
      }
    case SERVICE_TYPE_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    case SERVICE_TYPE_DETAIL_RESET:
      return {}

    default:
      return state
  }
}