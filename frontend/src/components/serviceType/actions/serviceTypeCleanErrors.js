import { CLEAN_ERRORS } from "../constants/serviceTypeConstant"



export const cleanErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAN_ERRORS
  })
}