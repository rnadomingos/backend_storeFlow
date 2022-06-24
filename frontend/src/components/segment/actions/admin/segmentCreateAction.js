import axios from 'axios'
import {
  SEGMENT_CREATE_REQUEST,
  SEGMENT_CREATE_SUCCESS,
  SEGMENT_CREATE_FAIL
} from '../../constants/segmentConstants'

export const segmentCreateAction = (newSegment) => async (dispatch, getState) => {

  try {
    dispatch({ type: SEGMENT_CREATE_REQUEST })

    const {
      userLogin: { userInfo }
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.post(
      `http://localhost:3333/segment/new`,
      newSegment,
      config
    )
    dispatch({
      type: SEGMENT_CREATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SEGMENT_CREATE_FAIL,
      payload: error.response.data
    })
  }
}