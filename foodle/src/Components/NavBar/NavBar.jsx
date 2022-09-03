import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <ul>
        <li>Welcome User</li>
        <li>Home</li>
        <li>My Recipes</li>
        <li className='last'>Sign Out</li>
    </ul>
  )
}

export default NavBar