import React, { useEffect } from "react";
import { useState } from "react";
import  {useNavigate} from "react-router-dom";
const SignUp=()=>{
const [name,setName]=useState("");
const [password,setPassword]=useState("");
const [email,setEmail]=useState("");
const navigate=useNavigate();

useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth)
    {
        navigate('/');
    }
},[])

const colletData=async()=>{
    console.warn(name,email,password);

    let result=await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result=await result.json();
    console.warn(result);
    
        navigate('/');
    localStorage.setItem('user',JSON.stringify(result.result));
    localStorage.setItem('token',JSON.stringify(result.auth));


}

    return(
<div className='register'>
    <h1>SignUp</h1>
    <input className="inputBox" value={name} type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"/>
    <input className="inputBox" value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"/>
    <input className="inputBox" value={password} type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password"/>
    <button onClick={colletData} className="appButton" type="button">SignUp</button>
</div>
    )
}
export default SignUp;