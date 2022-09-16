import React from 'react'
import './NavBar.css'
import axios from '../../Axios'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const NavBar = ({user, setUser}) => {
  const navigate = useNavigate();
  const handleLogout = () =>{
    axios.post('auth/logout')
    .then(() => {
      localStorage.removeItem('token')
      setUser(null);
      navigate('/', { replace: true});
    })
  }
  return (
    <ul>
        <li> <a href='/'>Home</a></li>
        {user && ( 
        <li><a href='/myrecipes'>My Recipes</a></li>
         )} 
        {!user && (
          <>
        <li><a href='/signup'>Sign Up</a></li>
        <li><a href='/login' className='last'>Login</a></li>
        </>
        )}
        {user && (
          <>
          <Pointer onClick={handleLogout} className='last'>Logout</Pointer>
          </>
        )}
    </ul>
  )
}

const Pointer = styled.li`
  cursor: pointer;
`

export default NavBar