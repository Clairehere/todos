// PUSH , REMOVE , CHECKED

import {CHECK_TASK} from "../types"

export const checkTask = task => dispatch =>
  dispatch({
    type: CHECK_TASK,
    payload: task,
  })