import React, { Component } from 'react'
import StyledForm from '../Styles/Auth/StyledForm'

class SignUp extends Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: ''
	}

	handleChange = (value, e) => {
		this.setState({ [value]: e.target.value })
	}

	handleSubmit = (e) => {
		const { email, password, firstName, lastName } = this.state

		e.preventDefault()

		const user = {
			email,
			password,
			firstName,
			lastName
		}

		console.log(user)
	}

	render() {
		return (
			<StyledForm onSubmit={this.handleSubmit}>
				<h1>Sign up</h1>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					value={this.state.email}
					onChange={(e) => this.handleChange('email', e)}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={this.state.password}
					onChange={(e) => this.handleChange('password', e)}
				/>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					id="firstName"
					value={this.state.firstName}
					onChange={(e) => this.handleChange('firstName', e)}
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					id="lastName"
					value={this.state.lastName}
					onChange={(e) => this.handleChange('lastName', e)}
				/>
				<button type="submit">Sign up</button>
			</StyledForm>
		)
	}
}

export default SignUp
