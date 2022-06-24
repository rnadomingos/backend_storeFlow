import {
  CLEAN_ERRORS
} from '../constants/segmentConstants'

export const cleanErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAN_ERRORS
  })
}