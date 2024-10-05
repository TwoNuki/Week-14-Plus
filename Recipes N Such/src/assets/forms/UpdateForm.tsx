//import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Recipe } from "../RecipeDB";
import React, { useEffect, useState } from "react";
import RecipeForm from "./formComponents/RecipeForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Props = {
  setRecipes: Function;
  recipes: Array<Recipe>;
  url: string;
  getCurrentRecipe: Function;
};

// gets the initial state to show the form on the page
const UpdateForm = ({ recipes, setRecipes, url, getCurrentRecipe }: Props) => {
  const navigate = useNavigate();
  const recipeIndex = useParams()["key"];
  const [recipe, setRecipe] = useState({
    title: "",
    id: "",
    image: "",
    ingredients: [""],
    instructions: [""],
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // populates the form with the info from the currently selected recipe
  useEffect(() => {
    const fetchRecipe = async () => {
      setRecipe(await getCurrentRecipe(recipeIndex));
    };
    fetchRecipe();
  }, []);

  const updateRecipe = async (recipe: Recipe) => {
    await fetch(`${url}/${recipeIndex}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    //setReload(result);
  };

  //return to card

  const submit = (event: React.MouseEvent) => {
    event.preventDefault();
    let updatedRecipe = {
      title: recipe["title"],
      id: `${recipeIndex}`,
      ingredients: recipe["ingredients"],
      instructions: recipe["instructions"],
      image: recipe["image"],
    };

    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === recipeIndex) {
        return updatedRecipe;
      } else {
        return recipe;
      }
    });

    setRecipes(updatedRecipes);
    handleShow();
    updateRecipe(updatedRecipe);
  };

  return (
    <>
      <RecipeForm
        recipes={recipes}
        setRecipes={setRecipes}
        handleClose={handleClose}
        handleShow={handleShow}
        formValues={recipe}
        setFormValues={setRecipe}
        currentRecipe={recipe}
        submit={submit}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recipe Updated</Modal.Title>
        </Modal.Header>
        <Modal.Body>{recipe["title"]} has been updated!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              navigate(`/${recipeIndex}`);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateForm;
