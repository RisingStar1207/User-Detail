import React, { useContext } from 'react'
import "./UserList.css"
import UserContext from '../../Context/UserContext';

function UserList() {
    const context = useContext(UserContext);
    const { detail } = context;
    if (detail=="") {
        return (
                <h1 style={{color:"red"}}>Select User To get Data</h1>
        )
    }
    else {
        return (
            <div className="userCard m-1" style={{width:"400px",border:"1px solid red",boxShadow:"red 0px 0px 5px"}}>
                <div className="d-flex flex-column align-items-center justify-content-center position-relative px-2 py-4" style={{backgroundColor:"red"}}>
                    <div className="img d-flex align-items-center justify-content-center rounded-circle p-2" style={{backgroundColor:"white",width:"100px",height:"100px"}}>
                        <img className="rounded-circle" style={{width:"90px",height:"90px"}} src={detail.avatar} ></img>
                    </div>
                    <h3 className="userName" style={{fontSize:"1.5rem",color:"white"}}>{detail.profile.username}</h3>
                    <p className="reduce" style={{textAlign:"center",color:"white"}}>{detail.Bio}</p>
                    <div className="position-absolute border border-danger" style={{bottom:"-15px",backgroundColor:"white",color:"red",boxShadow:"red 0px 0px 15px"}}><p className="reduce m-0 px-1"style={{textAlign:"center"}}>{detail.jobTitle}</p></div>
                </div>
                <div className="email d-flex flex-column align-items-start justify-content-center p-4">
                    <h5 className="reduce precise" style={{fontSize:"1rem",fontWeight:"300"}}><span className="pe-3" style={{fontWeight:"500"}}>FirstName:</span>{detail.profile.firstName}</h5>
                    <h5 className="reduce precise" style={{fontSize:"1rem",fontWeight:"300"}}><span className="pe-3" style={{fontWeight:"500"}}>LastName:</span>{detail.profile.lastName}</h5>
                    <h5 className="reduce precise" style={{fontSize:"1rem",fontWeight:"300"}}><span className="pe-3" style={{fontWeight:"500"}}>Email:</span>{detail.profile.email}</h5>
                </div>
            </div>
        )
    }
}

export default UserList
