import axios from 'axios'
import {
  STORE_UPDATE_FAIL,
  STORE_UPDATE_REQUEST,
  STORE_UPDATE_SUCCESS
} from '../../constants/storeConstants'


export const storeUpdateAction = (store) => async (dispatch, getState) => {
  try {

    dispatch({ type: STORE_UPDATE_REQUEST })

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
      `http://localhost:3333/stores/update/${store.id}`,
      store,
      config
    )

    dispatch({
      type: STORE_UPDATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: STORE_UPDATE_FAIL,
      payload: error.response.data
    })
  }
}