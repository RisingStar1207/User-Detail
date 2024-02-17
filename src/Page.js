import React, { useContext, useEffect } from 'react'
import "./Page.css"
import UserContext from './Context/UserContext';
import UserData from './Component/UserData/UserData';
import UserList from './Component/UserList/UserList';

function Page() {
  const context = useContext(UserContext);
  const { loading, fetchUser} = context;
  useEffect(() => {
    fetchUser();
  }, [])

    if (!loading) {
      return (
        <>
          <div className="row g-0" style={{ height: "100vh" }}>
            <div className="userList col-lg-7 col-6 " style={{ height: "100vh", overflow: "scroll" }}>
              <UserData />
            </div>
            <div className="userList col-lg-5 col-6 d-flex justify-content-center align-items-center" style={{ height: "100vh", overflow: "scroll" }}>
              <UserList />
            </div>
          </div>
        </>
      )
    }
    else{
      return (
        <div className="d-flex justify-content-center align-items-center" style={{width:"100vw",height:"100vh"}}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </div>
      )
    }
}
export default Page