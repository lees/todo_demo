import React from 'react'
import ajax from 'superagent'
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

export default class EditModal extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      id: props.todo && props.todo.id,
      name: props.todo && props.todo.name,
      note: props.todo && props.todo.note,
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
  	let newId = nextProps.todo && nextProps.todo.id
  	if (newId != this.state.id) {
  		this.setState({
  			id: newId,
  			name: nextProps.todo && nextProps.todo.name,
  			note: nextProps.todo && nextProps.todo.note,
  		})
  	} 
  }

  onSubmit() {
    this.props.onSubmit(this.state)
  }

  render() {
  	if (!this.state.id) {
  		return null
  	}
  	return (
			<Modal {...this.props} show={true} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Edit todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId='name_control'>
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text"
              value={this.state.name}
              onChange={(ev) => {this.setState({name: ev.target.value})}}/>
          </FormGroup>
          <FormGroup controlId='note_control'>
            <ControlLabel>Note</ControlLabel>
            <FormControl componentClass="textarea"
              value={this.state.note}
              rows="10"
              onChange={(ev) => {this.setState({note: ev.target.value})}}/>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" disabled={false}
            onClick={this.onSubmit.bind(this)}>
            Edit
          </Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  	)
  }
}