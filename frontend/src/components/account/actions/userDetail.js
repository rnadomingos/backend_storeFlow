import axios from "axios"
import {
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS
} from "../constants/accountConstants"



export const storesDetailActions = (userId) => async (dispatch, getState) => {
  try {

    dispatch({ type: USER_DETAIL_REQUEST })

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
      `http://localhost:3333/USERs/${userId}`,
      config
    )

    dispatch({
      type: USER_DETAIL_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: USER_DETAIL_FAIL,
      payload: error.response.data
    })
  }
}