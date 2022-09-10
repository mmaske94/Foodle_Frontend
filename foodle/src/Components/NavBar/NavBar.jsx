import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <ul>
        <li> <a href='/'>Home</a></li>
        <li>My Recipes</li>
        <li><a href='/signup'>Sign Up</a></li>
        <li><a href='/login' className='last'>Login</a></li>
    </ul>
  )
}

export default NavBar