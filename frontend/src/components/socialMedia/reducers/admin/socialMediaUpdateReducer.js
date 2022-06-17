import {
  SOCIAL_MEDIA_UPDATE_FAIL,
  SOCIAL_MEDIA_UPDATE_REQUEST,
  SOCIAL_MEDIA_UPDATE_RESET,
  SOCIAL_MEDIA_UPDATE_SUCCESS
} from '../../constants/socialMediaConstants'

export const socialMediaUpdateReducer = (state = {}, action) => {
  switch (action.type) {

    case SOCIAL_MEDIA_UPDATE_REQUEST:
      return {
        loading: true
      }

    case SOCIAL_MEDIA_UPDATE_SUCCESS:
      return {
        loading: false,
        success: action.payload
      }

    case SOCIAL_MEDIA_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    case SOCIAL_MEDIA_UPDATE_RESET:
      return {}

    default:
      return state
  }
}