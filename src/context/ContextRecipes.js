import React, { createContext, useState } from 'react'

export const ContextRecipes = createContext();

const ProviderRecipes = (props) => {

  const [recipe, setRecipe] = useState([]);

  const [searchRecipes, setSearchRecipes] = useState({
    name: '',
    category: ''
  });

  return(
    <ContextRecipes.Provider
      value = {
        {setSearchRecipes}
      }
    >
      {props.children}
    </ContextRecipes.Provider>
  );
}

export default ProviderRecipes;