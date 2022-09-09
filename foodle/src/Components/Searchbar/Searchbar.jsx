import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Searchbar.css'
import {BsSearch} from 'react-icons/bs'


const Searchbar = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)

  }

  return (
  
    <form className='searchbox' onSubmit={submitHandler}>
        <BsSearch className='searchicon'/>
        <input onChange={(e) => setInput(e.target.value)} type = 'text' placeholder='Type Ingrident Here...' value={input} />
      
    </form>
   
  )
}

export default Searchbar