import React from 'react'
import { NavLink } from 'react-router-dom'

import './UsersAll.scss'

const UsersAll = () => {
    return (
        <div className='usersAll'>
            <div className='usersAll-top'>
                <NavLink exact="true" to="/users-manage" className='usersAll-button usersAll-button-top'>Manage Users</NavLink>
                <NavLink exact="true" to="/users-all" className='usersAll-button usersAll-button-bottom'>All Users</NavLink>
            </div>
            <div className="usersAll-body">
                <div className="usersAll-body-container">
                    <div className="usersAll-body-top">
                        <p>User</p>
                        <p className='middle'>Email</p>
                        <p>Role</p>
                    </div>
                    <div className="usersAll-body-middle">
                        <div className="usersAll-body-middle-container">
                            <p>User 1</p>
                            <p className='middle'>123456789@gmail.com</p>
                            <p>Developer</p>
                        </div>  
                        <div className="usersAll-body-middle-container">
                            <p>User 1</p>
                            <p className='middle'>123456789@gmail.com</p>
                            <p>Developer</p>
                        </div>  
                        <div className="usersAll-body-middle-container">
                            <p>User 1</p>
                            <p className='middle'>123456789@gmail.com</p>
                            <p>Developer</p>
                        </div>  
                        <div className="usersAll-body-middle-container">
                            <p>User 1</p>
                            <p className='middle'>123456789@gmail.com</p>
                            <p>Developer</p>
                        </div>  
                        <div className="usersAll-body-middle-container">
                            <p>User 1</p>
                            <p className='middle'>123456789@gmail.com</p>
                            <p>Developer</p>
                        </div>  
                        <div className="usersAll-body-middle-container">
                            <p>User 1</p>
                            <p className='middle'>123456789@gmail.com</p>
                            <p>Developer</p>
                        </div>  
                        <div className="usersAll-body-middle-container">
                            <p>User 1</p>
                            <p className='middle'>123456789@gmail.com</p>
                            <p>Developer</p>
                        </div>  
                        <div className="usersAll-body-middle-container">
                            <p>User 1</p>
                            <p className='middle'>123456789@gmail.com</p>
                            <p>Developer</p>
                        </div>  
                        <div className="usersAll-body-middle-container">
                            <p>User 1</p>
                            <p className='middle'>123456789@gmail.com</p>
                            <p>Developer</p>
                        </div>  
                        <div className="usersAll-body-middle-container">
                            <p>User 1</p>
                            <p className='middle'>123456789@gmail.com</p>
                            <p>Developer</p>
                        </div>  
                    </div>
                    <div className="usersAll-body-bottom">
                        <button className='button' type='button'>Previous</button>
                        <button className='number'>Page 1</button>
                        <button className='button' type='button'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersAll