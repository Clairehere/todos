import {CHECK_TASK, SELECT_LIST} from '../types'
import {lists, tasks} from "../../mocks/_objects"


const initialState = { initialLists: lists, initialTasks: tasks, selectedList:lists[0] }

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LIST:
      return { ...state, selectedList: action.payload }

    case CHECK_TASK:{
      let checked = state.initialTasks
      let taskIndex = checked.findIndex(t => t.id === action.payload.id);
      checked[taskIndex].isChecked = !checked[taskIndex].isChecked
      return { ...state, initialTasks: checked}
    }

    default:
      return state
  }
}