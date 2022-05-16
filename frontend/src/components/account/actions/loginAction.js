import axios from 'axios'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../constants/accountConstants";

export const loginAction = (user_dms, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST
    })

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const { data } = await axios.post(
      '/login',
      { 'user_dms': user_dms, 'password': password },
      config
    )

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data
    })
  }
}
