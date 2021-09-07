import React from 'react'
import "./Logout.css"
import {logout,selectUser} from "../features/userSlice" ;
import { useDispatch , useSelector } from "react-redux";
const Logout = () => {
 
    const user = useSelector(selectUser);


const dispatch = useDispatch();
const handleLogout = (e) => {
    e.preventDefault();

    
    dispatch(logout());
};


    return (
        <div className="logout">
            <h1>
                welcome <span className="user__name">{user.email}</span>
            </h1> {" "}
            <button className="logout__button" onClick ={(e) => handleLogout(e)} >Logout</button>
        </div>
    );
};

export default Logout
