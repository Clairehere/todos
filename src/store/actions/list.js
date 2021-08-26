import {
  EDIT_LIST,
  SELECT_LIST
} from '../types'


export const selectList = list => dispatch =>
  dispatch({
    type: SELECT_LIST,
    payload: list,
  })


export const editList = list => dispatch =>
  dispatch({
    type: EDIT_LIST,
    payload: list,
  })