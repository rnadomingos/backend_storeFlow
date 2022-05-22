import { CLEAN_ERRORS } from "../constants/storeConstants"



export const cleanErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAN_ERRORS
  })
}