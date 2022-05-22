import axios from 'axios'
import {
  SELLER_CREATE_FAIL,
  SELLER_CREATE_REQUEST,
  SELLER_CREATE_SUCCESS
} from "../../constants/sellerConstants"


export const sellerCreateAction = (newSeller) => async (dispatch, getState) => {
  try {

    dispatch({ type: SELLER_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.post(
      `http://localhost:3333/seller/new`,
      newSeller,
      config
    )

    dispatch({
      type: SELLER_CREATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SELLER_CREATE_FAIL,
      payload: error.response.data
    })
  }
}