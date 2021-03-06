import React, { useContext, useState } from 'react'
import { ContextCategories } from '../context/ContextCategories'
import { ContextRecipes } from '../context/ContextRecipes';

const Form = () => {

  const [search, setSearch] = useState({
    name: '',
    category: ''
  });

  const { categories } = useContext(ContextCategories);
  const { setSearchRecipes, setSearchState } = useContext(ContextRecipes);

  // Function to read contents
  const getRecipeData = e => {
    setSearch({
      ...search,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setSearchRecipes(search);
    setSearchState(true);
  }

  return (
    <form
      className="col-12"
      onSubmit={onSubmit}
    >
      <fieldset className="text-center">
        <legend>Search drinks by category or ingredient</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input type="text" name="name" className="form-control" placeholder="Search by ingredient" onChange={getRecipeData}/>
        </div>
        <div className="col-md-4">
          <select className="form-control" name="category" onChange={getRecipeData}>
            <option value="">--Select category--</option>
            {categories.map(category => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input type="submit" className="btn btn-block btn-primary" value="Search drinks"/>
        </div>
      </div>
    </form>
  )
}

export default Form
