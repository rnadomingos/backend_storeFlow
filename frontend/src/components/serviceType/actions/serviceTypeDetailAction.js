import axios from "axios"
import {
  SERVICE_TYPE_DETAIL_FAIL,
  SERVICE_TYPE_DETAIL_REQUEST,
  SERVICE_TYPE_DETAIL_SUCCESS
} from "../constants/serviceTypeConstant"



export const serviceTypeDetailActions = (id) => async (dispatch, getState) => {
  try {

    dispatch({ type: SERVICE_TYPE_DETAIL_REQUEST })

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
      `/service-types/${id}`,
      config
    )

    dispatch({
      type: SERVICE_TYPE_DETAIL_SUCCESS,
      payload: data
    })


  } catch (error) {
    dispatch({
      type: SERVICE_TYPE_DETAIL_FAIL,
      payload: error.response.data
    })
  }
}