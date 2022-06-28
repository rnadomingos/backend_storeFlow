import axios from "axios"
import {
  USER_CREATE_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS
} from "../../constants/accountConstants"

export const userCreateAction = (userData) => async (dispatch, getState) => {
  try {

    dispatch({ type: USER_CREATE_REQUEST })

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
      `/account/new`,
      userData,
      config
    )

    dispatch({
      type: USER_CREATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: USER_CREATE_FAIL,
      payload: error.response.data
    })
  }
}
