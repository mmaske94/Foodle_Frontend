import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'


const MyRecipes = ({user}) => {

  const [favorites, setFavorites] = useState([]);

 let id = user.favoriteRecipes[0]

  useEffect(() =>{
   if (user.favoriteRecipes.includes(id)){
 console.log(id)
//   fetch(
//    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
//    )
//  .then((id) => id.json())
//  setFavorites(id);
//   console.log(favorites)
   }
});
  // Promise.all(requests).then((res) => setFavorites(res));
  // console.log(favorites)


      
  //   }

  //   let data = []

  //   user.favoriteRecipes?.forEach ( async (favorite) => {
  //   // const fetchData = new Promise(resolve => {
  //   //     fetch(
  //   //          `https://api.spoonacular.com/recipes/${favorite}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  //   //         )
  //   //     .then((res) => res.json())
  //   //     .then(response => {
  //   //         resolve(response)
  //   //     })
  //   //   }) 
  //     const fetchData = await fetch(
  //           `https://api.spoonacular.com/recipes/${favorite}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  //         )
  //       const res = fetchData.json()
  //   data.push(res)
    
  
    
  //   setFavorites(Promise.all(data).then(res => res))

   



  if(!user.favoriteRecipes.length){
    return (
    <div>
      <h2>You Don't Have Any Recipes Yet</h2>
      <ButtonWrapper><a href='/'>Add Recipes</a></ButtonWrapper>
    </div>
  );
}

  return (
    <div>
      <h2>Your Recipes</h2>
    {/* <h1>{favorites.title}</h1> */}
    </div>
  );
}


const ButtonWrapper = styled.button`

  background-color: #CC5500;
  border: 1px solid #63666A;
  border-radius: 2rem;
  width: 30%;
  font-size: 16px;

  a{
    color: white;
  }
`

export default MyRecipes