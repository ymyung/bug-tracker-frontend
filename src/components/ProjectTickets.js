import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import { useAuthContext } from '../hooks/useAuthContext'

import './ProjectTickets.scss'

const ProjectTickets = ({ currentProject }) => {
    const [newTicketContainer, setNewTicketContainer] = useState('new-ticket-container')
    const { user } = useAuthContext()

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(8)

    const [searchValue, setSearchValue] = useState('')
    const [currentUsers, setCurrentUsers] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    // add ticket values
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newCreatedBy, setNewCreatedBy] = useState('')
    const [newDev, setNewDev] = useState('')
    const [newDateCreated] = useState(new Date().toISOString())
    const [newDueDate, setNewDueDate] = useState('')
    const [newType, setNewType] = useState('')
    const [newPriority, setNewPriority] = useState('')
    const [newStatus] = useState('open')
    const [newDateResolved, setNewDateResolved] = useState('')

    // open new ticket/remove ticket modals
    const openNewTicket = () => {
        setNewTicketContainer('new-ticket-container new-ticket-open')
    }

    const openRemoveTicket = () => {
        setNewTicketContainer('new-ticket-container remove-ticket-open')
    }

    // close modals
    const closeNewTicket = () => {
        setNewTicketContainer('new-ticket-container')
    }

    // filter devs based on search
    const filteredData = currentProject.tickets.filter((ticket) => {
        if (searchValue === '') {
            return ticket
        } else if (ticket.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return ticket
        }
    })

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentTickets = Array.isArray(filteredData) && filteredData.slice(indexOfFirstPost, indexOfLastPost)

    // change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const paginatePrev = () => {
        setCurrentPage(currentPage => currentPage -1)
    }

    const paginateNext = () => { 
        setCurrentPage(currentPage => currentPage + 1)
    }

    // get all devs on render
    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch('http://localhost:4000/user/', {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })

                const data = await response.json()
                const emails = currentProject.devs.map(dev => dev.email)

                setCurrentUsers(data.filter(item => emails.includes(item.email)))
            } catch (error) {
                throw error
            }
        }

        if (user) {
            getUsers()
        }
    }, [])

    // get current dev
    useEffect(() => {
        const getCurrentDev = async () => {
            try {
                const response = await fetch(`http://localhost:4000/user/email/${user.email}`, {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })

                const data = await response.json()

                setCurrentUser(data)
                setNewCreatedBy(data._id)
            } catch (error) {
                throw error
            }
        }

        if (user) {
            getCurrentDev()
        }
    }, [])

    // handle new ticket
    const handleNewTicket = (e) => {
        e.preventDefault()

        closeNewTicket()
    }

    // handle remove ticket
    const handleRemoveTicket = (e) => {
        e.preventDefault()

        closeNewTicket()
    }

    return (
        <div className='project-tickets'>
            <div className='tickets-title-container'>
                <div className={newTicketContainer}>
                    <div onClick={closeNewTicket} className="new-ticket-backdrop"></div>
                    <div onClick={closeNewTicket} className="remove-ticket-backdrop"></div>

                    <form className="new-ticket-modal" onSubmit={(e) => handleNewTicket(e)}>
                        <div className="new-ticket-title">
                            <p>Title: </p>
                            <input required className='new-ticket-input' placeholder='Title' type="text" onChange={(e) => setNewTitle(e.target.value)} />
                        </div>
                        <div className="new-ticket-description">
                            <p>Description: </p>
                            <textarea required className='new-ticket-input' placeholder='Edit Description' name="edit-description" id="edit-description" cols="30" rows="4" onChange={(e) => setNewDescription(e.target.value)} />
                        </div>
                        <div className="new-ticket-dev">
                            <p>Assigned Developer: </p>
                            <select required name="new-ticket-dev" defaultValue='' id="new-ticket-dev" onChange={(e) => setNewDev(currentUsers[e.target.value])}>
                                <option value="" disabled>Select One</option>
                                {currentUsers.map((user, i) => (
                                    <option key={i} value={i}>{user.username}</option>
                                ))}
                            </select>
                        </div>
                        <div className="new-ticket-priority">
                            <p>Priority: </p>
                            <select required name="new-ticket-priority" defaultValue='' id="new-ticket-priority" onChange={(e) => setNewPriority(e.target.value)}>
                                <option value="" defaultValue disabled>Select One</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                        </div>
                        <div className="new-ticket-type">
                            <p>Type: </p>
                            <select required name="new-ticket-type" defaultValue='' id="new-ticket-type" onChange={(e) => setNewType(e.target.value)}>
                                <option value="" defaultValue disabled>Select One</option>
                                <option value="bug">Bug</option>
                                <option value="ui">UI</option>
                                <option value="performance">Performance</option>
                            </select>
                        </div>
                        <div className="new-ticket-date">
                            <div>
                                <p>Due Date: </p>
                                <input required type="date" onChange={(e) => setNewDueDate(e.target.value)} />
                            </div>
                            <button className='new-ticket-save'>Add Ticket</button>
                        </div>
                    </form>

                    <form className="remove-ticket-modal" onSubmit={(e) => handleRemoveTicket(e)}>
                        <div className='modal-top'>
                            <div>Select Dev:</div>
                            <select required name="" id="" defaultValue='' className='modal-devs'>
                                <option value="" disabled>Select</option>
                                
                            </select>
                        </div>
                        <div className="modal-middle">
                            <div className="">Selected:</div>
                            <div className="modal-selected-user"></div>
                        </div>
                        <div className="button-container">
                            <button className='remove-ticket'>Remove dev</button>
                        </div>
                    </form>

                    <button onClick={openNewTicket} className="new-ticket-left">Add</button>
                    <button onClick={openRemoveTicket} className="new-ticket-right">Remove</button>
                </div>
                <div className="tickets-number-container">
                    <div className="tickets-number">Tickets: {filteredData && filteredData.length}</div>
                </div>
                <div className="tickets-title-right">
                    <input className='tickets-search' type="text" placeholder="Search.." onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
                </div>
            </div>
            <div className="tickets-containers">
                {currentProject.tickets && currentTickets.map((ticket, i) => (
                    <div key={i} className="tickets-container">
                        <div className="tickets-container-top">
                            <div className="tickets-name">
                                <p className='tickets-left'>Name:</p>
                                <p>{ticket.title}</p>
                            </div>
                            <div className="tickets-role">
                                <p className='tickets-left'>Dev:</p>
                                <p>{ticket.dev.username}</p>
                            </div>
                        </div>
                        <div className="tickets-container-bottom">
                            <div className="tickets-email">
                                <p className="tickets-left">Due Date:</p>
                                <p>{ticket.dueDate.slice(0, 7)}</p>
                            </div>
                            <div className="tickets-priority">
                                <p className="tickets-left">Priority:</p>
                                <p>{ticket.priority}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="tickets-buttons">
                <Pagination postsPerPage={postsPerPage} currentProject={filteredData} paginate={paginate} paginatePrev={paginatePrev} paginateNext={paginateNext} currentPage={currentPage} />
            </div>
        </div>
    )
}

export default ProjectTickets