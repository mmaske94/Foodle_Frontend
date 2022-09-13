
import './App.css';
import Layout from './Components/Layout'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Searched from './Pages/Searched'
import ViewRecipe from './Pages/ViewRecipe';
import MyRecipes from './Pages/MyRecipes'
import {useState, useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import axios from './Axios'

function App() {
  const [user, setUser] = useState();

  useEffect(()=>{
    axios.post('auth/auto').then(({data}) => setUser(data))
    console.log(user)
  }, [])
return (

      <Layout user={user} setUser={setUser}>

      <Routes>
        <Route path ='/signup' element={<SignUp setUser={setUser}/>}/>
        <Route path ='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/' element={<Home />}/>
        <Route path='/searched/:search'element={<Searched />} />
        <Route path='/recipes/:name' element={<ViewRecipe user={user}/>} />
        { user && (
        <Route path='/myrecipes' element={<MyRecipes user={user}/>} />
        )}
      </Routes>

    </Layout>
  );
  
}

export default App;
