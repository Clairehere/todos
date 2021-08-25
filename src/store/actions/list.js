import {
  SELECT_LIST
} from '../types'


export const selectList = list => dispatch =>
  dispatch({
    type: SELECT_LIST,
    payload: list,
  })

