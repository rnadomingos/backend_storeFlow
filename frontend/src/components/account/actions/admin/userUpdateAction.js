import axios from "axios"
import {
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS
} from "../../constants/accountConstants"

export const userUpdateAction = (userData) => async (dispatch, getState) => {
  try {

    dispatch({ type: USER_UPDATE_REQUEST })

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
      `/account/update/${userData.id}`,
      userData,
      config
    )

    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error.response.data
    })
  }
}