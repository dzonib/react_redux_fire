import React from 'react'

import StyledProject from '../Styles/Projects/StyledProject'
import ProjectSummary from './ProjectSummary';

const PrijectList = ({projects}) => {

	return (
		<StyledProject>
			{
				projects &&
				projects.map((project) => {
					return <ProjectSummary key={project.id} {...project}/>
				})
			}
		</StyledProject>
	)
}

export default PrijectList
