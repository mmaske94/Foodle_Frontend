import React from 'react'
import './Searchbar.css'
import {BsSearch} from 'react-icons/bs'


const Searchbar = () => {
  return (
  
    <div className='searchbox'>
        <BsSearch className='searchicon'/>
        <input type = 'text' placeholder='Type Ingrident Here...'/>
    
    
    </div>
   
  )
}

export default Searchbar