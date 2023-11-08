
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import useUserContext from '../../context/UserContext';

const Navbar = () => {
  
  const navigate = useNavigate();
  const { loggedIn, logout } = useUserContext();
  console.log(loggedIn);
   
  const showLoggedin = () => {
    if(loggedIn){
      return(
        <>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" >Social Gallery</NavLink>
        </li>
        </ul>
          {/* <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </ul> */}
        
      

        <div className='d-flex align-item-center ms-auto'>

       
        <Link to='/add'>
          <a className='btn btn-primary' role="button">+Add</a>

        </Link>

        <a className='btn btn-danger ms-4' role="button" onClick={logout}>Logout</a>
       
      </div>
      
      
        </>
        
      );
    } else {
      return <>
        {/* <NavLink className="navbar-brand  mb-2 mb-lg-0" to="/">Home</NavLink> */}
          <NavLink className="navbar-brand mb-2 mb-lg-0" to="/signup">Signup</NavLink>
          <NavLink className="navbar-brand me-auto mb-2 mb-lg-0" to="/login">Login</NavLink>
          
      </>
    }
  };

  
 

  const handleLogout = () => {
    sessionStorage.removeItem('main');
    navigate('/login');
  }


  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          {/* <NavLink className="navbar-brand  mb-2 mb-lg-0" to="/">Home</NavLink> */}
          {/* <NavLink className="navbar-brand mb-2 mb-lg-0" to="/signup">Signup</NavLink>
          <NavLink className="navbar-brand  mb-2 mb-lg-0" to="/login">Login</NavLink>
          <NavLink className="navbar-brand me-auto mb-2 mb-lg-0" to="/image">Image</NavLink> */}


          {/* <form className="d-flex input-group w-auto">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0" id="search-addon">
        <i className="fas fa-search" />
      </span>
    </form> */}


          {/* <div className='d-flex align-item-center'>
            <Link to='/add'>
              <a className='btn btn-primary' role="button">+Add</a>

            </Link>

            <a className='btn btn-danger ms-4' role="button" onClick={handleLogout}>Logout</a>

          </div> */}

         {showLoggedin()}
        </div>
      </nav>

    </div>

  )
}

export default Navbar

