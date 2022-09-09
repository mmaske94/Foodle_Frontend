import React from 'react'
import Home from './Home'
import Searched from './Searched'
import ViewRecipe from './ViewRecipe'
import {Route, Routes} from 'react-router-dom'


const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipes/:name' element={<ViewRecipe/>} />
    </Routes>
  )
}

export default Pages