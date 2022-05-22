import axios from 'axios'
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from "../constants/accountConstants";

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_REQUEST
    })

    const { data } = await axios.post('/logout')

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: data
    })

    localStorage.removeItem('userInfo')

  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data
    })
  }
}

