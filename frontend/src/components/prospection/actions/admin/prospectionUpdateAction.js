import axios from "axios"
import {
  PROSPECTION_UPDATE_FAIL,
  PROSPECTION_UPDATE_REQUEST,
  PROSPECTION_UPDATE_SUCCESS
} from "../../constants/prospectionConstants"


export const prospectionUpdateAction = (prospection) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROSPECTION_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(
      `http://localhost:3333/prospections/${prospection.id}`,
      prospection,
      config
    )

    dispatch({
      type: PROSPECTION_UPDATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PROSPECTION_UPDATE_FAIL,
      payload: error.response.data
    })
  }
}