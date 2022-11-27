import React from 'react'

import './ProjectDetails.scss'

const ProjectDescription = () => {
  return (
    <div className='project-details'>
        <div className="project-title">
            <p className='project-left'>Project Title:</p>
            <p className='project-right'>Project 1</p>
        </div>
        <div className="project-details-devs">
            <p className='project-left'># of Assigned Devs:</p>
            <p className='project-right-numbers'>10</p>
        </div>
        <div className="project-details-tickets">
            <p className='project-left'># of Tickets</p>
            <p className='project-right-numbers'>20</p>
        </div>
        <div className="project-description">
            <p className='project-left'>Description:</p>
            <p className='project-right'>The first project description, random words</p>
        </div>
    </div>
  )
}

export default ProjectDescription