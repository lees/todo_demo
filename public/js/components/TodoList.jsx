import React from 'react'
import Todo from 'components/Todo.jsx'
import EditModal from 'components/EditModal.jsx'
import {fetchTodos, deleteTodo, edit, hideEdit, submit} from 'store/actions'
import TodoStore from 'store/TodoStore.js'

export default class TodoList extends React.Component {

  componentWillMount() {
      fetchTodos()
  }

  render() {
  	let todos = this.props.todos
  	if (!todos && todos.length == 0) {
	    return <p>No data</p>
	  }
	  return (
	  	<div>
		  	{todos.map((todo, idx) => {
			    return <Todo 
                            key={idx} 
                            todo={todo}
	    					onDelete={deleteTodo}
	    					onEdit={editItem}/>
			  })}
		  	<EditModal todo={edit}
                onSubmit={submit}
                onHide={hideEdit}/>
		 </div>
		)
  }
}
