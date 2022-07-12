import axios from "axios";
import {
  NEW_PASSWORD_REQUEST,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAIL

} from "../constants/accountConstants";


export const resetPasswordAction = (password, token) => async (dispatch) => {

  try {
    dispatch({ type: NEW_PASSWORD_REQUEST })

    const { data } = await axios.post(
      `/password/reset?token=${token}`,
      { password }
    )
    dispatch({
      type: NEW_PASSWORD_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: NEW_PASSWORD_FAIL,
      payload: error.response.data
    })
  }
}