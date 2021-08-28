// PUSH , REMOVE , CHECKED

import {CHECK_TASK, PUSH_TASK,REMOVE_TASK,EDIT_TASK} from "../types"

export const checkTask = task => dispatch =>
  dispatch({
    type: CHECK_TASK,
    payload: task,
  })


export const pushTask = (task) => dispatch =>
  dispatch({
    type: PUSH_TASK,
    payload: task,
  })

export const removeTask = (task) => dispatch =>
  dispatch({
    type: REMOVE_TASK,
    payload: task,
  })


export const editTask = task => dispatch =>
  dispatch({
    type: EDIT_TASK,
    payload: task,
  })