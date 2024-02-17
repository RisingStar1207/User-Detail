import React, { useContext } from 'react'
import UserContext from '../../Context/UserContext';
import "./Single.css"

function Single(props) {
    const context = useContext(UserContext);
    const { showDetails } = context;
    const set=()=>{
        showDetails(props.details);
    }
  return (
    <div className="single d-flex flex-wrap align-items-center px-2 py-4 my-3 mx-2 border-bottom border-danger border-1" style={{boxShadow:"red 0px 2px 10px"}}>
      <img className="rounded-circle me-5" style={{width:"75px",height:"75px"}} src={props.details.avatar?props.details.avatar:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fdefault-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-download-a-free-preview-or-high-quality-adobe-illustrato--777222848172134384%2F&psig=AOvVaw3mZMkzlbApJYQ1J5a20MUt&ust=1708257416592000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiJt6P1qLKEAxUBSGwGHQGtAW4QjRx6BAgAEBc"}></img>
      <div className="me-auto">
      <h3 className="userName" style={{fontSize:"1.5rem",color:"red"}}>{props.details.profile.username}</h3>
      <h5 className="jobTitle" style={{fontSize:"1.2rem",fontWeight:"300"}}>{props.details.jobTitle}</h5>
      </div>
      <button className="btn btn-outline-danger d-flex align-items-center me-3 mt-2" style={{height:"30px"}} onClick={set}>Details</button>
    </div>
  )
}

export default Single
