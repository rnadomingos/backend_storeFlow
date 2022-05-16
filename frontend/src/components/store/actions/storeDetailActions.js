import axios from 'axios'
import {
  STORE_DETAIL_FAIL,
  STORE_DETAIL_REQUEST,
  STORE_DETAIL_SUCCESS
} from '../constants/storeConstants'


export const storesDetailActions = (cnpj) => async (dispatch, getState) => {
  try {

    dispatch({ type: STORE_DETAIL_REQUEST })

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
      `http://localhost:3333/stores/${cnpj}`,
      config
    )

    dispatch({
      type: STORE_DETAIL_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: STORE_DETAIL_FAIL,
      payload: error.response.data
    })
  }
}