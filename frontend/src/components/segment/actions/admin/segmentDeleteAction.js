import axios from "axios"
import { 
  SEGMENT_DELETE_FAIL, 
  SEGMENT_DELETE_REQUEST, 
  SEGMENT_DELETE_SUCCESS 
} from "../../constants/segmentConstants"



export const segmentDeleteAction = (id) => async (dispatch, getState) => {
  try {

    dispatch({
      type: SEGMENT_DELETE_REQUEST
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const {
      data
    } = await axios.delete(
      `/segments/${id}`,
      config
    )

    dispatch({
      type: SEGMENT_DELETE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SEGMENT_DELETE_FAIL,
      payload: error.response.data
    })
  }
}