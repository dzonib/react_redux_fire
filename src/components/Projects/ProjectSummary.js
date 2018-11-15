import React from 'react'


const ProjectSummary = ({id, title, content}) => {
    return (
        <>
            <h2>{title}</h2>
			<p className="postedBy">Mr El Stupido</p>
			<p className="date"> 3rd september 1043 </p>
        </>
    )
}

export default ProjectSummary