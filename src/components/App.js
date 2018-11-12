import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Header from './Layout/Header'
import GlobalStyles from './Styles/GlobalStyles/GlobalStyles'
import { theme } from './Styles/GlobalStyles/Theme'
import Dashboard from './Dashboard/Dashboard'
import ProjectDetails from './Projects/ProjectDetails'
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import CreateProject from './Projects/CreateProject';


class App extends Component {
	render() {
		return (
			<Router>
				<ThemeProvider theme={theme}>
					<>
						<Header />
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route path="/project/:id" component={ProjectDetails} />
							<Route path="/signin" component={SignIn} />
							<Route path="/signup" component={SignUp} />
							<Route path="/create" component={CreateProject} />
						</Switch>
						<GlobalStyles />
					</>
				</ThemeProvider>
			</Router>
		)
	}
}

export default App
