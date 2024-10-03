import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import RecipeTitle from "./RecipeTitle";
import RecipeImage from "./RecipeImage";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import { Button, Form } from "react-bootstrap";
import { Recipe } from "../../RecipeDB";

type Props = {
  recipes: Array<Recipe>;
  setRecipes: Function;
  handleClose: Function;
  handleShow: Function;
  formValues: Recipe;
  setFormValues: Function;
  submit: MouseEventHandler;
  currentRecipe?: Recipe;
};

function RecipeForm(propsIn: Props) {
  const {
    setRecipes,
    recipes,
    handleClose,
    handleShow,
    formValues,
    setFormValues,
    submit,
    currentRecipe,
  } = { ...propsIn };
  // constants for allowing the form to take the proper values from the initial state for each value of the recipe and update them before adding them to the array

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log(event.target.files[0]);
      setFormValues({
        ...formValues,
        [event.target.name]: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });

  const handleLists = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    let list = text.split(String.fromCharCode(10));
    let cleanList: string[] = [];
    list.forEach((Element: string) => {
      if (Element) {
        cleanList.push(Element);
      }
    });
    setFormValues({
      ...formValues,
      [event.target.name]: cleanList,
    });
  };

  const handleBoolean = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      {/* react bootstrap form that will take the information matching the values from recipes and add them to the array on submit */}

      <Form>
        {/* {currentRecipe ? <RecipeTitle title={currentRecipe.title} handleChange={handleChange}/> : <RecipeTitle handleChange={handleChange} />} */}

        <RecipeTitle title={currentRecipe?.title} handleChange={handleChange} />

        <RecipeImage
          image={currentRecipe?.image}
          handleFileChange={handleFileChange}
        />

        <RecipeIngredients
          ingredients={currentRecipe?.ingredients}
          handleLists={handleLists}
        />

        <RecipeInstructions
          instructions={currentRecipe?.instructions}
          handleLists={handleLists}
        />

        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default RecipeForm;
