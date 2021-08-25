import {SELECT_LIST} from '../types'
import {lists, tasks} from "../../mocks/_objects"


const initialState = { initialLists: lists, initialTasks: tasks }

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LIST:
      return { ...state, selectedList: action.payload }
    default:
      return state
  }
}