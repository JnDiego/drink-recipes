import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

// Create context
export const ContextCategories = createContext();

// Provider is where functions and state are found
const ProviderCategories = (props) => {
  // Create state of Context
  const [categories, setCategories] = useState([]);

  //Fetch API
  useEffect(() => {
    const fetchCategories = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const categories = await axios.get(url);
      setCategories(categories.data.drinks);
    }
    fetchCategories();
  }, [])

  return (
    <ContextCategories.Provider
      value={{categories}}
    >
      {props.children}
    </ContextCategories.Provider>
  )

}

export default ProviderCategories;
