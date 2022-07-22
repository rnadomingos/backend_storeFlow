import {
  STORE_FLOW_CREATE_FAIL,
  STORE_FLOW_CREATE_REQUEST,
  STORE_FLOW_CREATE_RESET,
  STORE_FLOW_CREATE_SUCCESS
} from "../constants/storeFlowConstants"


export const storeFlowCreateReducer = (state = {}, action) => {


  switch (action.type) {
    case STORE_FLOW_CREATE_REQUEST:
      return { loading: true }

    case STORE_FLOW_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }

    case STORE_FLOW_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    case STORE_FLOW_CREATE_RESET:
      return {}

    default:
      return state
  }
}