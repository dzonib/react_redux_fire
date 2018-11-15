import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../redux/actions/projectActions'

import StyledForm from '../Styles/Auth/StyledForm'

class CreateProject extends Component {
	state = {
		title: '',
		content: ''
	}

	handleChange = (value, e) => {
		this.setState({ [value]: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.props.createProject(this.state)
	}

	render() {
		console.log(this.props)
		return (
			<StyledForm onSubmit={this.handleSubmit}>
				<h1>Create new project</h1>
				<label htmlFor="title">Project Title</label>
				<input
					type="text"
					id="title"
					value={this.state.title}
					onChange={(e) => this.handleChange('title', e)}
				/>
				<label htmlFor="content">Project Content</label>
				<textarea value={this.state.content} onChange={(e) => this.handleChange('content', e)} />
				<button type="submit">Create</button>
			</StyledForm>
		)
	}
}

export default connect(null, { createProject })(CreateProject)
