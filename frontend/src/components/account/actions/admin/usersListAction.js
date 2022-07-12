import axios from "axios"
import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS
} from "../../constants/accountConstants"

export const usersListAction = () => async (dispatch, getState) => {
  try {

    dispatch({ type: USER_LIST_REQUEST })

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
      `/account/list`,
      config
    )

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error.response.data
    })
  }
}
