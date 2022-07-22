import axios from "axios"
import {
  USER_STORE_DETAIL_FAIL,
  USER_STORE_DETAIL_REQUEST,
  USER_STORE_DETAIL_SUCCESS
} from "../constants/accountConstants"

export const userStoreDetailAction = (userDms) => async (dispatch, getState) => {
  try {

    dispatch({ type: USER_STORE_DETAIL_REQUEST })

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
      `/seller/get-store/${userDms}`,
      config
    )

    dispatch({
      type: USER_STORE_DETAIL_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: USER_STORE_DETAIL_FAIL,
      payload: error.response.data
    })
  }
}