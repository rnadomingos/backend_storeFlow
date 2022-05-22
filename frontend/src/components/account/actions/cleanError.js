import { CLEAN_ERRORS } from "../constants/accountConstants"


export const cleanError = () => async (dispatch) => {
  dispatch({
    type: CLEAN_ERRORS
  })
}