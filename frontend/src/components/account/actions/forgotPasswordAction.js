import axios from "axios";
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,

} from "../constants/accountConstants";


export const forgotPasswordAction = (email) => async (dispatch) => {

  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST })

    const { data } = await axios.post(
      `/password/forgot`,
      { email }
    )
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data
    })
  }
}