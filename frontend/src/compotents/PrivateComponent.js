import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";


const PrivateComponent=()=>{
    
    const auth=localStorage.getItem('user');
    
    return auth?<Outlet/>:<Navigate to="/signup"/>
}
export default PrivateComponent;