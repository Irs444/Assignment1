
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Navbar = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/equipment/getall');
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setUserList(data);
    // setMasterList(data);
  }

  useEffect(() => {
    fetchUserData();

  }, [])

 

  const handleLogout = () => {
    sessionStorage.removeItem('main');
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand  mb-2 mb-lg-0" to="/">Home</NavLink>
          <NavLink className="navbar-brand mb-2 mb-lg-0" to="/signup">Signup</NavLink>
          <NavLink className="navbar-brand me-auto mb-2 mb-lg-0" to="/login">Login</NavLink>


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


          <div className='d-flex align-item-center'>
            <Link to='/add'>
              <a className='btn btn-primary' role="button">+Add</a>

            </Link>

            <a className='btn btn-danger ms-4' role="button" onClick={handleLogout}>Logout</a>

          </div>


        </div>
      </nav>

    </div>

  )
}

export default Navbar

