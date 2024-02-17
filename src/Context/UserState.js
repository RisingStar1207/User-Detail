import { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
    const initialUser=[];
    const initialDetail="";
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
    const [users,setUsers]=useState(initialUser);
    const [detail,setDetail]=useState(initialDetail);
    const showDetails=async(data)=>{
        setDetail(data);
    }
        const fetchUser = async() => {
            setLoading(true);
            const response = await fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users");
            if(response.status==200){
                const user = await response.json();
                setUsers(user);
            }
            else{
                setError(true);
            }
            const load= false;
            setLoading(load);
        }
    return (
        <UserContext.Provider value={{ users, fetchUser, showDetails,detail, loading, error}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;