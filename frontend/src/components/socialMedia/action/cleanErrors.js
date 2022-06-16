import { CLEAN_ERRORS } from "../constants/socialMediaConstants"

export const cleanErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAN_ERRORS
  })
}