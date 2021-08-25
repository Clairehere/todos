import {CHECK_TASK, SELECT_LIST} from '../types'
import {lists, tasks} from "../../mocks/_objects"


const initialState = { initialLists: lists, initialTasks: tasks, selectedList:lists[0] }

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LIST:
      return { ...state, selectedList: action.payload }

    case CHECK_TASK:{
      let taskIndex = state.initialTasks.findIndex(t => t.id === action.payload.id);
      state.initialTasks[taskIndex].isChecked = !state.initialTasks[taskIndex].isChecked
      return { ...state, initialTasks: state.initialTasks }
    }

    default:
      return state
  }
}