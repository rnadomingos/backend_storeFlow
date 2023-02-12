import axios from 'axios'
import {
  CLEAN_ERRORS,
  SOCIAL_MEDIA_CREATE_FAIL,
  SOCIAL_MEDIA_CREATE_REQUEST,
  SOCIAL_MEDIA_CREATE_SUCCESS
} from '../../constants/socialMediaConstants'

export const socialMediaCreateAction = (newSocialMedia) => async (dispatch, getState) => {
  try {

    dispatch({ type: SOCIAL_MEDIA_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.post(
      `http://localhost:3333/social-media`,
      newSocialMedia,
      config
    )

    dispatch({
      type: SOCIAL_MEDIA_CREATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SOCIAL_MEDIA_CREATE_FAIL,
      payload: error.response.data
    })
  }
}

export const cleanErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAN_ERRORS
  })
}