import React, { Component } from 'react'
import { StyledDashboard } from '../Styles/Dashboard/StyledDashboard'
import { connect } from 'react-redux'
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import Notifications from './Notifications'
import ProjectList from '../Projects/ProjectList'

class Dashboard extends Component {
	render() {
		const { projects } = this.props
		return (
			<StyledDashboard>
				<div
					style={{
						height: '200px',
						width: '100%'
					}}
				>
					<ProjectList projects={projects} />
				</div>
				<div
					style={{
						height: '200px',
						width: '200px',
						background: 'purple'
					}}
				>
					<Notifications />
				</div>
			</StyledDashboard>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		projects: state.firestore.ordered.projects
	}
}

export default compose(connect(mapStateToProps), firestoreConnect([ { collection: 'projects' } ]))(Dashboard)
