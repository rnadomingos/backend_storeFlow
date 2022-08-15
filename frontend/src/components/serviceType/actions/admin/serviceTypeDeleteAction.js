import axios from "axios"
import { SERVICE_TYPE_DELETE_FAIL, SERVICE_TYPE_DELETE_REQUEST, SERVICE_TYPE_DELETE_SUCCESS } from "../../constants/serviceTypeConstant"




export const serviceTypeDeleteAction = (id) => async (dispatch, getState) => {
  try {

    dispatch({
      type: SERVICE_TYPE_DELETE_REQUEST
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const {
      data
    } = await axios.delete(
      `/service-types/${id}`,
      config
    )

    dispatch({
      type: SERVICE_TYPE_DELETE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SERVICE_TYPE_DELETE_FAIL,
      payload: error.response.data
    })
  }
}