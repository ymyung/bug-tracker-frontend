import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import "./MyTickets.scss"

const MyTickets = () => {
    const [newTicketContainer, setNewTicketContainer] = useState('new-myticket-container')

    const openNewTicket = () => {
        setNewTicketContainer('new-myticket-container new-myticket-open')
    }

    const closeNewTicket = () => {
        setNewTicketContainer('new-myticket-container')
    }

    return (
        <>
            <div className='myticket-tickets'>
                <div className='myticket-title-container'>
                    <div className={newTicketContainer}>
                        <div onClick={closeNewTicket} className="new-myticket-backdrop"></div>
                        <div className="new-myticket-modal">
                            <div className="new-myticket-title">
                                <p>Title: </p>
                                <input className='new-myticket-input' placeholder='Title' type="text" />
                            </div>
                            <div className="new-myticket-description">
                                <p>Description: </p>
                                <textarea className='new-myticket-input' placeholder='Edit Description' name="edit-description" id="edit-description" cols="30" rows="4" />
                            </div>
                            <div className="new-myticket-priority">
                                <p>Priority: </p>
                                <select name="new-myticket-priority" id="new-myticket-priority" defaultValue=''>
                                    <option value="" defaultValue disabled>Select One</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                    <option value="Critical">Critical</option>
                                </select>
                            </div>
                            <div className="new-myticket-type">
                                <p>Type: </p>
                                <select name="new-myticket-type" id="new-myticket-type" defaultValue=''>
                                    <option value="" defaultValue disabled>Select One</option>
                                    <option value="Bug">Bug</option>
                                    <option value="UI">UI</option>
                                    <option value="Performance">Performance</option>
                                </select>
                            </div>
                            <div className="new-myticket-dev">
                                <p>Assigned Developer: </p>
                                <select name="new-myticket-dev" id="new-myticket-dev" defaultValue=''>
                                    <option value="" defaultValue disabled>Select One</option>
                                    <option value="Dev 1">Dev 1</option>
                                </select>
                            </div>
                            <div className="new-myticket-date">
                                <div>
                                    <p>Due Date: </p>
                                    <input type="date" />
                                </div>
                                <button className='new-myticket-save' type='button'>Save Changes</button>
                            </div>
                        </div>
                        <button onClick={openNewTicket} className="new-myticket">Add Ticket</button>
                    </div>
                    <div className="myticket-number-container">
                        <div className="myticket-number">My Tickets: 20</div>
                    </div>
                    <div className="myticket-title-right">
                        <input className='myticket-search' type="text" placeholder="Search.." />
                    </div>
                </div>
                <div className="myticket-containers">
                    <NavLink exact="true" to="/ticket" className="myticket-container">
                        <div className="myticket-container-top">
                            <div className="myticket-name">
                                <p className='myticket-left'>Ticket Name:</p>
                                <p>Ticket</p>
                            </div>
                            <div className="myticket-role">
                                <p className='myticket-left'>Dev:</p>
                                <p>Mark</p>
                            </div>
                        </div>
                        <div className="myticket-container-bottom">
                            <div className="myticket-email">
                                <p className="myticket-left">Due Date:</p>
                                <p>Nov 1</p>
                            </div>
                            <div className="myticket-priority">
                                <p className="myticket-left">Priority:</p>
                                <p>High</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/ticket" className="myticket-container">
                        <div className="myticket-container-top">
                            <div className="myticket-name">
                                <p className='myticket-left'>Ticket Name:</p>
                                <p>Ticket</p>
                            </div>
                            <div className="myticket-role">
                                <p className='myticket-left'>Dev:</p>
                                <p>Mark</p>
                            </div>
                        </div>
                        <div className="myticket-container-bottom">
                            <div className="myticket-email">
                                <p className="myticket-left">Due Date:</p>
                                <p>Nov 1</p>
                            </div>
                            <div className="myticket-priority">
                                <p className="myticket-left">Priority:</p>
                                <p>High</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/ticket" className="myticket-container">
                        <div className="myticket-container-top">
                            <div className="myticket-name">
                                <p className='myticket-left'>Ticket Name:</p>
                                <p>Ticket</p>
                            </div>
                            <div className="myticket-role">
                                <p className='myticket-left'>Dev:</p>
                                <p>Mark</p>
                            </div>
                        </div>
                        <div className="myticket-container-bottom">
                            <div className="myticket-email">
                                <p className="myticket-left">Due Date:</p>
                                <p>Nov 1</p>
                            </div>
                            <div className="myticket-priority">
                                <p className="myticket-left">Priority:</p>
                                <p>High</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/ticket" className="myticket-container">
                        <div className="myticket-container-top">
                            <div className="myticket-name">
                                <p className='myticket-left'>Ticket Name:</p>
                                <p>Ticket</p>
                            </div>
                            <div className="myticket-role">
                                <p className='myticket-left'>Dev:</p>
                                <p>Mark</p>
                            </div>
                        </div>
                        <div className="myticket-container-bottom">
                            <div className="myticket-email">
                                <p className="myticket-left">Due Date:</p>
                                <p>Nov 1</p>
                            </div>
                            <div className="myticket-priority">
                                <p className="myticket-left">Priority:</p>
                                <p>High</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/ticket" className="myticket-container">
                        <div className="myticket-container-top">
                            <div className="myticket-name">
                                <p className='myticket-left'>Ticket Name:</p>
                                <p>Ticket</p>
                            </div>
                            <div className="myticket-role">
                                <p className='myticket-left'>Dev:</p>
                                <p>Mark</p>
                            </div>
                        </div>
                        <div className="myticket-container-bottom">
                            <div className="myticket-email">
                                <p className="myticket-left">Due Date:</p>
                                <p>Nov 1</p>
                            </div>
                            <div className="myticket-priority">
                                <p className="myticket-left">Priority:</p>
                                <p>High</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/ticket" className="myticket-container">
                        <div className="myticket-container-top">
                            <div className="myticket-name">
                                <p className='myticket-left'>Ticket Name:</p>
                                <p>Ticket</p>
                            </div>
                            <div className="myticket-role">
                                <p className='myticket-left'>Dev:</p>
                                <p>Mark</p>
                            </div>
                        </div>
                        <div className="myticket-container-bottom">
                            <div className="myticket-email">
                                <p className="myticket-left">Due Date:</p>
                                <p>Nov 1</p>
                            </div>
                            <div className="myticket-priority">
                                <p className="myticket-left">Priority:</p>
                                <p>High</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/ticket" className="myticket-container">
                        <div className="myticket-container-top">
                            <div className="myticket-name">
                                <p className='myticket-left'>Ticket Name:</p>
                                <p>Ticket</p>
                            </div>
                            <div className="myticket-role">
                                <p className='myticket-left'>Dev:</p>
                                <p>Mark</p>
                            </div>
                        </div>
                        <div className="myticket-container-bottom">
                            <div className="myticket-email">
                                <p className="myticket-left">Due Date:</p>
                                <p>Nov 1</p>
                            </div>
                            <div className="myticket-priority">
                                <p className="myticket-left">Priority:</p>
                                <p>High</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink exact="true" to="/ticket" className="myticket-container">
                        <div className="myticket-container-top">
                            <div className="myticket-name">
                                <p className='myticket-left'>Ticket Name:</p>
                                <p>Ticket</p>
                            </div>
                            <div className="myticket-role">
                                <p className='myticket-left'>Dev:</p>
                                <p>Mark</p>
                            </div>
                        </div>
                        <div className="myticket-container-bottom">
                            <div className="myticket-email">
                                <p className="myticket-left">Due Date:</p>
                                <p>Nov 1</p>
                            </div>
                            <div className="myticket-priority">
                                <p className="myticket-left">Priority:</p>
                                <p>High</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="myticket-buttons">
                    <button type='button' className="myticket-button myticket-previous">Prev</button>
                    <p>Page 1</p>
                    <button type='button' className="myticket-button myticket-next">Next</button>
                </div>
            </div>
        </>
    )
}

export default MyTickets