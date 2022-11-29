import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './ProjectTickets.scss'

const ProjectTickets = () => {
    const [newTicketContainer, setNewTicketContainer] = useState('new-ticket-container')

    const openNewTicket = () => {
        setNewTicketContainer('new-ticket-container new-ticket-open')
    }

    const closeNewTicket = () => {
        setNewTicketContainer('new-ticket-container')
    }

    return (
        <div className='project-tickets'>
            <div className='tickets-title-container'>
                <div className={newTicketContainer}>
                    <div onClick={closeNewTicket} className="new-ticket-backdrop"></div>
                    <div className="new-ticket-modal">
                        <div className="new-ticket-title">
                            <p>Title: </p>
                            <input className='new-ticket-input' placeholder='Title' type="text" />
                        </div>
                        <div className="new-ticket-description">
                            <p>Description: </p>
                            <textarea className='new-ticket-input' placeholder='Edit Description' name="edit-description" id="edit-description" cols="30" rows="4" />
                        </div>
                        <div className="new-ticket-priority">
                            <p>Priority: </p>
                            <select name="new-ticket-priority" id="new-ticket-priority">
                                <option value="" defaultValue selected disabled>Select One</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Critical">Critical</option>
                            </select>
                        </div>
                        <div className="new-ticket-type">
                            <p>Type: </p>
                            <select name="new-ticket-type" id="new-ticket-type">
                                <option value="" defaultValue selected disabled>Select One</option>
                                <option value="Bug">Bug</option>
                                <option value="UI">UI</option>
                                <option value="Performance">Performance</option>
                            </select>
                        </div>
                        <div className="new-ticket-dev">
                            <p>Assigned Developer: </p>
                            <select name="new-ticket-dev" id="new-ticket-dev">
                                <option value="" defaultValue selected disabled>Select One</option>
                                <option value="Dev 1">Dev 1</option>
                            </select>
                        </div>
                        <div className="new-ticket-date">
                            <div>
                                <p>Due Date: </p>
                                <input type="date" />
                            </div>
                            <button className='new-ticket-save' type='button'>Save Changes</button>
                        </div>
                    </div>
                    <button onClick={openNewTicket} className="new-ticket">Add Ticket</button>
                </div>
                <div className="tickets-number-container">
                    <div className="tickets-number">20 Tickets</div>
                </div>
                <div className="tickets-title-right">
                    <input className='tickets-search' type="text" placeholder="Search.." />
                </div>
            </div>
            <div className="tickets-containers">
                <NavLink exact="true" to="/ticket" className="tickets-container">
                    <div className="tickets-container-top">
                        <div className="tickets-name">
                            <p className='tickets-left'>Ticket Name:</p>
                            <p>Ticket</p>
                        </div>
                        <div className="tickets-role">
                            <p className='tickets-left'>Dev:</p>
                            <p>Mark</p>
                        </div>
                    </div>
                    <div className="tickets-container-bottom">
                        <div className="tickets-email">
                            <p className="tickets-left">Due Date:</p>
                            <p>Nov 1</p>
                        </div>
                        <div className="tickets-priority">
                            <p className="tickets-left">Priority:</p>
                            <p>High</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/ticket" className="tickets-container">
                    <div className="tickets-container-top">
                        <div className="tickets-name">
                            <p className='tickets-left'>Ticket Name:</p>
                            <p>Ticket</p>
                        </div>
                        <div className="tickets-role">
                            <p className='tickets-left'>Dev:</p>
                            <p>Mark</p>
                        </div>
                    </div>
                    <div className="tickets-container-bottom">
                        <div className="tickets-email">
                            <p className="tickets-left">Due Date:</p>
                            <p>Nov 1</p>
                        </div>
                        <div className="tickets-priority">
                            <p className="tickets-left">Priority:</p>
                            <p>High</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/ticket" className="tickets-container">
                    <div className="tickets-container-top">
                        <div className="tickets-name">
                            <p className='tickets-left'>Ticket Name:</p>
                            <p>Ticket</p>
                        </div>
                        <div className="tickets-role">
                            <p className='tickets-left'>Dev:</p>
                            <p>Mark</p>
                        </div>
                    </div>
                    <div className="tickets-container-bottom">
                        <div className="tickets-email">
                            <p className="tickets-left">Due Date:</p>
                            <p>Nov 1</p>
                        </div>
                        <div className="tickets-priority">
                            <p className="tickets-left">Priority:</p>
                            <p>High</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/ticket" className="tickets-container">
                    <div className="tickets-container-top">
                        <div className="tickets-name">
                            <p className='tickets-left'>Ticket Name:</p>
                            <p>Ticket</p>
                        </div>
                        <div className="tickets-role">
                            <p className='tickets-left'>Dev:</p>
                            <p>Mark</p>
                        </div>
                    </div>
                    <div className="tickets-container-bottom">
                        <div className="tickets-email">
                            <p className="tickets-left">Due Date:</p>
                            <p>Nov 1</p>
                        </div>
                        <div className="tickets-priority">
                            <p className="tickets-left">Priority:</p>
                            <p>High</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/ticket" className="tickets-container">
                    <div className="tickets-container-top">
                        <div className="tickets-name">
                            <p className='tickets-left'>Ticket Name:</p>
                            <p>Ticket</p>
                        </div>
                        <div className="tickets-role">
                            <p className='tickets-left'>Dev:</p>
                            <p>Mark</p>
                        </div>
                    </div>
                    <div className="tickets-container-bottom">
                        <div className="tickets-email">
                            <p className="tickets-left">Due Date:</p>
                            <p>Nov 1</p>
                        </div>
                        <div className="tickets-priority">
                            <p className="tickets-left">Priority:</p>
                            <p>High</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/ticket" className="tickets-container">
                    <div className="tickets-container-top">
                        <div className="tickets-name">
                            <p className='tickets-left'>Ticket Name:</p>
                            <p>Ticket</p>
                        </div>
                        <div className="tickets-role">
                            <p className='tickets-left'>Dev:</p>
                            <p>Mark</p>
                        </div>
                    </div>
                    <div className="tickets-container-bottom">
                        <div className="tickets-email">
                            <p className="tickets-left">Due Date:</p>
                            <p>Nov 1</p>
                        </div>
                        <div className="tickets-priority">
                            <p className="tickets-left">Priority:</p>
                            <p>High</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/ticket" className="tickets-container">
                    <div className="tickets-container-top">
                        <div className="tickets-name">
                            <p className='tickets-left'>Ticket Name:</p>
                            <p>Ticket</p>
                        </div>
                        <div className="tickets-role">
                            <p className='tickets-left'>Dev:</p>
                            <p>Mark</p>
                        </div>
                    </div>
                    <div className="tickets-container-bottom">
                        <div className="tickets-email">
                            <p className="tickets-left">Due Date:</p>
                            <p>Nov 1</p>
                        </div>
                        <div className="tickets-priority">
                            <p className="tickets-left">Priority:</p>
                            <p>High</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/ticket" className="tickets-container">
                    <div className="tickets-container-top">
                        <div className="tickets-name">
                            <p className='tickets-left'>Ticket Name:</p>
                            <p>Ticket</p>
                        </div>
                        <div className="tickets-role">
                            <p className='tickets-left'>Dev:</p>
                            <p>Mark</p>
                        </div>
                    </div>
                    <div className="tickets-container-bottom">
                        <div className="tickets-email">
                            <p className="tickets-left">Due Date:</p>
                            <p>Nov 1</p>
                        </div>
                        <div className="tickets-priority">
                            <p className="tickets-left">Priority:</p>
                            <p>High</p>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="tickets-buttons">
                <button type='button' className="tickets-button tickets-previous">Prev</button>
                <p>Page 1</p>
                <button type='button' className="tickets-button tickets-next">Next</button>
            </div>
        </div>
    )
}

export default ProjectTickets