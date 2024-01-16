import React, { useState } from 'react';
import { json } from 'react-router-dom';
const AddProduct=()=>{
    const [name,setName]=useState();
    const [price,setPrice]=useState();
    const [category,setCat]=useState();
    const [company,setCom]=useState();
    const [error,setError]=useState(false);
    const addProduct=async()=>{
       
if(!name||!price||!category||!company)
{
    setError(true);
    return false;
}


        const userId=JSON.parse(localStorage.getItem('user'))._id;
        
        let result=await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result=await result.json();
        console.warn(result);
    }
    return(
        <div className='product'>
        <h1>AddProduct</h1>
        <input type='text' placeholder='Enter product name' className="inputBox" value={name} onChange={(e)=>setName(e.target.value)}/>
       {error && !name && <span className='invalid-input'>Enter Valid Name</span> }

        <input type='text' placeholder='Enter product price' className="inputBox" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        {error && !price && <span className='invalid-input'>Enter Valid Price </span> }

        <input type='text' placeholder='Enter product category' className="inputBox" value={category} onChange={(e)=>setCat(e.target.value)}/>
        {error && !category && <span className='invalid-input'>Enter Valid Category</span> }

        <input type='text' placeholder='Enter product company' className="inputBox" value={company} onChange={(e)=>setCom(e.target.value)}/>
        {error && !company && <span className='invalid-input'>Enter Valid Company</span> }

        <button onClick={addProduct} className="appButton"> Add Product</button>
        </div>
    )
}  
export default AddProduct;