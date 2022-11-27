import React, { useEffect, useState } from 'react'

import ProjectDetails from '../components/ProjectDetails'
import ProjectDevs from '../components/ProjectDevs'
import ProjectTickets from '../components/ProjectTickets'
import "./Projects.scss"

const Projects = () => {
    // bodyRender: Which page to render
    // windowWidth: Finds window width
    const [bodyRender, setBodyRender] = useState("description")
    const [windowWidth, detectW] = useState(window.innerWidth)

    // Function that finds  window with
    const detectSize = () => {
        detectW(window.innerWidth)
    }

    // Dynamically detect window width
    useEffect(() => {
        window.addEventListener("resize", detectSize)

        return() => {
            window.removeEventListener("resize", detectSize)
        }
    }, [])

    const changeRender = (type) => {
        setBodyRender(type)
    }

    return (
        <div className='project'>
            <div className="project-top">
                <div className="buttons-top">
                    <div className="backdrop"></div>
                    <button type='button' className="project-top-buttons create-new">New Project</button>
                    <select className='project-top-buttons' name="Projects" id="projects">
                        <option value="1" defaultValue> Project 1</option>
                        <option value="2">Project 2</option>
                    </select>
                </div>
                <div className='buttons-bottom'>
                    <button onClick={() => changeRender("description")} type='button' className="bottom-buttons">Details</button>
                    <button onClick={() => changeRender("devs")} type='button' className="bottom-buttons">Devs</button>
                    <button onClick={() => changeRender("tickets")} type='button' className="bottom-buttons">Tickets</button>
                </div>
            </div>
            <div className="project-body">
                {/* Mobile View */}
                {
                    bodyRender === 'description' && <ProjectDetails />
                }
                {
                    bodyRender === 'devs' && <ProjectDevs />
                }
                {
                    bodyRender === 'tickets' && <ProjectTickets />
                }
                {/* Desktop View */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {windowWidth}
            </div>
        </div>
    )
}

export default Projects