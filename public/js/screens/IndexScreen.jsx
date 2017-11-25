import React from 'react'
import ajax from 'superagent'

import Todo from 'components/Todo.jsx'

// https://react-bootstrap.github.io/components.html
import { PageHeader } from 'react-bootstrap'


export default class IndexScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
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

  render() {
    return (
      <div>
        <PageHeader>Todos list</PageHeader>
        {this.state.todos.map((todo, idx) => {
          return <Todo key={idx} todo={todo} />
        })}
      </div>
    )
  }
}