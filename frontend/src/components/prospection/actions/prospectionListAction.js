import axios from "axios"
import { PROSPECTION_LIST_FAIL, PROSPECTION_LIST_REQUEST, PROSPECTION_LIST_SUCCESS } from "../constants/prospectionConstants"



export const prospectionListAction = (page, keyword = '') => async (dispatch, getState) => {
  try {

    dispatch({ type: PROSPECTION_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Berear ${userInfo.token}`
      }
    }
const url = `/prospections?page=${page}&keyword=${keyword}`
console.log(url);
    const { data } = await axios.get(
      url,
      config
    )

    dispatch({
      type: PROSPECTION_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PROSPECTION_LIST_FAIL,
      payload: error.response.data
    })
  }
}