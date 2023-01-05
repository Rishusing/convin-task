import React, { useState } from 'react'
import EachUser from './EachUser';
import Loader from './Loader';
import './UserList.css'



const UserList = ({ data }) => {

  const [userid, setId] = useState(0);

  const setID = (id) => {
    setId(id)
  }
  
  return (
    <div className='singleuser_main'>

      {userid ? <EachUser userid={userid}/> : <Loader/>}

      <div className="userrow">
        {
          data.map((user) =>

            <div key={user.id} className='users_box' onClick={() => setID(user.id)} >
              <p>USER {user.id}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default UserList