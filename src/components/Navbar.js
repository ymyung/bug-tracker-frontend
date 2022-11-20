import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

import "./Navbar.scss"

const Navbar = () => {
    const [navbarLeft, setNavbarLeft] = useState("navbar-left")

    const openSidebar = () => {
        setNavbarLeft("navbar-left sidebar--open")
    }

    const closeSidebar = () => {
        setNavbarLeft("navbar-left")
    }

    return (
        <div className="navbar">
            <div className={navbarLeft}>
                <div onClick={closeSidebar} className="sidebar-overlay"></div>
                <div onClick={openSidebar} className="sidebar-button">
                    <span className="material-symbols-outlined menu">menu</span>
                </div>
                <nav className="sidebar">
                    <span onClick={closeSidebar} className="material-symbols-outlined x">close</span>
                    <ul>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/"><span className="material-symbols-outlined">dashboard</span>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/projects"><span className="material-symbols-outlined">lightbulb</span>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/users"><span className="material-symbols-outlined">group</span>Users</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/messages"><span className="material-symbols-outlined">chat</span>Messages</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/my-tickets"><span className="material-symbols-outlined">confirmation_number</span>My Tickets</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/profile"><span className="material-symbols-outlined">person</span>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/logout"><span className="material-symbols-outlined">logout</span>Logout</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="navbar-middle">
                <NavLink onClick={closeSidebar} className="navbar-logo" to="/">
                    <span className="material-symbols-outlined bug">bug_report</span>
                    Bug Tracker
                </NavLink>
            </div>
            <div className="navbar-right">
                <NavLink className="chat-container" onClick={closeSidebar} exact="true" to="/messages">
                    <span className="material-symbols-outlined chat">chat</span>
                    <span className="chat--notification">1</span>
                </NavLink>
                <NavLink className="navbar-image-container" onClick={closeSidebar} exact="true" to="/profile">
                    <img className="navbar-image" src="https://i.pinimg.com/600x315/4e/24/3c/4e243cc596ec994e7a8c9711b1034a11.jpg" alt="" />
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar

