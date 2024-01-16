import React, { useState, useEffect } from 'react';
import  {useNavigate} from "react-router-dom";
const Login=()=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
            navigate('/');
        }
    },[])

    const handleLogin=async()=>{
        console.warn(email,password);
        
    let result=await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result=await result.json();
    console.warn(result);
    if(result.auth)
    {
localStorage.setItem('user',JSON.stringify(result.user));
localStorage.setItem('token',JSON.stringify(result.auth));
navigate('/');

    }
    else{
        alert("please enter correct details");
    }
    }
    return(
        <div className='login'>
<input className="inputBox" value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"/>
   
    <input className="inputBox" value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password"/>
    <button onClick={handleLogin} className="appButton" type="button">Login</button>
        </div>
    )
}
export default Login;