import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProectDetails = (props) => {
	const { project } = props

	if (project) {
		return <div>blbalba id is {props.match.params.id}</div>
	}
}

const mapStateToProps = (state, props) => {
	const id = props.match.params.id
	const projects = state.firestore.data.projects
	const project = projects ? projects[id] : null
	return {
		project
	}
}

export default compose(connect(mapStateToProps), firestoreConnect([ { collection: 'projects' } ]))(ProectDetails)
