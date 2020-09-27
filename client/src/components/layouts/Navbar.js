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

        <Link to= "/" className= "brand-logo">SilvenLEAF</Link>
        <div className="sidenav-trigger hide-on-large-only" data-target= "mobilenav" id="myHam">
            <div></div>   
            <div></div>
            <div></div>
        </div>




        <ul className="sidenav" id="mobilenav">
          <li><NavLink to="/" className="sidenav-close" ><i className="fa fa-cogs"></i>Skills</NavLink></li>
          <li><NavLink to="/" className="sidenav-close" ><i className="fa fa-paint-brush"></i>Works</NavLink></li>
          <li><NavLink to="/" className="sidenav-close" ><i className="fa fa-envelope"></i>Contact Me</NavLink></li>
          <li><NavLink to="/" className="sidenav-close" ><i className="fa fa-info"></i>About Me</NavLink></li>
        </ul>





        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/" >Skills</NavLink></li>
          <li><NavLink to="/" >Works</NavLink></li>           
          <li><NavLink to="/">Contact Me</NavLink></li>           
          <li><NavLink to="/">About Me</NavLink></li>
        </ul>



      </div>
    </nav>
  )
}

export default Navbar
