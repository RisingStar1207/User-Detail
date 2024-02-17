import React, { useContext } from 'react'
import UserContext from '../../Context/UserContext';
import Single from '../Single/Single';
import "./UserData.css"

export default function UserData() {
  const context = useContext(UserContext);
  const { users, error } = context;
  if(!error){
  return (
    <div className="list mx-5">
      {users.map((user) => {
        return (
        <Single details={user} key={user.profile.username} />
        )
      })
      }
    </div>
  )
    }
    else{
      return(
        <h1 style={{color:"red"}}>
          No Data to Show
        </h1>
      )
    }
}
