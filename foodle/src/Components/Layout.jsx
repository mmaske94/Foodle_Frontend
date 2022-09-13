import React from 'react'
import NavBar from './NavBar/NavBar'


const Layout = ({children, user, setUser}) => {
  console.log(children)
  return (
    <div>
        <NavBar user={user} setUser={setUser}/>
        {children}
    </div>
  )
}

export default Layout