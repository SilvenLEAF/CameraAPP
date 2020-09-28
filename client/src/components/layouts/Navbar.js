import M from 'materialize-css'
// import './../../styles/Navbar.scss'

import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'



function Navbar() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  return (
    <nav id="myNavbar" className="nav nav-wrapper scrollspy">
      <div className="container">

        <Link to= "/" className= "brand-logo">Job Search APP</Link>
        <div className="sidenav-trigger hide-on-large-only" data-target= "mobilenav" id="myHam">
            <div></div>   
            <div></div>
            <div></div>
        </div>




        <ul className="sidenav" id="mobilenav">
          <li><NavLink to="/" className="sidenav-close" ><i className="fa fa-home"></i>Home</NavLink></li>
          <li><NavLink to="/search" className="sidenav-close" ><i className="fa fa-search"></i>Search</NavLink></li>
          <li><NavLink to="/allJobs" className="sidenav-close" ><i className="fa fa-globe"></i>All Jobs</NavLink></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" className="sidenav-close" ><i className="fa fa-info"></i>About Me</a></li>
        </ul>





        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/search" >Search</NavLink></li>           
          <li><NavLink to="/All Jobs">All Jobs</NavLink></li>           
          <li><a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" >About Me</a></li>
        </ul>



      </div>
    </nav>
  )
}

export default Navbar
