import React, { createContext } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export const ContextModal = createContext();

const ProviderModal = (props) => {

  const [recipeID, setRecipeID] = useState(null);
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    const getRecipeDetails = async () => {
      if (!recipeID) return;

      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeID}`;

      const result = await axios.get(URL);
      setRecipe( result.data.drinks[0]);
    }
    getRecipeDetails();
  }, [recipeID])

  return (
    <ContextModal.Provider
      value={{
        setRecipeID
      }}
    >
      {props.children}
    </ContextModal.Provider>
  )
}

export default ProviderModal;