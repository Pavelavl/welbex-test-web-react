import React from 'react'

const Pagination = ({pages, currentPage, nextPage, prevPage, prevDisabled, nextDisabled, currentPageNumber, currentActive}) => {
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className={`page-item ${prevDisabled}`}>
                    <a className="page-link" href="#" onClick={() => {prevPage()}}>Previous</a>
                </li>
                {pages.map((p) => {
                    return (
                        <li className={(currentPageNumber===p) ? `page-item ${currentActive}` : `page-item`} key={p}><a className="page-link" href="#" onClick={() => {currentPage(p)}}>{p}</a></li>
                    )
                })}
                <li className={`page-item ${nextDisabled}`}>
                    <a className="page-link" href="#" onClick={() => {nextPage()}}>Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
