import axios from "axios"
import {
  PROSPECTION_DETAIL_FAIL,
  PROSPECTION_DETAIL_REQUEST,
  PROSPECTION_DETAIL_SUCCESS
} from "../constants/prospectionConstants"



export const prospectionDetailAction = (id) => async (dispatch, getState) => {
  try {

    dispatch({
      type: PROSPECTION_DETAIL_REQUEST
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
    } = await axios.get(
      `http://localhost:3333/prospections/${id}`,
      config
    )

    dispatch({
      type: PROSPECTION_DETAIL_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PROSPECTION_DETAIL_FAIL,
      payload: error.response.data
    })
  }
}