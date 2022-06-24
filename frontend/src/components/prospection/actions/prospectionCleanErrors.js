import { CLEAN_ERRORS } from "../constants/prospectionConstants"

export const cleanErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAN_ERRORS
  })
}