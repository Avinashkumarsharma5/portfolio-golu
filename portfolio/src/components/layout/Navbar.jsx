import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
function navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
<li>Home</li>
<li>About Me</li>
<li>Services</li>
<li>Portfolio</li>
<li>contact</li>
</ul>
<div className="nav-connect">connect with me</div>
    </div>
  )
}

export default navbar