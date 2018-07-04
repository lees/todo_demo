import { EventEmitter } from 'events'

import Dispatcher from 'Dispatcher.js'

class TodoStore extends EventEmitter {
    constructor() {
        super()
        this.todos = []

        Dispatcher.addListener('DELETE_TODO', this.delete.bind(this))
        Dispatcher.addListener('REPLACE_TODOS', this.replace_all.bind(this))
        Dispatcher.addListener('REPLACE_TODO', this.replace.bind(this))

        this.get = this.get.bind(this)
    }

    get() {
        return this.todos
    }

    delete(action) {
        this.todos = this.todos.filter(todo => todo.id !== action.id)
        this.emit('CHANGE')
    }

    replace_all(action) {
        this.todos = action.items
        this.emit('CHANGE')
    }

    replace(action) {
        this.todos = this.todos.map(todo =>
            (action.item.id === todo.id) ? action.item : todo
        )
        this.emit('CHANGE')
    }
	
}

export default new TodoStore()