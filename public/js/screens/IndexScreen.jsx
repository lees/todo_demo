import React from 'react'

// https://react-bootstrap.github.io/components.html
import { PageHeader } from 'react-bootstrap'

export default class IndexScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader>Hello world</PageHeader>
        <p>Hello!</p>
      </div>
    )
  }
}