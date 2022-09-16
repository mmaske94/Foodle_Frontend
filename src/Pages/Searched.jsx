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
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  border: 2px solid #E18942;
  box-sizing:border-box!important;
  max-width: 300px;
 
  
 }

  img{
    width: 80%;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    margin: 0 30px 50px 30px;
  
}
h3{
  display: flex;
  justify-content: center;
  text-decoration: underline;
  color: #CC5500;
  padding: 10px;
  min-height: 70px;
  margin-bottom: 0px;
 
  padding-bottom: 0px;
  padding-top: 0px;
}
button{
  display: block;
  width: 100%;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
  border-top: 2px solid #E18942; 
  background-color: #CC5500;
  height: 40px;
  color: white;
 
  
 

  
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