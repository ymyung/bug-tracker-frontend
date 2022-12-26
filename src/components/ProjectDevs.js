import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './ProjectDevs.scss'

const ProjectDevs = () => {
    const [addTicketContainer, setAddTicketContainer] = useState("add-dev-container")

    const addDev = () => {
        setAddTicketContainer('add-dev-container add-dev-open')
    }

    const closeDev = () => {
        setAddTicketContainer('add-dev-container')
    }

    return (
        <div className='project-devs'>
            <div className="devs-number-container">
                <div className={addTicketContainer}>
                    <div onClick={closeDev} className="add-dev-backdrop"></div>
                    <div className="add-dev-modal"></div>
                    <button onClick={addDev} className="add-dev">Add Developer</button>
                </div>
                <div className="devs-number-middle">
                    <div className="devs-number">Developers: 10</div>
                </div>
                <div className="devs-number-right">
                    <input className='devs-search' type="text" placeholder="Search.." />
                </div>
            </div>
            <div className="devs-container">
                <NavLink exact="true" to="/profile" className="dev-container">
                    <div className="dev-container-top">
                        <div className="devs-name">
                            <p className='devs-left'>Name:</p>
                            <p>Mark</p>
                        </div>
                        <div className="devs-role">
                            <p className='devs-left'>Role:</p>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="dev-container-bottom">
                        <div className="devs-email">
                            <p className="devs-left">Email:</p>
                            <p>123456789@email.com</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/profile" className="dev-container">
                    <div className="dev-container-top">
                        <div className="devs-name">
                            <p className='devs-left'>Name:</p>
                            <p>Mark</p>
                        </div>
                        <div className="devs-role">
                            <p className='devs-left'>Role:</p>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="dev-container-bottom">
                        <div className="devs-email">
                            <p className="devs-left">Email:</p>
                            <p>123456789@email.com</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/profile" className="dev-container">
                    <div className="dev-container-top">
                        <div className="devs-name">
                            <p className='devs-left'>Name:</p>
                            <p>Mark</p>
                        </div>
                        <div className="devs-role">
                            <p className='devs-left'>Role:</p>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="dev-container-bottom">
                        <div className="devs-email">
                            <p className="devs-left">Email:</p>
                            <p>123456789@email.com</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/profile" className="dev-container">
                    <div className="dev-container-top">
                        <div className="devs-name">
                            <p className='devs-left'>Name:</p>
                            <p>Mark</p>
                        </div>
                        <div className="devs-role">
                            <p className='devs-left'>Role:</p>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="dev-container-bottom">
                        <div className="devs-email">
                            <p className="devs-left">Email:</p>
                            <p>123456789@email.com</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/profile" className="dev-container">
                    <div className="dev-container-top">
                        <div className="devs-name">
                            <p className='devs-left'>Name:</p>
                            <p>Mark</p>
                        </div>
                        <div className="devs-role">
                            <p className='devs-left'>Role:</p>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="dev-container-bottom">
                        <div className="devs-email">
                            <p className="devs-left">Email:</p>
                            <p>123456789@email.com</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/profile" className="dev-container">
                    <div className="dev-container-top">
                        <div className="devs-name">
                            <p className='devs-left'>Name:</p>
                            <p>Mark</p>
                        </div>
                        <div className="devs-role">
                            <p className='devs-left'>Role:</p>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="dev-container-bottom">
                        <div className="devs-email">
                            <p className="devs-left">Email:</p>
                            <p>123456789@email.com</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/profile" className="dev-container">
                    <div className="dev-container-top">
                        <div className="devs-name">
                            <p className='devs-left'>Name:</p>
                            <p>Mark</p>
                        </div>
                        <div className="devs-role">
                            <p className='devs-left'>Role:</p>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="dev-container-bottom">
                        <div className="devs-email">
                            <p className="devs-left">Email:</p>
                            <p>123456789@email.com</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/profile" className="dev-container">
                    <div className="dev-container-top">
                        <div className="devs-name">
                            <p className='devs-left'>Name:</p>
                            <p>Mark</p>
                        </div>
                        <div className="devs-role">
                            <p className='devs-left'>Role:</p>
                            <p>Developer</p>
                        </div>
                    </div>
                    <div className="dev-container-bottom">
                        <div className="devs-email">
                            <p className="devs-left">Email:</p>
                            <p>123456789@email.com</p>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="devs-buttons">
                <button type='button' className="dev-button dev-previous">Prev</button>
                <p>Page 1</p>
                <button type='button' className="dev-button dev-next">Next</button>
            </div>
        </div>
    )
}

export default ProjectDevs