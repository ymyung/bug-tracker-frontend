import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

import './ProjectDetails.scss'

const ProjectDescription = ({ currentProject, setCurrentProject, setUpdateList }) => {
    const [editProjectContainer, setEditProjectContainer] = useState('edit-project-container')

    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')

    const { user } = useAuthContext()

    // Open edit project
    const openEdit = () => {
        setEditProjectContainer('edit-project-container edit-project')
        setEditTitle(currentProject.title)
        setEditDescription(currentProject.description)
    }

    // Close edit project
    const closeEdit = () => {
        setEditProjectContainer('edit-project-container')
    }

    // handle project edit 
    const handleProjectEdit = (e) => {
        e.preventDefault()
        
        const handleEdit = async () => {
            try {
                const requestBody = {}
                requestBody.title = editTitle
                requestBody.description = editDescription

                const response = await fetch(`http://localhost:4000/project/${currentProject._id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                    body: JSON.stringify(requestBody)
                })

                const data = await response.json()

                setCurrentProject(prev => ({...prev, title: data.title}))
                setUpdateList(prev => prev + 1)
            } catch (error) {
                throw error
            }
        }

        if (user) {
            handleEdit()
        }
    }

    return (
        <div className='project-details'>
            <div className="project-details-container">
                <div className="project-title">
                    <p className='project-left'>Project Title:</p>
                    <p className='project-right'>{currentProject && currentProject.title}</p>
                </div>
                <div className="project-details-devs">
                    <p className='project-left'># of Assigned Devs:</p>
                    <p className='project-right-numbers'>{currentProject.devs ? currentProject.devs.length : 0}</p>
                </div>
                <div className="project-details-tickets">
                    <p className='project-left'># of Tickets</p>
                    <p className='project-right-numbers'>{currentProject.tickets ? currentProject.tickets.length : 0}</p>
                </div>
                <div className="project-description">
                    <p className='project-left'>Description:</p>
                    <p className='project-right'>{currentProject && currentProject.description}</p>
                </div>
            </div>
            <div className={editProjectContainer}>
                <div onClick={closeEdit} className="project-description-backdrop"></div>
                <form className="edit-project-modal" onSubmit={(e) => handleProjectEdit(e)}>
                    <div>
                        <p>Edit Name:</p>
                        <input className='edit-project-inputs' placeholder='Edit Name' type="text" onChange={(e => setEditTitle(e.target.value))} value={editTitle} />
                    </div>
                    <div>
                        <p>Edit Description:</p>
                        <textarea className='edit-project-inputs' placeholder='Edit Description' name="edit-description" id="edit-description" cols="30" rows="6" onChange={(e) => setEditDescription(e.target.value)} value={editDescription}></textarea>
                    </div>
                    <div className='project-modal-bottom'>
                        <button onClick={closeEdit} className='modal-bottom-buttons' type='submit'>Save Changes</button>
                    </div>
                </form>
            </div>
            <button onClick={openEdit} className='edit-project-button'>Edit Project</button>
        </div>
    )
}

export default ProjectDescription