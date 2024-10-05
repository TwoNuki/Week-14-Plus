//import React from 'react'
import { Button, Modal } from "react-bootstrap";
import { Recipe } from "../RecipeDB";
import React, { useId, useState } from "react";
import RecipeForm from "./formComponents/RecipeForm";
import { useNavigate } from "react-router-dom";

type Props = {
  setRecipes: Function;
  recipes: Array<Recipe>;
  url: string;
};

//component to create the form to add a recipe

function NewRecipe({ recipes, setRecipes, url }: Props) {
  let id = useId();
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    title: "",
    id: ``,
    ingredients: [],
    instructions: [],
    image: "",
  });

  //modal junk
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postNewRecipe = async (newRecipie: Recipe) => {
    await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipie),
    });
  };

  const submit = (event: React.MouseEvent) => {
    event.preventDefault();

    let newRecipie = {
      title: formValues["title"],
      id: `${id}`,
      ingredients: formValues["ingredients"],
      instructions: formValues["instructions"],
      image: formValues["image"],
    };
    setRecipes([...recipes, newRecipie]);
    postNewRecipe(newRecipie);
    handleShow();
  };

  //end modal junk

  return (
    <div>
      <RecipeForm
        recipes={recipes}
        setRecipes={setRecipes}
        handleClose={handleClose}
        handleShow={handleShow}
        formValues={formValues}
        setFormValues={setFormValues}
        submit={submit}
      />

      {/* modal for giving the submit button feedback after adding a new recipe, indicates that the recipe was properly added */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recipe Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>{formValues["title"]} added to Recipes</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              navigate("/");
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewRecipe;
