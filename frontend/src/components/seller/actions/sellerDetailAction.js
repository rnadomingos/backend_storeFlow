import axios from 'axios'
import { SELLER_DETAIL_FAIL, SELLER_DETAIL_REQUEST, SELLER_DETAIL_SUCCESS } from '../constants/sellerConstants'


export const sellerDetailAction = (id) => async (dispatch, getState) => {
  try {

    dispatch({ type: SELLER_DETAIL_REQUEST })

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
      `http://localhost:3333/sellers/${id}`,
      config
    )

    dispatch({
      type: SELLER_DETAIL_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SELLER_DETAIL_FAIL,
      payload: error.response.data
    })
  }
}