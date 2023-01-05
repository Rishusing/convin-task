import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import useFetchAllUser from "../customHook/useFetchAllUser";
// import Loader from './Loader';
import './Home.css'
import Pagination from './Pagination';
import UserList from './UserList';


const Home = () => {

    const [pagenumber, setPage] = useState(1);
    useFetchAllUser(pagenumber)
    const userState = useSelector(state => state.user);

    return (
        <>
            {
                (!userState.loading && userState.error) ? <p id='error_page'>500:{userState.error }</p>
                    :
                    <div className='home_main'>
                        <div className="pagination">
                            {!(userState.loading) && <Pagination setPage={setPage} total_page={userState.users.total_pages} page={pagenumber} />}
                        </div>
                        
                        <div className="home_content">
                            {!(userState.loading) &&

                                !(userState.error) &&
                                <UserList data={ userState.users.data} />
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default React.memo(Home);