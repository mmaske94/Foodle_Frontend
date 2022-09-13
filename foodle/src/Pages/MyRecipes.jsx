import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'


const MyRecipes = ({user}) => {
  useEffect(() =>{
    // `https://api.spoonacular.com/recipes/complexSearch/id?apiKey=${process.env.REACT_APP_API_KEY}`
  })
  if(!user.favoriteRecipes.length){
    return (
    <div>
      <h2>You Don't Have Any Recipes Yet</h2>
      <ButtonWrapper><a href='/'>Add Recipes</a></ButtonWrapper>
    </div>
  )}
  return (
    <div>
      <h2>Your Recipes</h2>
    </div>
  )
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