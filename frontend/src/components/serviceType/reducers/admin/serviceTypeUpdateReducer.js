import {
  SERVICE_TYPE_UPDATE_FAIL,
  SERVICE_TYPE_UPDATE_REQUEST,
  SERVICE_TYPE_UPDATE_RESET,
  SERVICE_TYPE_UPDATE_SUCCESS
} from '../../constants/serviceTypeConstant'


export const serviceTypeUpdateReducer = (state = { serviceType: {} }, action) => {

  switch (action.type) {
    case SERVICE_TYPE_UPDATE_REQUEST:
      return {
        loading: true
      }

    case SERVICE_TYPE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      }
    case SERVICE_TYPE_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    case SERVICE_TYPE_UPDATE_RESET:
      return {}

    default:
      return state
  }
}