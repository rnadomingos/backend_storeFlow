import axios from "axios"
import {
  PROSPECTION_DELETE_FAIL,
  PROSPECTION_DELETE_REQUEST,
  PROSPECTION_DELETE_SUCCESS
} from "../../constants/prospectionConstants"



export const prospectionDeleteAction = (id) => async (dispatch, getState) => {
  try {

    dispatch({
      type: PROSPECTION_DELETE_REQUEST
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
      `/prospections/${id}`,
      config
    )

    dispatch({
      type: PROSPECTION_DELETE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PROSPECTION_DELETE_FAIL,
      payload: error.response.data
    })
  }
}