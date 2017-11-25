import React from 'react'
import ajax from 'superagent'
import Todo from 'components/Todo.jsx'
import EditModal from 'components/EditModal.jsx'

export default class TodoList extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      todos: [],
      edit: null,
    }

    this.fetchData = this.fetchData.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.editItem = this.editItem.bind(this)
    this.hideEdit = this.hideEdit.bind(this)
  }

  componentWillMount() {
		this.fetchData()
  }

  fetchData() {
    ajax.get("http://127.0.0.1:8000/todos/")
      .end((err, res) => {
        if (err) {
          console.log('error', err)
          return
        }
        this.setState({todos: res.body})
      })
  }

  deleteItem(id) {
  	ajax.delete("http://127.0.0.1:8000/todos/" + id + "/")
      .end((err, res) => {
        if (err) {
          console.log('error', err)
          return
        }
        this.fetchData()
      })
  }

  editItem(todo) {
  	this.setState({edit: todo})
  }

  hideEdit() {
  	this.setState({edit: null})
  	this.fetchData()
  }

  render() {
  	let todos = this.state.todos
  	if (!todos && todos.length == 0) {
	    return <p>No data</p>
	  }
	  return (
	  	<div>
		  	{todos.map((todo, idx) => {
			    return <Todo key={idx} todo={todo}
			    					onDelete={this.deleteItem}
			    					onEdit={this.editItem}/>
			  })}
		  	<EditModal todo={this.state.edit} onHide={this.hideEdit}/>
		 </div>
		)
  }
}