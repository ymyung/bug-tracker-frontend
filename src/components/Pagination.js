import React from 'react'

import './Pagination.scss'

const Pagination = ({ postsPerPage, allTickets, paginate, paginatePrev, paginateNext, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allTickets.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='myticket-buttons'>
            <button disabled={currentPage === 1} type='button' className="myticket-button myticket-previous" onClick={() => paginatePrev()}>Prev</button>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li onClick={() => paginate(number)} key={number} className='page-item'>
                        <a href="#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            <button disabled={currentPage === pageNumbers.length} type='button' className="myticket-button myticket-next" onClick={() => paginateNext()}>Next</button>
        </div>
    )
}

export default Pagination