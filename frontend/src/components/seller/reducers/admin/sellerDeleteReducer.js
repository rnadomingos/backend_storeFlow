import { 
  SELLER_DELETE_FAIL, 
  SELLER_DELETE_REQUEST, 
  SELLER_DELETE_SUCCESS 
} from "../../constants/sellerConstants"


export const sellerDeleteReducer = (state = { }, action) => {

  switch (action.type) {
    case SELLER_DELETE_REQUEST:
      return {
        loading: true
      }
    case SELLER_DELETE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case SELLER_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    default:
      return state
  }
}