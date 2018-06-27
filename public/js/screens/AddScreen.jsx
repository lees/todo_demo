import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import {addTodo} from 'store/actions'

import { PageHeader, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class AddScreen extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
    	name: "",
    	note: "",
    	redirect: false,
    }
  }

  onSubmit() {
    this.props.onSubmit({
        name: this.state.name,
        note: this.state.note
    },
    () => this.setState({redirect: true}))
  }

  render() {
  	if (this.state.redirect) {
  		return <Redirect to="/" />
  	}
  	return (
  		<div>
  			<PageHeader>Add todo</PageHeader>
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
				<Button bsStyle="success" disabled={false}
					onClick={this.onSubmit.bind(this)}>
		      Add
		    </Button>
			</div>
  	)
  }
}

export default connect(
    null,
    (dispatch) => ({
        onSubmit: (item, onOk) => dispatch(addTodo(item, onOk)),
    })
)(AddScreen)