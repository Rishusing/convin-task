import React from 'react'
import useFetchSingleUser from '../customHook/useFetchSingleUser';
import { useSelector } from 'react-redux';
import './UserList.css'
import { HiOutlineMail } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'

const EachUser = ({ userid }) => {

    useFetchSingleUser(userid)

    const singleUserState = useSelector(state => state.singleuser)


    return (
        <div>
            {
                !singleUserState.loading
                &&
                <div className='usercard'>
                    <div className="cardleft">
                        <img src={singleUserState.singleuser.data.avatar} alt='DP' width='70%' />
                    </div>
                    <div className="cardright">
                        <div className='namesection'>
                            <CgProfile /><p>{singleUserState.singleuser.data.first_name} {singleUserState.singleuser.data.last_name}</p>
                        </div>
                        <div className='emailsection'>
                            <HiOutlineMail /> <p>{singleUserState.singleuser.data.email} </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default EachUser