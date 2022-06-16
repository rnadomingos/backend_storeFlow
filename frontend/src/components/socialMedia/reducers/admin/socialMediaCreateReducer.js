import {
  SOCIAL_MEDIA_CREATE_FAIL,
  SOCIAL_MEDIA_CREATE_REQUEST,
  SOCIAL_MEDIA_CREATE_RESET,
  SOCIAL_MEDIA_CREATE_SUCCESS
} from '../../constants/socialMediaConstants'

export const socialMediaCreateReducer = (state = {}, action) => {

  switch (action.type) {
    case SOCIAL_MEDIA_CREATE_REQUEST:
      return {
        loading: true
      }
    case SOCIAL_MEDIA_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }
    case SOCIAL_MEDIA_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }
    case SOCIAL_MEDIA_CREATE_RESET:
      return {}

    default:
      return state
  }
}