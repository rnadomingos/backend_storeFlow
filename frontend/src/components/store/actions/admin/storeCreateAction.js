import axios from 'axios'
import {
  STORE_CREATE_REQUEST,
  STORE_CREATE_SUCCESS,
  STORE_CREATE_FAIL,
  CLEAN_ERRORS,
} from '../../constants/storeConstants'


export const storeCreateAction = (storeData) => async (dispatch, getState) => {
  try {

    dispatch({ type: STORE_CREATE_REQUEST })

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
      `http://localhost:3333/stores/new`,
      storeData,
      config
    )

    dispatch({
      type: STORE_CREATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: STORE_CREATE_FAIL,
      payload: error.response.data
    })
  }
}

// Clean Errors
export const cleanErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAN_ERRORS
  })
}