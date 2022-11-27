import React from 'react'

import './Logout.scss'

const Logout = ({ closeSidebar }) => {
  return (
    <div className='logout'>
        <div className="logout--container">
            <div className="logout--head">
                <div className="title">
                    <h1>Logout</h1>
                </div>
            </div>
            <div className="logout--body">
                <button onClick={closeSidebar} type="button">No</button>
                <button onClick={closeSidebar} type="button">Yes</button>
            </div>
        </div>
    </div>
  )
}

export default Logout