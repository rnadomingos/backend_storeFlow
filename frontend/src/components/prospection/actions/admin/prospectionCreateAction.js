import axios from 'axios'
import {
  CLEAN_ERRORS,
  PROSPECTION_CREATE_FAIL,
  PROSPECTION_CREATE_REQUEST, PROSPECTION_CREATE_SUCCESS
} from '../../constants/prospectionConstants'

export const prospectionCreateAction = (newProspection) => async (dispatch, getState) => {
  try {

    dispatch({ type: PROSPECTION_CREATE_REQUEST })

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
    } = await axios.post(
      `http://localhost:3333/prospection/new`,
      newProspection,
      config
    )

    dispatch({
      type: PROSPECTION_CREATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PROSPECTION_CREATE_FAIL,
      payload: error.response.data
    })
  }
}

export const cleanErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAN_ERRORS
  })
}