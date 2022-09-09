import React from 'react'
import Home from './Home'
import{useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import styled from 'styled-components'


const Grid = styled.div `

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 15px;

`
const Card = styled.div`
 div{
  border: 2px solid #E18942;
  border-radius: 2rem;
  max-width: 300px;
  min-height: 350px;
 }

  img{
    width: 80%;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    margin: 30px;
}
h3{
  display: flex;
  justify-content: center;
  text-decoration: underline;
  color: #CC5500;
  padding: 10px;
}
button{
  background-color: #CC5500;
  color: white;
  border-radius: 2rem;
  display: flex;
  justify-content: flex-start;
  
}
`

const Searched = () => {

    const[recipe, setRecipe] = useState([]);
    let params = useParams();
  
    const getRecipe = async (name) => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=5`
        );
      const data = await api.json();
      setRecipe(data.results);
      console.log(data);
    };

    useEffect(() => {
        getRecipe(params.search); 
      }, [params.search]);

  return (
    <div>
        <Home />
        <Grid>
        {
      recipe.map((r) => {
        return(
          <Card key={r.id}>
          
            <div>
              <h3>{r.title}</h3>
              <img src={r.image} alt={r.title} />
              <Link to={'/recipes/' + r.id}>
              <button>View Recipe</button>
              </Link>
            </div>
           
         
          </Card>

        )
      })
    }
    </Grid>
    </div>
  )
}

export default Searched