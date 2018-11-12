import React, { Component } from 'react'
import StyledForm from '../Styles/Auth/StyledForm'

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	}

	handleChange = (value, e) => {
		this.setState({ [value]: e.target.value })
	}

	handleSubmit = (e) => {
		const { email, password } = this.state

		e.preventDefault()

		const user = {
			email,
			password
		}

		console.log(user)
	}

	render() {
		return (
			<StyledForm onSubmit={this.handleSubmit}>
				<h1>Sign In</h1>
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
				<button type="submit">Sign up</button>
			</StyledForm>
		)
	}
}

export default SignIn
