
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
<nav className="navbar navbar-dark bg-dark">
  <div className="container">
    <NavLink className="navbar-brand" to = "/main/home">Home</NavLink>
   
    
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
    <Link to = '/main/add'>
<a className='btn btn-primary' role="button">+Add</a>
</Link>
  </div>
  
  
  </div>
</nav>

        </div>

    )
}

export default Navbar

