import {
  CLEAN_ERRORS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS
} from "../../constants/accountConstants"


export const userListReducer = (state = { users: [] }, action) => {

  switch (action.type) {
    
    case USER_LIST_REQUEST:
      return { loading: true, users: [] }

    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        total: action.payload.total,
        limit_per_page: action.payload.limit_per_page
      }
    
    case USER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload.message
      }

    case CLEAN_ERRORS:
      return {
        ...state,
        error: null
      }


    default:
      return state
  }
}

