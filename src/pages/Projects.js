import React, { useState } from 'react'

import ProjectDetails from '../components/ProjectDetails'
import ProjectDevs from '../components/ProjectDevs'
import ProjectTickets from '../components/ProjectTickets'
import "./Projects.scss"

const Projects = () => {
    // bodyRender: Which page to render
    const [bodyRender, setBodyRender] = useState("description")
    const [buttonsTop, setButtonsTop] = useState('buttons-top')

    // button color states
    const [buttonLeft, setButtonLeft] = useState('bottom-buttons-wheat')
    const [buttonMiddle, setButtonMiddle] = useState('bottom-buttons')
    const [buttonRight, setButtonRight] = useState('bottom-buttons')

    // Change what is shown on page: details, devs, tickets
    const changeRender = (type) => {
        setBodyRender(type)
    }

    // Change buttonsTop className for backdrop and modal
    const newProject = () => {
        setButtonsTop('buttons-top project-open')
    }

    // Reset buttonsTop value 
    const closeNewProject = () => {
        setButtonsTop('buttons-top')
    }

    // Button wheat color change
    const wheatLeft = () => {
        setButtonLeft('bottom-buttons-wheat')
        setButtonMiddle('bottom-buttons')
        setButtonRight('bottom-buttons')
    }

    const wheatMiddle = () => {
        setButtonLeft('bottom-buttons')
        setButtonMiddle('bottom-buttons-wheat')
        setButtonRight('bottom-buttons')
    }

    const wheatRight = () => {
        setButtonLeft('bottom-buttons')
        setButtonMiddle('bottom-buttons')
        setButtonRight('bottom-buttons-wheat')
    }

    // Change shown project when clicked
    const projectSubmit = () => {
        return
    }

    return (
        <div className='project'>
            <div className="project-top">
                <div className={buttonsTop}>
                    <div onClick={closeNewProject} className="backdrop"></div>
                    <div className="new-project-modal">
                        <div className="new-project-title">
                            <h3>New Project</h3>
                        </div>
                        <div className="new-project-name">
                            <p>Project Name:</p>
                            <input className='new-project-inputs' placeholder='Project Name' type="text" />
                        </div>
                        <div className="new-project-description">
                            <p>Description:</p>
                            <textarea className='new-project-inputs' placeholder='Description' name="description" id="description" cols="30" rows="6"></textarea>
                        </div>
                        <div className="new-project-button-container">
                            <button onClick={closeNewProject} className="new-project-button">Create</button>
                        </div>
                    </div>
                    <button onClick={newProject} type='button' className="project-top-buttons create-new">New Project</button>
                    <select onChange={projectSubmit} className='project-top-buttons' name="Projects" id="projects">
                        <option value="1" defaultValue> Project 1</option>
                        <option value="2">Project 2</option>
                    </select>
                </div>
                <div className='buttons-bottom'>
                    <button onClick={() => {changeRender("description"); wheatLeft()}} type='button' className={buttonLeft}>Details</button>
                    <button onClick={() => {changeRender("devs"); wheatMiddle()}} type='button' className={buttonMiddle}>Devs</button>
                    <button onClick={() => {changeRender("tickets"); wheatRight()}} type='button' className={buttonRight}>Tickets</button>
                </div>
            </div>
            <div className="project-body">
                {
                    bodyRender === 'description' && <ProjectDetails />
                }
                {
                    bodyRender === 'devs' && <ProjectDevs />
                }
                {
                    bodyRender === 'tickets' && <ProjectTickets />
                }
            </div>
        </div>
    )
}

export default Projects