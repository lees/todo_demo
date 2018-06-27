import ajax from 'superagent'

export function fetchTodos() {
	return (dispatch) => {
		ajax.get("http://127.0.0.1:8000/todos/")
		.end((err, res) => {
			if (err) {
				console.log('error', err)
				return
			}
			dispatch({
				type: 'REPLACE_TODOS',
				items: res.body,
			})
		})
	}
}

export function deleteTodo(id) {
	return (dispatch) => {
		ajax.delete("http://127.0.0.1:8000/todos/" + id + "/")
		.end((err, res) => {
			if (err) {
				console.log('error', err)
				return
			}
			dispatch({
				type: 'DELETE_TODO',
				id: id,
			})
		})
	}
}

export function addTodo(item, onOk) {
	return (dispatch) => {
		ajax.post("http://127.0.0.1:8000/todos/")
	  		.send(item)
			.end((err, res) => {
				if (err) {
					console.log('error', err)
					return
				}
				dispatch({
					type: 'ADD_TODO',
					item: res.body,
				})
				if (onOk) {
					onOk(res)
				}

			})
	}
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
