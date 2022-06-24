import axios from 'axios'
import { SOCIAL_MEDIA_DETAIL_SUCCESS, SOCIAL_MEDIA_DETAIL_FAIL, SOCIAL_MEDIA_DETAIL_REQUEST } from '../../constants/socialMediaConstants'


export const socialMediaDetailAction = (id) => async (dispatch, getState) => {
  try {

    dispatch({
      type: SOCIAL_MEDIA_DETAIL_REQUEST
    })

    const {
      userLogin: {
        userInfo
      }
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(
      `http://localhost:3333/social-media/get-id/${id}`,
      config
    )

    dispatch({
      type: SOCIAL_MEDIA_DETAIL_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SOCIAL_MEDIA_DETAIL_FAIL,
      payload: error.response.data
    })
  }
}