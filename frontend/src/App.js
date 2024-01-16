import React  from 'react';
import Nav from './compotents/Nav';
import  './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Footer from './compotents/Footer';
import SignUp from './compotents/SignUp';
import PrivateComponent from './compotents/PrivateComponent'
import Login from './compotents/Login';
import AddComponent from './compotents/AddProduct';
import ProductList from './compotents/ProductList';
import UpdateProduct from './compotents/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Nav/>
      <Routes>

        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/add' element={<AddComponent/>}></Route>
        <Route path='/update/:id' element={<UpdateProduct/>}></Route>
        <Route path='/logout' element={<h1>Logout Component</h1>}></Route>
        <Route path='/profile' element={<h1>Profile Component</h1>}></Route>
        </Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
