import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img className='logo' alt='logo' src='data:image/png;base64,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'/>
            {
                    auth? <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">add</Link></li>
                <li><Link to="/update">update</Link></li>
                
                <li><Link to="/profile">profile</Link></li>
                <li><Link onClick={logout} to="/signup ">logout ({JSON.parse(auth).name}) </Link></li>
                </ul>
                  :
                <ul className='nav-ul nav-right'>
                     
                
                    <li> <Link to="/signup">signup</Link></li>
                    <li><Link to="/login">login</Link></li> 
                    
                </ul>
            }
        </div>
    )
}
export default Nav;