import Dispatcher from 'Dispatcher.js'
import ajax from 'superagent'

export function fetchTodos() {
	ajax.get("http://127.0.0.1:8000/todos/")
		.end((err, res) => {
			if (err) {
				console.log('error', err)
				return
			}
			Dispatcher.emit('REPLACE_TODOS', {
				items: res.body,
			})
		})
}

export function deleteTodo(id) {
	ajax.delete("http://127.0.0.1:8000/todos/" + id + "/")
		.end((err, res) => {
			if (err) {
				console.log('error', err)
				return
			}
			Dispatcher.emit('DELETE_TODO', {id})
		})
}

export function addTodo(item, onOk) {
	ajax.post("http://127.0.0.1:8000/todos/")
  		.send(item)
		.end((err, res) => {
			if (err) {
				console.log('error', err)
				return
			}
			Dispatcher.emit('ADD_TODO', {item: res.body})
		})
}

export function edit(item) {
	return {
		type: 'EDIT',
		item: item,
	}
}

export function submit(item) {
	return (dispatch) => {
		ajax.put("http://127.0.0.1:8000/todos/"+item.id+"/")
	    	.send({
	    		name: item.name,
	        	note: item.note
	        })
	        .end((err, res) => {
        		if (err) {
          			console.log('error', err)
          			return
		        }
			dispatch({type: 'REPLACE_TODO', item: res.body})
			dispatch({type: 'HIDE_EDIT'})
		    })
	}
}

export function hideEdit(item) {
	return (dispatch) => {
		dispatch({
			type: 'HIDE_EDIT'
		})
	}
}
