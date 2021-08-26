// PUSH , REMOVE , CHECKED

import {CHECK_TASK, PUSH_TASK} from "../types"

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