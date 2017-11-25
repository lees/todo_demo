import React from 'react'

import { Well, Glyphicon, Button, Row, Col } from 'react-bootstrap'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }

    this.onClickToggle = this.onClickToggle.bind(this)
    this.onClickRemove = this.onClickRemove.bind(this)
    this.onClickEdit = this.onClickEdit.bind(this)
  }

  onClickToggle() {
    this.setState({open: !this.state.open})
  }

  onClickRemove() {
    this.props.onDelete(this.props.todo.id)
  }

  onClickEdit() {
    this.props.onEdit(this.props.todo)
  }

  render() {
    let todo = this.props.todo
    if (!todo) {
      return null
    }
    return (
      <Well bsSize="small">
        <Row>
          <Col md={11}>
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
          <Col md={1}>
            <a onClick={this.onClickEdit}>
              <Glyphicon style={{fontSize:'1.2em'}} glyph="pencil" />
            </a>
            &nbsp;
            <a onClick={this.onClickRemove}>
              <Glyphicon style={{fontSize:'1.2em'}} glyph="remove" />
            </a>
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