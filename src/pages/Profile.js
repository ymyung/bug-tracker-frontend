import React, { useState } from 'react'

import "./Profile.scss"

const Profile = () => {
    const [profilePasswordContainer, setProfilePasswordContainer] = useState('profile-password-container')

    const openChangePassword = () => {
        setProfilePasswordContainer('profile-password-container change-password')
    }

    const closeChangePassword = () => {
        setProfilePasswordContainer('profile-password-container')
    }

    return (
        <div className='profile'>
            <div className="profile-container">
                <div className="profile-picture">
                    <img className="profile-image" src="https://i.pinimg.com/600x315/4e/24/3c/4e243cc596ec994e7a8c9711b1034a11.jpg" alt="" />
                </div>
                <div className="profile-username">
                    <p>Dummy Name</p>
                </div>
                <div className="profile-email-container">
                    <p className='profile-email'>123456789@gmail.com</p>
                </div>
                <div className={profilePasswordContainer}>
                    <div onClick={closeChangePassword} className="profile-backdrop"></div>
                    <div className="profile-modal">
                        
                    </div>
                    <button onClick={openChangePassword} type='button' className='profile-password'>Change Password</button>
                </div>
            </div>
        </div>
    )
}

export default Profile