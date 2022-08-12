import { SERVICE_TYPE_CLEAN_ERRORS, SERVICE_TYPE_DELETE_FAIL, SERVICE_TYPE_DELETE_REQUEST, SERVICE_TYPE_DELETE_SUCCESS } from "../../constants/serviceTypeConstant"


export const serviceTypeDeleteReducer = (state = { }, action) => {

  switch (action.type) {
    case SERVICE_TYPE_DELETE_REQUEST:
      return {
        loading: true
      }
    case SERVICE_TYPE_DELETE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case SERVICE_TYPE_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

      case SERVICE_TYPE_CLEAN_ERRORS:
        return {
          ...state,
          loading: false,
          error: null
        }
  

    default:
      return state
  }
}