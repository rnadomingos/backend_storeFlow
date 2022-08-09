import axios from "axios"
import { 
  SELLER_DELETE_FAIL, 
  SELLER_DELETE_REQUEST, 
  SELLER_DELETE_SUCCESS 
} from "../../constants/sellerConstants"




export const sellerDeleteAction = (id) => async (dispatch, getState) => {
  try {

    dispatch({
      type: SELLER_DELETE_REQUEST
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
      `/sellers/${id}`,
      config
    )

    dispatch({
      type: SELLER_DELETE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SELLER_DELETE_FAIL,
      payload: error.response.data
    })
  }
}