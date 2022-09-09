import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'


import React from 'react'

const ViewRecipe = () => {

    let params = useParams();
    const [details, setDetails] = useState({})

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData)
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

  return (
    <RecipeWrapper>
        <NavBar />
        <LogoWrapper>Foodle</LogoWrapper>
        <div>
            <h2>{details.title}</h2>
            <button>Add To My Recipes</button>
            <img src={details.image} alt={details.title} />
        </div>
         
            <h3>Ingredients</h3> 
            <ul>
                {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>

               <h3>Instructions</h3>       
          

                

                
      

       
  
    </RecipeWrapper>

  )
}

const LogoWrapper = styled.h1`
font-family: 'Open Sans', sans-serif;
font-weight: 600;
font-size: 75px;
color: #CC5500;
margin: 0;
display: flex;
justify-content: center;
padding-left: 43px;
}

`



const RecipeWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    h2{
        margin-bottom: 2rem;
        color: #CC5500;
    }
    h3{
        color: #CC5500;
    }
    li{
      font-size: 1.2rem;
      line0hegiht: 2.5rem  
    }
    ul{
        margin-top: 2rem
    }

`

const Recipe = styled.div`
    margin-left: 10rem;
    h3{
        color: #CC5500; 
    }
`



export default ViewRecipe