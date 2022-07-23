import axios from 'axios'
import {
  SERVICE_TYPE_UPDATE_FAIL,
  SERVICE_TYPE_UPDATE_REQUEST,
  SERVICE_TYPE_UPDATE_SUCCESS
} from '../../constants/serviceTypeConstant'


export const serviceTypeUpdateAction = (serviceType) => async (dispatch, getState) => {
  try {
    dispatch({ type: SERVICE_TYPE_UPDATE_REQUEST })

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
      `http://localhost:3333/service-type/update/${serviceType.id}`,
      serviceType,
      config
    )

    dispatch({
      type: SERVICE_TYPE_UPDATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SERVICE_TYPE_UPDATE_FAIL,
      payload: error.response.data
    })
  }
}