import axios from "axios"
import {
  CLEAN_ERRORS,
  STORE_SEGMENT_JOIN_FAIL,
  STORE_SEGMENT_JOIN_REQUEST,
  STORE_SEGMENT_JOIN_SUCCESS
} from "../../constants/storeConstants"

export const storeJoinSegmentAction = (storeSegmentData) => async (dispatch, getState) => {
  try {
    dispatch({ type: STORE_SEGMENT_JOIN_REQUEST })

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
      `http://localhost:3333/stores/joinStoreSegment`,
      storeSegmentData,
      config
    )

    dispatch({
      type: STORE_SEGMENT_JOIN_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: STORE_SEGMENT_JOIN_FAIL,
      payload: error.response.data
    })
  }
}

// Clean Errors
export const cleanErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAN_ERRORS
  })
}