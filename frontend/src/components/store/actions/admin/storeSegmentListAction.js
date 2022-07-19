import axios from "axios"
import {
  STORE_SEGMENT_LIST_FAIL,
  STORE_SEGMENT_LIST_REQUEST,
  STORE_SEGMENT_LIST_SUCCESS
} from "../../constants/storeConstants"



export const storeSegmentListAction = (id) => async (dispatch, getState) => {
  try {

    dispatch({ type: STORE_SEGMENT_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(
      `http://localhost:3333/stores/get-segment/${id}`,
      config
    )

    dispatch({
      type: STORE_SEGMENT_LIST_SUCCESS,
      payload: data.segments
    })

  } catch (error) {
    dispatch({
      type: STORE_SEGMENT_LIST_FAIL,
      payload: error.response.data
    })

  }
}