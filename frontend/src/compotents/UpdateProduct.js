import React, { useEffect, useState } from 'react';
import { json, useParams,useNavigate } from 'react-router-dom';
const UpdateProduct=()=>{
    const [name,setName]=useState();
    const [price,setPrice]=useState();
    const [category,setCat]=useState();
    const [company,setCom]=useState();
   const params=useParams();
const navigate=useNavigate();
useEffect(()=>{
  getProductDetails(); 
},[])

const getProductDetails=async ()=>{
    let result=await fetch(`http://localhost:5000/product/${params.id}`,{
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
    result=await result.json();
    setName(result.name);
    setPrice(result.price);
    setCat(result.category);
    setCom(result.company);
}

    const updateProduct=async()=>{
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json', 
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result=await result.json();
        console.warn(result);
        navigate('/');
    }
    return(
        <div className='product'>
        <h1>UpdateProduct</h1>
        <input type='text' placeholder='Enter product name' className="inputBox" value={name} onChange={(e)=>setName(e.target.value)}/>
       

        <input type='text' placeholder='Enter product price' className="inputBox" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        
        <input type='text' placeholder='Enter product category' className="inputBox" value={category} onChange={(e)=>setCat(e.target.value)}/>
        

        <input type='text' placeholder='Enter product company' className="inputBox" value={company} onChange={(e)=>setCom(e.target.value)}/>
        

        <button onClick={updateProduct} className="appButton"> Add Product</button>
        </div>
    )
}
export default UpdateProduct;