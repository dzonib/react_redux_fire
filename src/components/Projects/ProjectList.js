import React from 'react'
import { Link } from 'react-router-dom'

import StyledProject from '../Styles/Projects/StyledProject'
import ProjectSummary from './ProjectSummary'

const PrijectList = ({ projects }) => {
	return (
		<StyledProject>
			{projects &&
				projects.map((project) => {
					return (
						<Link to={`/project/${project.id}`} key={project.id}>
							<ProjectSummary  {...project} />
						</Link>
					)
				})}
		</StyledProject>
	)
}

export default PrijectList
