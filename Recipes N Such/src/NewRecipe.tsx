//import React from 'react'
import { Button, Form, Modal } from "react-bootstrap"
import { Recipe } from "./assets/RecipeDB"
import React, { useId, useState } from "react"

type Props = {
  setRecipes: Function
  recipes: Array<Recipe>
  setToggle: Function
  isToggled: Boolean
}


//component to create the form to add a recipe

function NewRecipe({ recipes, setRecipes, setToggle, isToggled }: Props) {

  const id = useId()
  const handleToggle = () => {
    setToggle(!isToggled);
  }


  //modal junk
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //end modal junk

  // constants for allowing the form to take the proper values from the initial state for each value of the recipe and update them before adding them to the array

  const [formValues, setFormValues] = useState({
    'title': "",
    'cooked': false,
    'id': `${id}`,
    'ingredients': [],
    'instructions': []
  })

  const [file, setFile] = useState<string>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log(event.target.files[0])
      setFile(URL.createObjectURL(event.target.files[0]))
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setFormValues({
    ...formValues,
    [event.target.name]: event.target.value
  })

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
      [event.target.name]: cleanList
    });
  }

  const submit = (event: React.MouseEvent) => {
    event.preventDefault();
    setRecipes(
      [
        ...recipes,
        {
          'title': formValues["title"],
          'cooked': formValues["cooked"],
          'id': `${id}`,
          'image': file,
          'ingredients': formValues["ingredients"],
          'instructions': formValues["instructions"]
        }
      ]
    )
    handleShow();
  }

  const handleBoolean = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked
    })
  }

  //currently commented function to possibly clear form after it is submitted so page will not have to change once filled out and submitted

  // const clearFinishedForm = () => {

  // }

  return (
    <div>

      {/* react bootstrap form that will take the information matching the values from recipes and add them to the array on submit */}

      <Form>
        <Form.Group className="mb-3" controlId="formRecipeTitle">
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control type="text" placeholder="Recipe Title" name="title" onChange={handleChange} />
          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Recipe Image</Form.Label>
          <Form.Control type="file" accept=".jpg, .jpeg, .png, .webp, .bmp" name="image" onChange={handleFileChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRecipeIngredients">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control as="textarea" rows={10} placeholder="Type Ingredients Here" name="ingredients" onBlur={handleLists} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRecipeInstructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control as="textarea" rows={10} placeholder="Type Instructions Here" name="instructions" onBlur={handleLists} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Have I Cooked This?" name="cooked" onChange={handleBoolean} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>

      </Form>


      {/* modal for giving the submit button feedback after adding a new recipe, indicates that the recipe was properly added */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recipe Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>{formValues["title"]} added to Recipes</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            handleClose();
            handleToggle();
          }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



    </div>

  )
}

export default NewRecipe