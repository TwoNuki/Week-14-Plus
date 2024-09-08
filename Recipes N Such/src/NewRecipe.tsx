//import React from 'react'

type Props = {}

//component to create the form to add a recipe

function NewRecipe({}: Props) {
  return (
    <div>
      <form method="post">
      <label>
    Title:
    <input name="submitted-name" />
  </label><br></br>
  <label>
    Image:
    <input type="file" accept="image/png, image/jpg" />
  </label><br></br>
  <label>
    Ingredients (Separated by commas):
    <textarea name="ingredients" />
  </label><br></br>
  <label>
    Instructions (Separated by commas):
    <input name="instructions" />
  </label>
  
  <button>Add</button>
      </form>
    </div>
  )
}

export default NewRecipe