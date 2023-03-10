import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

import './UsersAll.scss'

const UsersAll = () => {
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [allUsers, setAllUsers] = useState([])
    const { user, dispatch } = useAuthContext()

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                setLoading(true)
                const userInfo = await fetch(`http://localhost:4000/user/`, {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })

                const data = await userInfo.json();

                setAllUsers(data)
                setPostsPerPage(10)
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

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = Array.isArray(allUsers) && allUsers.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div className='usersAll'>
            <div className='usersAll-top'>
                <div className='usersAll-button usersAll-button-bottom'>All Users</div>
            </div>
            <div className="usersAll-body">
                <div className="usersAll-body-container">
                    <div className="usersAll-body-top">
                        <p>User</p>
                        <p className='middle'>Email</p>
                        <p>Role</p>
                    </div>
                    <div className="usersAll-body-middle">
                        {loading ? <div>loading...</div> : Array.isArray(allUsers) && currentPosts.map((user, i) => (
                            <div key={i} className="usersAll-body-middle-container">
                                <p className='top-and-bottom'>{user.username}</p>
                                <p className='middle'>{user.email}</p>
                                <p className='top-and-bottom'>{user.role}</p>
                            </div>  
                        ))}
                    </div>
                    <div className="usersAll-body-bottom">
                        <button className='button' type='button'>Previous</button>
                        <button className='number'>1</button>
                        <button className='button' type='button'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersAll