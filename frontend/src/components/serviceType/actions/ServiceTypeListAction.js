import axios from 'axios'
import { SERVICE_TYPE_LIST_FAIL, SERVICE_TYPE_LIST_REQUEST, SERVICE_TYPE_LIST_SUCCESS } from '../constants/serviceTypeConstant'


export const serviceTypeListAction = () => async (dispatch, getState) => {
  try {

    dispatch({ type: SERVICE_TYPE_LIST_REQUEST })

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
      `http://localhost:3333/service-type/list`,
      config
    )

    dispatch({
      type: SERVICE_TYPE_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SERVICE_TYPE_LIST_FAIL,
      payload: error.response.data
    })
  }
}
