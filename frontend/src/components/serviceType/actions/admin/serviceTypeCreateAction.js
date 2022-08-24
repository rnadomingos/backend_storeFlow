import axios from 'axios'
import {
  SERVICE_TYPE_CREATE_FAIL,
  SERVICE_TYPE_CREATE_REQUEST,
  SERVICE_TYPE_CREATE_SUCCESS
} from "../../constants/serviceTypeConstant"


export const serviceTypeCreateAction = (newServiceType) => async (dispatch, getState) => {
  try {

    dispatch({ type: SERVICE_TYPE_CREATE_REQUEST })

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
      '/service-types',
      newServiceType,
      config
    )

    dispatch({
      type: SERVICE_TYPE_CREATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SERVICE_TYPE_CREATE_FAIL,
      payload: error.response.data
    })
  }
}
