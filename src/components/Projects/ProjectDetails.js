import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import StyledProjectDetails from '../Styles/Projects/StyledProjectDetails';

const ProectDetails = (props) => {
	const { project } = props
	console.log(project)

	if (project) {
		return <StyledProjectDetails>
			<h1>{project.title}</h1>
			<p>{project.content}</p>
			<hr/>
			<p className="posted-by">Posted by: {project.authorFirstName} {project.authorLastName}</p>
			<div>2nd seprember 2001</div>
		</StyledProjectDetails>
	} else {
		return (
			<StyledProjectDetails>
				Loading project...
			</StyledProjectDetails>
		)
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
