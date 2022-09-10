import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const Login = (setUser) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 

  function handleLogin(e){
    e.preventDefault();
    if(!email  || !password){
      return alert('Please Fill Out The Appropriate Fields')
    }
    axios.post('http://localhost:4000/login', {email, password})
    .then(({data}) => {
      localStorage.setItem('token',data.token);
      setUser(data);
      navigate('/');
    })
    .catch(err => console.log(err));
  }
  return (
    <div>
        <WelcomeLoginWrapper>
          <h1>Foodle</h1>
        </WelcomeLoginWrapper>
         
         
        <InputLoginWrapper>
        <form onSubmit={handleLogin}>
            <input 
            className='input'
             type='email' 
             onChange={(e) => setEmail(e.target.value)} 
             value={email} 
             placeholder='Email'
             required/><br/>

            <input 
            className='input'
            type='password'
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            placeholder='Password'
            required/><br/>

            <button>Login</button>

        </form>
        </InputLoginWrapper>
    </div>
  )
}



const WelcomeLoginWrapper = styled.div`

 margin-top: 150px;

h1{
font-family: 'Open Sans', sans-serif;
font-weight: 600;
font-size: 75px;
color: #CC5500;
margin: 0px;
margin-left: 15px;


}

`

const InputLoginWrapper = styled.div`
margin-top:0;

.input{

  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  border: solid 1px #E18942;
  padding-left: 10px;
  border-radius: 25px;
  width: 20%;
  outline: none;
  margin: 7px;
}

button{
  background-color: #CC5500;
  color: white;
  border: 1px solid #63666A;
  border-radius: 2rem;
  width: 10%;
  font-size: 16px;
  margin: 3px;
}
`



export default Login