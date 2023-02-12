import axios from "axios"
import {
  SOCIAL_MEDIA_UPDATE_FAIL,
  SOCIAL_MEDIA_UPDATE_REQUEST,
  SOCIAL_MEDIA_UPDATE_SUCCESS
} from "../../constants/socialMediaConstants"

export const socialMediaUpdateAction = (socialMedia) => async (dispatch, getState) => {
  try {

    dispatch({ type: SOCIAL_MEDIA_UPDATE_REQUEST })

    const {
      userLogin: { userInfo }
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(
      `http://localhost:3333/social-media/${socialMedia.id}`,
      socialMedia,
      config
    )

    dispatch({
      type: SOCIAL_MEDIA_UPDATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SOCIAL_MEDIA_UPDATE_FAIL,
      payload: error.response.data
    })
  }
}