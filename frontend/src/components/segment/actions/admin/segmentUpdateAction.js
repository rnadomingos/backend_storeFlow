import axios from "axios"
import { SEGMENT_UPDATE_FAIL, SEGMENT_UPDATE_REQUEST, SEGMENT_UPDATE_SUCCESS } from "../../constants/segmentConstants"


export const segmentUpdateAction = (segment) => async (dispatch, getState) => {
  try {
    dispatch({ type: SEGMENT_UPDATE_REQUEST })

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
      `http://localhost:3333/segments/${segment.id}`,
      segment,
      config
    )

    dispatch({
      type: SEGMENT_UPDATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SEGMENT_UPDATE_FAIL,
      payload: error.response.data
    })
  }
}