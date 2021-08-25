import {FETCH_INITIAL_LIST} from '../types'
import {lists, tasks} from "../../mocks/_objects"


const initialState = { initialLists: lists, initialTasks: tasks }

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INITIAL_LIST:
      return { ...state, initialList: action.payload }
    default:
      return state
  }
}