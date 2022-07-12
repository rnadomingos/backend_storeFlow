import {
  SOCIAL_MEDIA_DETAIL_FAIL,
  SOCIAL_MEDIA_DETAIL_REQUEST,
  SOCIAL_MEDIA_DETAIL_SUCCESS,
  SOCIAL_MEDIA_DETAIL_RESET
} from '../../constants/socialMediaConstants'

export const socialMediaDetailReducer = (state = { socialMedia: {} }, action) => {
  switch (action.type) {
    case SOCIAL_MEDIA_DETAIL_REQUEST:
      return {
        ...state,
        loading: false
      }
    case SOCIAL_MEDIA_DETAIL_SUCCESS:
      return {
        loading: false,
        socialMedia: action.payload
      }

    case SOCIAL_MEDIA_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    case SOCIAL_MEDIA_DETAIL_RESET:
      return {}

    default:
      return state
  }
}