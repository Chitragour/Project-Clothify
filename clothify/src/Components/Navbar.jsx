import { Link } from "react-router-dom";
import React, { useState } from 'react';
import clothifyLogo from '../Images/Clogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../Css/Navbar.css';

export default  function Navbar ()
{
  const handleLogout=()=>{
    setisloggedin(false)
   }
   const handleLogin=()=>{
       setisloggedin(true)
     }
   const[isLoggedIn,setisloggedin]=useState(false)
    const [name,setname]=useState(sessionStorage['userName'])
  return(
    <nav className="navbar">
    <div className="nav-left">
     
      <img src={clothifyLogo} alt="Clothify Logo" className="logo" width={450} height={150} />
    </div>
    <ul className="nav-list">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/registration">Sign Up</Link></li>
    
      {isLoggedIn ? <b>{ sessionStorage['username']  }</b>:""}
      <li className="dropdown">
        <span className="account-link"><FontAwesomeIcon icon={faUser} className="profile-icon" /></span>
        <div className="dropdown-content">
          {!isLoggedIn? (
            <div>
             
               <Link to="/login" onClick={handleLogin}>Login</Link>
            </div>
          ) : (
            <>
              <Link to="/profile">
                Profile <FontAwesomeIcon icon={faUser} className="profile-icon" />
              </Link>
              <Link to="/PickUpPersonfeedback">PickupPerson Feedback</Link>
              <Link to="/signout" onClick={handleLogout}>
                Sign Out
              </Link>
            </>
          )}
        </div>
      </li>
    </ul>
  </nav>
    
  )
}