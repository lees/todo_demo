import React from 'react'
import { Link } from 'react-router-dom'
import TodoList from 'components/TodoList.jsx'

// https://react-bootstrap.github.io/components.html
import { PageHeader, Button } from 'react-bootstrap'

export default class IndexScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader>Todo list</PageHeader>
        <Link to='/add'>
          <Button bsStyle="success">Add</Button>
        </Link>
        <br /><br />
        <TodoList/>
      </div>
    )
  }
}