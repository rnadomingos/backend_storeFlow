import axios from "axios"
import { SEGMENT_DETAIL_FAIL, SEGMENT_DETAIL_REQUEST, SEGMENT_DETAIL_SUCCESS } from "../../constants/segmentConstants"


export const segmentDetailAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SEGMENT_DETAIL_REQUEST })

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
      `http://localhost:3333/segment/get-segment-id/${id}`,
      config
    )

    dispatch({
      type: SEGMENT_DETAIL_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SEGMENT_DETAIL_FAIL,
      payload: error.response.data
    })
  }
}