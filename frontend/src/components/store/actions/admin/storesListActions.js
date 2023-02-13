import axios from 'axios'
import {
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
  STORE_LIST_FAIL
} from '../../constants/storeConstants'

export const storesListActions = (page, keyword = '') => async (dispatch, getState) => {
  try {

    dispatch({ type: STORE_LIST_REQUEST })

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
      `/stores?page=${page}&keyword=${keyword}`,
      config
    )

    dispatch({
      type: STORE_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: STORE_LIST_FAIL,
      payload: error.response.data
    })
  }
}
