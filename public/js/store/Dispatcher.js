import { EventEmitter } from 'events'

const Dispatcher = new EventEmitter()
Dispatcher.setMaxListeners(30)

export default Dispatcher
