import axios from 'axios'
import {
  SELLER_UPDATE_FAIL,
  SELLER_UPDATE_REQUEST,
  SELLER_UPDATE_SUCCESS
} from "../../constants/sellerConstants"


export const sellerUpdateAction = (seller) => async (dispatch, getState) => {
  try {

    dispatch({ type: SELLER_UPDATE_REQUEST })

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
      `http://localhost:3333/seller/update/${seller.id}`,
      seller,
      config
    )

    dispatch({
      type: SELLER_UPDATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SELLER_UPDATE_FAIL,
      payload: error.response.data
    })
  }
}