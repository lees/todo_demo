import React from 'react'

import { Well, Glyphicon, Button, Row, Col } from 'react-bootstrap'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }

    this.onClickToggle = this.onClickToggle.bind(this)
  }

  onClickToggle() {
    this.setState({open: !this.state.open})
  }

  render() {
    let todo = this.props.todo
    if (!todo) {
      return null
    }
    return (
      <Well bsSize="small">
        <Row>
          <Col md={12}>
            <a onClick={this.onClickToggle}>
              { this.state.open ?
                <Glyphicon glyph="menu-down" />
                :
                <Glyphicon glyph="menu-right" />
              }
            </a>
            &nbsp;
            <strong style={{fontSize:'20px'}}>{todo.name}</strong>
          </Col>
        </Row>
        
        { todo.note && this.state.open &&
          <Row>
            <br />
            <Col md={12}>
              <p>
                {todo.note}
              </p>
            </Col>
          </Row>
        }
      </Well>
    )
  }
}