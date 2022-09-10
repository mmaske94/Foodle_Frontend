import React from 'react'
import {useState} from 'react'
import Layout from '../Components/Layout'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import Searched from './Searched'
import ViewRecipe from './ViewRecipe'
import {Route, Routes} from 'react-router-dom'


const Pages = () => {
  const [user, setUser] = useState()

  return (
    <Layout user={user}>

    <Routes>
        <Route path='/signup' element={<SignUp setUser={setUser}/>} />
        <Route path = '/login' element={<Login setUser={setUser}/>} />
        <Route path='/' element={<Home />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipes/:name' element={<ViewRecipe/>} />
    </Routes>
    </Layout>
)

}

export default Pages;