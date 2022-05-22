import { CLEAN_ERRORS } from "../../store/constants/storeConstants"


export const cleanErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAN_ERRORS
  })
}