import axios from 'axios'
import {
  SOCIAL_MEDIA_LIST_FAIL, SOCIAL_MEDIA_LIST_REQUEST, SOCIAL_MEDIA_LIST_SUCCESS
} from '../../constants/socialMediaConstants'

export const socialMediaListAction = (page, keyword = '') => async (dispatch, getState) => {
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

    const url = `/social-media?page=${page}&keyword=${keyword}`
    
    const {
      data
    } = await axios.get(
      url,
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