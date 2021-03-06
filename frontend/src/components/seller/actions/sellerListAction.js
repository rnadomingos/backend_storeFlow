import axios from 'axios'
import {
  SELLER_LIST_FAIL,
  SELLER_LIST_REQUEST,
  SELLER_LIST_SUCCESS
} from '../constants/sellerConstants'


export const sellerListAction = () => async (dispatch, getState) => {
  try {

    dispatch({ type: SELLER_LIST_REQUEST })

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
      `/seller/list`,
      config
    )

    dispatch({
      type: SELLER_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SELLER_LIST_FAIL,
      payload: error.response.data
    })
  }
}
