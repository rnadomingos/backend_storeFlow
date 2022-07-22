import axios from 'axios'
import {
  SEGMENT_LIST_FAIL,
  SEGMENT_LIST_REQUEST,
  SEGMENT_LIST_SUCCESS,
} from '../../constants/segmentConstants'

export const segmentListAction = () => async (dispatch, getState) => {
  try {

    dispatch({ type: SEGMENT_LIST_REQUEST })

    const {
      userLogin: { userInfo }
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(
      `http://localhost:3333/segment/list`,
      config
    )

    dispatch({
      type: SEGMENT_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SEGMENT_LIST_FAIL,
      payload: error.response.data
    })
  }
}