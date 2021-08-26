import {CHECK_TASK, PUSH_TASK, SELECT_LIST} from '../types'
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

    case PUSH_TASK:{
      const tasks = [
        ...state.initialTasks || [],
        {...action.payload, isChecked: false, listId: state.selectedList.id, position:null, id:(Math.random() + 1).toString(36).substring(7)}
        ]
      return { ...state, initialTasks:tasks}
    }

    default:
      return state
  }
}