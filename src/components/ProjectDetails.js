import React, { useState } from 'react'

import './ProjectDetails.scss'

const ProjectDescription = () => {
    const [editProjectContainer, setEditProjectContainer] = useState('edit-project-container')

    // Open edit project
    const openEdit = () => {
        setEditProjectContainer('edit-project-container edit-project')
    }

    // Close edit project
    const closeEdit = () => {
        setEditProjectContainer('edit-project-container')
    }

    return (
        <div className='project-details'>
            <div className="project-details-container">
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
            <div className={editProjectContainer}>
                <div onClick={closeEdit} className="project-description-backdrop"></div>
                <div className="edit-project-modal">
                    <div>
                        <p>Edit Name:</p>
                        <input className='edit-project-inputs' placeholder='Edit Name' type="text" />
                    </div>
                    <div>
                        <p>Edit Description:</p>
                        <textarea className='edit-project-inputs' placeholder='Edit Description' name="edit-description" id="edit-description" cols="30" rows="6"></textarea>
                    </div>
                    <div className='project-modal-bottom'>
                        {/* <button className='modal-bottom-buttons' type='button'>Add Ticket</button> */}
                        {/* <button className='modal-bottom-buttons' type='button'>Add Developers</button> */}
                        <button onClick={closeEdit} className='modal-bottom-buttons' type='button'>Save Changes</button>
                    </div>
                </div>
                <button onClick={openEdit} className='edit-project-button'>Edit Project</button>
            </div>
        </div>
    )
}

export default ProjectDescription