import {
  SERVICE_TYPE_CREATE_REQUEST,
  SERVICE_TYPE_CREATE_SUCCESS,
  SERVICE_TYPE_CREATE_FAIL,
  SERVICE_TYPE_CREATE_RESET,
  SERVICE_TYPE_CLEAN_ERRORS
} from '../../constants/serviceTypeConstant'


export const serviceTypeCreateReducer = (state = {}, action) => {

  switch (action.type) {
    case SERVICE_TYPE_CREATE_REQUEST:
      return { loading: true }
    case SERVICE_TYPE_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case SERVICE_TYPE_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }
    case SERVICE_TYPE_CLEAN_ERRORS:
      return {
        ...state,
        success: false,
        error: null
      }
    case SERVICE_TYPE_CREATE_RESET:
      return {}

    default:
      return state
  }
}