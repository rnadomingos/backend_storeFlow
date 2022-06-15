import axios from 'axios'
import {
  SOCIAL_MEDIA_LIST_FAIL, SOCIAL_MEDIA_LIST_REQUEST, SOCIAL_MEDIA_LIST_SUCCESS
} from '../../constants/socialMediaConstants'

export const socialMediaListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SOCIAL_MEDIA_LIST_REQUEST
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const {
      data
    } = await axios.get(
      `http://localhost:3333/social-media/list`,
      config
    )

    dispatch({
      type: SOCIAL_MEDIA_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SOCIAL_MEDIA_LIST_FAIL,
      payload: error.response.data
    })
  }
}