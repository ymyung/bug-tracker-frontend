import React from 'react'
import { NavLink } from 'react-router-dom'

import './Ticket.scss'

const Ticket = () => {
  return (
    <div className='ticket'>
        <div className="ticket-container">
            <div className='ticket-buttons-container'>
                <NavLink exact="true" to="/ticket-edit" className='ticket-button'>Edit Ticket</NavLink>
                <NavLink exact="true" to="/ticket-history" className='ticket-button'>Ticket History</NavLink>
            </div>
            <div className="ticket-body-container">
                <div className="ticket-body">
                    <div className='ticket-body-subcontainer'>
                        <p>Title:</p>
                        <p>Ticket 1</p>
                    </div>
                    <div className='ticket-body-description'>
                        <p>Description:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi, magni distinctio possimus porro repudiandae labore? Natus aspernatur at veniam?</p>
                    </div>
                    <div className='ticket-body-subcontainer'>
                        <p>Assigned Developer:</p>
                        <p>Shrek</p>
                    </div>
                    <div className='ticket-body-subcontainer'>
                        <p>Created By:</p>
                        <p>Jerry</p>
                    </div>
                    <div className='ticket-body-subcontainer'>
                        <p>Date Created:</p>
                        <p>November 30th</p>
                    </div>
                    <div className='ticket-body-subcontainer'>
                        <p>Priority:</p>
                        <p>High</p>
                    </div>
                    <div className='ticket-body-subcontainer'>
                        <p>Type:</p>
                        <p>UI</p>
                    </div>
                    <div className='ticket-body-subcontainer'>
                        <p>Due Date:</p>
                        <p>November 31st</p>
                    </div>
                    <div className='ticket-body-subcontainer'>
                        <p>Status:</p>
                        <p>Resolved</p>
                    </div>
                    <div className='ticket-body-subcontainer'>
                        <p>Date Resolved:</p>
                        <p>November 31st</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ticket