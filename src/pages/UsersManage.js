import React from 'react'
import { NavLink } from 'react-router-dom'

import "./UsersManage.scss"

const UsersManage = () => {
    const pd = (e) => {
        e.preventDefault()
    }

    return (
        <div className='usersManage'>
            <div className='usersManage-top'>
                <NavLink exact="true" to="/users-manage" className='usersManage-button usersManage-button-top'>Manage Users</NavLink>
                <NavLink exact="true" to="/users-all" className='usersManage-button usersManage-button-bottom'>All Users</NavLink>
            </div>
            <div className="usersManage-body">
                <form className="usersManage-body-form">
                    <div className="usersManage-body-users">
                        <p>Users</p>
                        <select className='usersManage-body-input' name="usersManage-body-users" id="usersManage-body-users">
                            <option value="" selected disabled>Select User</option>
                            <option value="user 1">user 1</option>
                            <option value="user 2">user 2</option>
                        </select>
                    </div>
                    <div className="usersManage-body-role">
                        <p>Role</p>
                        <select className='usersManage-body-input' name="usersManage-body-role" id="usersManage-body-role">
                            <option value="" selected disabled>Select Role</option>
                            <option value="pole 1">role 1</option>
                            <option value="pole 2">role 2</option>
                        </select>
                    </div>
                    <input onClick={(e) => pd(e)} className='usersManage-body-submit' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default UsersManage