import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  switch (action.type) {
    // case 'ADD_TODO':
    //   return [
    //     ...state,
    //     {
    //       id: action.id,
    //       text: action.text,
    //       completed: false
    //     }
    //   ]
    case 'DELETE_TODO':
        return state.filter(todo =>
            todo.id !== action.id)
    case 'REPLACE_TODOS':
        return action.items
    case 'REPLACE_TODO':
        return state.map(todo =>
            (action.item.id === todo.id) ? action.item : todo
        )
    default:
        return state
  }
}

const edit = (state = null, action) => {
  switch (action.type) {
    case 'EDIT':
      return action.item
    case 'HIDE_EDIT':
        return null
    default:
        return state
  }
}

export default combineReducers({
    todos,
    edit
})