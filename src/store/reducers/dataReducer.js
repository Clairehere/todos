import {CHECK_TASK, EDIT_LIST, PUSH_TASK, SELECT_LIST, REMOVE_TASK,EDIT_TASK} from '../types'
import {lists, tasks} from "../../mocks/_objects"


const initialState = {initialLists: lists, initialTasks: tasks, selectedList: lists[0]}

export default (state = initialState, action) => {
  switch (action.type) {
    //LIST
    case SELECT_LIST:
      return {...state, selectedList: action.payload}
    case EDIT_LIST:
      return {...state, initialLists: [action.payload], selectedList: action.payload}

    // TASK
    case CHECK_TASK: {
      let checked = state.initialTasks
      let taskIndex = checked.findIndex(t => t.id === action.payload.id);
      checked[taskIndex].isChecked = !checked[taskIndex].isChecked
      return {...state, initialTasks: checked}
    }
    case PUSH_TASK: {
      const tasks = [
        ...state.initialTasks || [],
        {
          ...action.payload,
          isChecked: false,
          listId: state.selectedList.id,
          position: null,
          id: (Math.random() + 1).toString(36).substring(7)
        }
      ]
      return {...state, initialTasks: tasks}
    }

    case REMOVE_TASK : {
      let filtered = state.initialTasks
      return {...state, initialTasks:filtered.filter(task => task.id !== action.payload.id)}
    }
    case EDIT_TASK : {
      let edited = state.initialTasks
      let taskIndex = edited.findIndex(t => t.id === action.payload.id)
      edited[taskIndex] = action.payload
      return {...state, initialTasks: edited}
    }

    default:
      return state
  }
}