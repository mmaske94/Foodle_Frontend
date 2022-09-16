import React from 'react'
import axios from '../Axios'
import {useState} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const SignUp = ({setUser}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   

    const handleSignup = (e) => {
      e.preventDefault();
      if(!email  || !password){
        return alert('Please Fill Out The Appropriate Fields');
      }
      axios.post('/auth/users', {email, password})
      .then(({data}) => {
        localStorage.setItem('token', data.token);
        setUser(data);
        navigate('/', { replace: true});
    })
      .catch(err => console.log(err))
    }

  return (
    <div>
        <WelcomeSignUpWrapper>
          <h1>Foodle</h1>
        </WelcomeSignUpWrapper>

        <SignUpWrapper>
        <form onSubmit={handleSignup}>
        
       
            <input 
            className='input'
            type='email' 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            placeholder='Email'
            required
            /><br/>

            <input 
            className='input'
            type='password'
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            placeholder='Password'
            required
            /><br/>
         

          <div>
            <button>Sign Up</button>
           </div>
        </form>
        </SignUpWrapper>
     
    </div>
  )
}


const WelcomeSignUpWrapper = styled.div`

 margin-top: 150px;
 display: flex;
 justify-content: center;



h1{
font-family: 'Open Sans', sans-serif;
font-weight: 600;
font-size: 75px;
color: #CC5500;
margin: 0px;
margin-left: 32px;


}

`

const SignUpWrapper = styled.div`
margin-top:0;
display: flex;
justify-content: center;

div{
  margin-left: 20px;
}
.input{

  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  border: solid 1px #E18942;
  padding-left: 10px;
  border-radius: 25px;
  width: 100%;
  outline: none;
  margin: 7px;
}



button{
  background-color: #CC5500;
  color: white;
  border: 1px solid #63666A;
  border-radius: 2rem;
  width: 100%;
  font-size: 16px;
  margin: 3px;
 
}
`
export default SignUp