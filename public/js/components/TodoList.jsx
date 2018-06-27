import React from 'react'
import { connect } from 'react-redux'
import Todo from 'components/Todo.jsx'
import EditModal from 'components/EditModal.jsx'
import {fetchTodos, deleteTodo, edit, hideEdit, submit} from 'store/actions'

class TodoList extends React.Component {

  componentWillMount() {
        this.props.fetchData()
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
	    					onDelete={this.props.deleteTodo}
	    					onEdit={this.props.editItem}/>
			  })}
		  	<EditModal todo={this.props.edit}
                onSubmit={this.props.submit}
                onHide={this.props.hideEdit}/>
		 </div>
		)
  }
}


export default connect(
    (state) => ({
        todos: state.todos,
        edit: state.edit,
    }),
    (dispatch) => ({
        fetchData: () => dispatch(fetchTodos()),
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        editItem: (item) => dispatch(edit(item)),
        hideEdit: () => dispatch(hideEdit()),
        submit: (item) => dispatch(submit(item)),
    })
)(TodoList)
