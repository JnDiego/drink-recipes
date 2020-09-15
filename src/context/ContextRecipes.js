import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export const ContextRecipes = createContext();

const ProviderRecipes = (props) => {

  const [recipes, setRecipes] = useState([]);

  const [searchRecipes, setSearchRecipes] = useState({
    name: '',
    category: ''
  });

  const [searchState, setSearchState] = useState(false);

  const { name, category } = searchRecipes;

  useEffect(() => {
    if(searchState) {
    const getRecipes = async () => {
        const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`

        const result = await axios.get(URL);

        // console.log(result.data.drinks);
        setRecipes(result.data.drinks);
      }
      getRecipes();
    }
  }, [searchRecipes])

  return(
    <ContextRecipes.Provider
      value = {
        {
          recipes,
          setSearchRecipes,
          setSearchState
        }
      }
    >
      {props.children}
    </ContextRecipes.Provider>
  );
}

export default ProviderRecipes;