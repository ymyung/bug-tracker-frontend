import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import Pagination from '../components/Pagination'
import Ticket from '../pages/Ticket'

import "./MyTickets.scss"

const MyTickets = () => {
    const [newTicketContainer, setNewTicketContainer] = useState('new-myticket-container')
    const [allTickets, setAllTickets] = useState({})
    const [userUsername, setUserUsername] = useState('')
    const { user, dispatch } = useAuthContext()

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(8)

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                setLoading(true)
                const userInfo = await fetch(`http://localhost:4000/user/email/${user.email}`, {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })

                const data = await userInfo.json();

                const openTickets = data.tickets.filter(ticket => ticket.status === 'open')

                setAllTickets(openTickets)
                setUserUsername(data.username)
                setPostsPerPage(8)
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        };

        if (user) {
            fetchTickets();
        }
    }, [user, dispatch]) 

    const dataDueDate = Array.isArray(allTickets) && allTickets.map(ticket => (
        ticket.dueDate.substring(0, 7)
    ))

    const closeNewTicket = () => {
        setNewTicketContainer('new-myticket-container')
    }

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = Array.isArray(allTickets) && allTickets.slice(indexOfFirstPost, indexOfLastPost)
    
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

    // render clicked ticket
    const [oneTicket, setOneTicket] = useState('ticket')
    const [currentTicket, setCurrentTicket] = useState({})

    const renderTicket =(ticket, res) => {
        if (res === 'oneTicket') {
            setOneTicket(prev => 'ticket-on')
            setCurrentTicket(ticket)
        } else if (res === 'allTickets') {
            setOneTicket(prev => 'ticket')
        }
    }

    return (
        <>
            <div className='myticket-tickets'>
                <div className='myticket-title-container'>
                    <div className={newTicketContainer}>
                        <div onClick={closeNewTicket} className="new-myticket-backdrop"></div>
                    </div>
                    <div className="myticket-number-container">
                        <div className="myticket-number">My Tickets: {allTickets.length}</div>
                    </div>
                    <div className="myticket-title-right">
                        <input className='myticket-search' type="text" placeholder="Search.." />
                    </div>
                </div>
                <div className="myticket-containers">
                    {loading ? <div>loading...</div> : Array.isArray(allTickets) && currentPosts.map((ticket, i) => (
                    <div key={i} className="myticket-container" onClick={() => renderTicket(ticket, 'oneTicket')}>
                        <div className="myticket-container-top">
                            <div className="myticket-name">
                                <p className='myticket-left'>Ticket Name:</p>
                                <p>{ticket.title}</p>
                            </div>
                            <div className="myticket-role">
                                <p className='myticket-left'>Dev:</p>
                                <p>{userUsername}</p>
                            </div>
                        </div>
                        <div className="myticket-container-bottom">
                            <div className="myticket-email">
                                <p className="myticket-left">Due Date:</p>
                                <p>{dataDueDate[i]}</p>
                            </div>
                            <div className="myticket-priority">
                                <p className="myticket-left">Priority:</p>
                                <p>{ticket.priority}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <Pagination postsPerPage={postsPerPage} allTickets={allTickets} paginate={paginate} paginatePrev={paginatePrev} paginateNext={paginateNext} currentPage={currentPage} />
            </div>
            <Ticket oneTicket={oneTicket} renderTicket={renderTicket} allTickets={allTickets} currentTicket={currentTicket} userUsername={userUsername} />
        </>
    )
}

export default MyTickets