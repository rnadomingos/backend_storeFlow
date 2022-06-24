import {
  SOCIAL_MEDIA_LIST_FAIL,
  SOCIAL_MEDIA_LIST_REQUEST,
  SOCIAL_MEDIA_LIST_SUCCESS,
  SOCIAL_MEDIA_LIST_RESET,
  SOCIAL_MEDIA_CREATE_RESET
} from '../../constants/socialMediaConstants'

export const socialMediaListReducer = (state = { socialMedia: [] }, action) => {

  switch (action.type) {
    case SOCIAL_MEDIA_LIST_REQUEST:
      return {
        loading: true,
        socialMedia: []
      }
    case SOCIAL_MEDIA_LIST_SUCCESS:
      return {
        loading: false,
        socialMedia: action.payload
      }

    case SOCIAL_MEDIA_LIST_FAIL:
      return {
        loading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}