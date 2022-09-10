import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'



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
    <div>
    {/* <LogoWrapper>Foodle</LogoWrapper> */}
    <RecipeWrapper>
     
        <div>
            <h2>{details.title}</h2>
            <h4>Ready in {details.readyInMinutes} minutes</h4>
            <h4>Makes {details.servings}</h4>
            <img src={details.image} alt={details.title} /> <br/>
            <div className='button'>
                <button>Add To My Recipes</button>
            </div>
        </div>
         
            <h3>Ingredients</h3>
            
            {/* <ul>
                {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                )
                )}
           
            </ul> */}

       
               <h3>Preparation</h3>
      
               {/* <ol>
                {details.analyzedInstructions.map((instruction)=>(
                    <li key={instruction.id}>{instruction.step}</li>
                ))}
               </ol> */}

    </RecipeWrapper>
    </div>
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

    img{
        margin-top: 10px;
    }

    h2{
    
        color: #CC5500;
        margin-bottom: 5px;
    }
    h3{
        color: #CC5500;
        margin-bottom: 5px;
        text-decoration: underline;
    }

    h4{
        margin-top: 0px;
        margin-bottom: 0px;
        color: #CC5500;
    }
    li{
      font-size: 1.2rem;
      line0hegiht: 2.5rem  
    }
    ul{
        margin-top: 2rem
    }

    .button{
        display: flex;
        justify-content: center;
    }
    button{
        display: block;
        min-width: 561px;
        border: 2px solid #E18942; 
        background-color: #CC5500;
        height: 40px;
        color: white;
        font-size: 16px;
    }

`

export default ViewRecipe