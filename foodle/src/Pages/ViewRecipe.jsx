import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from '../Axios'
import React from 'react'


const ViewRecipe = ({user}) => {

    let params = useParams();
    const [details, setDetails] = useState({})
   

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData)
    };

    const handleAddToRecipes = () => {
        // axios.post('/addToRecipes', {detailDataID: detailData.id})
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchDetails();
    }, [params.name]);

  return ( 
    <div>
    <RecipeWrapper>
     
        <div>
            <h2>{details.title}</h2>
            <h4>Ready in {details.readyInMinutes} minutes</h4>
            <h4>Makes {details.servings}</h4>
            <img src={details.image} alt={details.title} /> <br/>
           
           {user && (
            <div className='button'>
         
                <button onClick={handleAddToRecipes}>Add To My Recipes</button>
              
            </div>
         )}  
        </div>
    </RecipeWrapper>

    <OtherWrapper>
         
            <h3>Ingredients</h3>

                 { <ul className='unordered'>
                {details.extendedIngredients?.map((ingredient) => (
                    <li  className='bullets' key={ingredient.id}>{ingredient.original}</li>
                )
                )}
           
            </ul>} <br/>
       
               <h3>Preparation</h3>

               {
                <ol className='ordered'>
                    {details.analyzedInstructions?.map((instructions)=>(
                      instructions.steps?.map((instruction) => (
                       <li className='bulletss' key={instruction.id}>{instruction.step}</li> 
                    ))))}
                </ol>
               }
      
             

    </OtherWrapper>

 
    </div>
  )
}

const OtherWrapper = styled.div`
.unordered{
    display: flex;
    flex-direction: column;
    padding-left: 425px;
}
h3{
    display: flex;
    justify-content: center;
    color: #CC5500;
    margin-bottom: 5px;
    text-decoration: underline;
}

.bullets{
    list-style-position: initial;
    list-style-image: initial;
    list-style-type: circle;
    padding-left: 0px;
    font-size: 16px;
   
}

.bulletss{
    list-style-type: number;
    padding-left: 0px;
    font-size: 16px;
}

.ordered{
    display: flex; 
    flex-direction: column;
    padding-left: 425px;
}
`



const RecipeWrapper = styled.div`
display: flex;
justify-content: center;

    img{
        margin-top: 10px;
    }

    h2{
    
        color: #CC5500;
        margin-bottom: 5px;
        display: flex;
        justify-content: center;
    }
   

    h4{
        margin-top: 0px;
        margin-bottom: 0px;
        color: #CC5500;
        display: flex;
        justify-content: center;
    }
    li{
      font-size: 1.2rem;
      line0hegiht: 2.5rem  
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