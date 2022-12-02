import React from 'react'
import { NavLink } from 'react-router-dom'

import './TicketEdit.scss'

const TicketEdit = () => {
  return (
    <div className='TicketEdit'>
        <div className="TicketEdit-container">
            <div className='TicketEdit-buttons-container'>
                <NavLink exact="true" to="/ticket" className='TicketEdit-button'>Go Back</NavLink>
                <NavLink exact="true" to="/ticket" className='TicketEdit-button'>Save Changes</NavLink>
            </div>
            <div className="TicketEdit-body-container">
                <div className="TicketEdit-body">
                    <div className='TicketEdit-body-subcontainer'>
                        <p>Title:</p>
                        <input className='TicketEdit-body-subcontainer-bottom' placeholder='Ticket 1' type="text" />
                    </div>
                    <div className='TicketEdit-body-description'>
                        <p>Description:</p>
                        <textarea placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi, magni distinctio possimus porro repudiandae labore? Natus aspernatur at veniam?' name="description" id="description" cols="40" rows="5"></textarea>
                    </div>
                    <div className='TicketEdit-body-subcontainer'>
                        <p>Assigned Developer:</p>
                        <input className='TicketEdit-body-subcontainer-bottom' placeholder='Shrek' type="text" />
                    </div>
                    <div className='TicketEdit-body-subcontainer'>
                        <p>Created By:</p>
                        <input className='TicketEdit-body-subcontainer-bottom' placeholder='Jerry' type="text" />
                    </div>
                    <div className='TicketEdit-body-subcontainer'>
                        <p>Date Created:</p>
                        <input className='TicketEdit-body-subcontainer-bottom' placeholder='November 30th' type="text" />
                    </div>
                    <div className='TicketEdit-body-subcontainer'>
                        <p>Priority:</p>
                        <input className='TicketEdit-body-subcontainer-bottom' placeholder='High' type="text" />
                    </div>
                    <div className='TicketEdit-body-subcontainer'>
                        <p>Type:</p>
                        <input className='TicketEdit-body-subcontainer-bottom' placeholder='UI' type="text" />
                    </div>
                    <div className='TicketEdit-body-subcontainer'>
                        <p>Due Date:</p>
                        <input className='TicketEdit-body-subcontainer-bottom' placeholder='November 31st' type="text" />
                    </div>
                    <div className='TicketEdit-body-subcontainer'>
                        <p>Status:</p>
                        <input className='TicketEdit-body-subcontainer-bottom' placeholder='Resolved' type="text" />
                    </div>
                    <div className='TicketEdit-body-subcontainer'>
                        <p>Date Resolved:</p>
                        <input className='TicketEdit-body-subcontainer-bottom' placeholder='November 31st' type="text" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TicketEdit