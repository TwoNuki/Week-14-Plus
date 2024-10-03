//import React from 'react'
import { Button, Modal } from "react-bootstrap";
import { Recipe } from "../RecipeDB";
import React, { useId, useState } from "react";
import RecipeForm from "./formComponents/RecipeForm";

type Props = {
  setRecipes: Function;
  recipes: Array<Recipe>;
  setToggle: Function;
  isToggled: Boolean;
};

//component to create the form to add a recipe

function NewRecipe({ recipes, setRecipes, setToggle, isToggled }: Props) {
  const id = useId();
  const handleToggle = () => {
    setToggle(!isToggled);
  };

  const [formValues, setFormValues] = useState(
    {
    title: "",
    id: `${id}`,
    ingredients: [],
    instructions: [],
    image: "",
  });

  //modal junk
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const submit = (event: React.MouseEvent) => {
    event.preventDefault();
    setRecipes([
      ...recipes,
      {
        title: formValues["title"],
        id: `${id}`,
        image: formValues['image'],
        ingredients: formValues["ingredients"],
        instructions: formValues["instructions"],
      },
    ]);
    handleShow();
  };

  //end modal junk

  //currently commented function to possibly clear form after it is submitted so page will not have to change once filled out and submitted

  // const clearFinishedForm = () => {

  // }

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
              handleToggle();
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
