import logo from './logo.svg';
import './App.css';
import Logo from './Components/Logo/Logo';
import { useState, useEffect } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import NavBar from './Components/NavBar/NavBar';



function App() {

  const[recipe, setRecipe] = useState([]);
  
  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
    const data = await api.json();
    setRecipe(data.recipes);
    console.log(data);
  };
  
  return (
    <div className="App">
      <NavBar />
      <Logo />
      <Searchbar />
    {
      recipe.map((r) => {
        return(
          <div>
            <p>{r.title}</p>
          </div>

        )
      })
    }
    </div>
  );
  
}

export default App;
