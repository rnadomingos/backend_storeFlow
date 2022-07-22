import axios from "axios"
import {
  CLEAN_ERRORS,
  STORE_SEGMENT_SEPARATE_FAIL,
  STORE_SEGMENT_SEPARATE_REQUEST,
  STORE_SEGMENT_SEPARATE_SUCCESS
} from "../../constants/storeConstants"

export const storeSeparateSegmentAction = (storeSegmentDelete) => async (dispatch, getState) => {
  try {
    dispatch({ type: STORE_SEGMENT_SEPARATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.delete(
      `http://localhost:3333/stores/separateStoreSegment`,
      storeSegmentDelete,
      config
    )

    dispatch({
      type: STORE_SEGMENT_SEPARATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: STORE_SEGMENT_SEPARATE_FAIL,
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