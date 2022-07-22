import axios from "axios"
import {
  STORE_FLOW_CREATE_FAIL,
  STORE_FLOW_CREATE_REQUEST,
  STORE_FLOW_CREATE_SUCCESS
} from "../constants/storeFlowConstants"

export const storeCreateAction = (storeFlowData) => async (dispatch, getState) => {
  try {

    dispatch({ type: STORE_FLOW_CREATE_REQUEST })

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
      `http://localhost:3333/store-flow/new`,
      storeFlowData,
      config
    )

    dispatch({
      type: STORE_FLOW_CREATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: STORE_FLOW_CREATE_FAIL,
      payload: error.response.data
    })
  }
}
