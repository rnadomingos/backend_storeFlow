import axios from "axios"
import {
  STORE_LIST_SELLERS_FAIL,
  STORE_LIST_SELLERS_REQUEST,
  STORE_LIST_SELLERS_SUCCESS
} from "../constants/storeConstants"

export const storeSellersAction = (storeId) => async (dispatch, getState) => {
  try {

    dispatch({ type: STORE_LIST_SELLERS_REQUEST })

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
      `/stores/list-sellers/${storeId}`,
      config
    )

    dispatch({
      type: STORE_LIST_SELLERS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: STORE_LIST_SELLERS_FAIL,
      payload: error.response.data
    })
  }
}