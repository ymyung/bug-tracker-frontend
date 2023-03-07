import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'; 

const usePieData = () => {
    const [tickets, setTickets] = useState([])
    const priorityArray = ['Low Priority', 'Medium Priority', 'High Priority', 'Critical Priority']
    const { user, dispatch } = useAuthContext()

    // get all tickets
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await fetch('http://localhost:4000/ticket', {
                    headers: {'Authorization': `Bearer ${user.token}`}
                });
                const data = await response.json();

                setTickets(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (user) {
            fetchTickets();
        }
    }, [dispatch, user]);

    // filter only open tickets
    const openTickets = Array.isArray(tickets) ? tickets.filter(ticket => ticket.status === 'open') : [];

    // sort tickets by priority
    let ticketsLow = 0
    let ticketsMedium = 0
    let ticketsHigh = 0
    let ticketsCritical = 0

    openTickets.map(ticket => {
        if (ticket.priority === 'low') {
            ticketsLow++
        } else if (ticket.priority === 'medium') {
            ticketsMedium++
        } else if (ticket.priority === 'high') {
            ticketsHigh++
        } else if (ticket.priority === 'critical') {
            ticketsCritical++
        }
    })

    const ticketCountByPriority = [ticketsLow, ticketsMedium, ticketsHigh, ticketsCritical]

    // create finished array of data
    const pieArray = []
    priorityArray.forEach((priority, i) => {
        pieArray.push({
            priority: priority,
            count: ticketCountByPriority[i]
        })
    })

    return pieArray
}

export default usePieData