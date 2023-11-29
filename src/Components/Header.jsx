import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <div>
    <div className='nav'>
      <div className='navbar'>
        <div className='logo'>
            <h1>Your<span>Logo</span></h1>
        </div>
        <div className='head'>
            <li> <Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contect'>Contect</Link></li>
            <li>Github</li>
        </div>
        <div className='buttons'>
            <button>Login</button>
            <button><span>GetStarted</span></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
