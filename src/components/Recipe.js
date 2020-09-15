import React from 'react'
import { useContext } from 'react'
import { ContextModal } from '../context/ContextModal'

const Recipe = ({ recipe }) => {

  const { setRecipeID } = useContext(ContextModal);


  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">
          {recipe.strDrink}
        </h2>

        <img
          src={recipe.strDrinkThumb}
          alt={`${recipe.strDrink} recipe`}
          className="card-img-top"
        />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setRecipeID(recipe.idDrink)
            }}
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Recipe
