import React from 'react'
import {v4} from 'uuid'

const Pagination = ({ setPage, total_page, page }) => {

    const pages = [];

    for (let i = 0; i < total_page; i++) {  
        pages.push(v4());
    }

    const setPageNumber = (page) => {
        setPage(page)
    }

    return (
        <div className='main_pagination'>
            {
                pages.map((id, ind) => 
                    <div className='pagenumber' id = { page===ind + 1 ? 'active' : 'noactive'} key={id} onClick = {() => setPageNumber(ind+1)}>
                        <p>{ind + 1}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Pagination