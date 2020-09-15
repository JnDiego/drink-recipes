import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ContextModal } from '../context/ContextModal'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { CircularProgress } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll',
    height: '100%',
    maxHeight: 800,
    display: 'block'
    },
}));

const Recipe = ({ recipe }) => {

  // Modal Config
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const { recipeInfo, setRecipeID, setRecipeInfo } = useContext(ContextModal);

  //Show and format ingredients
  const showIngredients = information => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (information[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {information[`strIngredient${i}`]} {information[`strMeasure${i}`]}
          </li>
        )
      }
    }
    return ingredients;
  }

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
              handleOpen()
            }}
          >
            View Recipe
          </button>

          <Modal
            open={open}
            onClose={() => {
              setRecipeID(null);
              handleClose();
              setRecipeInfo({});
            }}
          >

            <div style={modalStyle} className={classes.paper}>
              <h2>{recipeInfo.strDrink}</h2>
              <h3 className="mt-4">Instructions</h3>
              <p>
                {recipeInfo.strInstructions}
              </p>
              <img src={recipeInfo.strDrinkThumb} alt={`${recipeInfo.strDrink} detail`} className="img-fluid my-4" />

              <h3>Ingredients and measures</h3>
              <ul>
                {showIngredients(recipeInfo)}
              </ul>
            </div>

          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Recipe
