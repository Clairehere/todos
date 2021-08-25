import {
  SELECT_LIST
} from '../types'


export const selectlist = list => dispatch =>
  dispatch({
    type: SELECT_LIST,
    payload: list,
  })

