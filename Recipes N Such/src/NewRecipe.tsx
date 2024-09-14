//import React from 'react'
import { Recipe } from "./assets/RecipeDB"

import { useId } from "react"

type Props = {
  setRecipes: Function
  recipes: Array<Recipe>
  setToggle: Function
  isToggled: Boolean
}


//component to create the form to add a recipe

function NewRecipe({recipes, setRecipes, setToggle, isToggled}: Props) {

  const id = useId()
  const handleToggle = () => {
    setToggle(!isToggled);
}
  //temp function to add tamales to list because of lack of dynamic form
  function addNewItem(): void {

    //adding recipe to the array and using the spread method to set the state to a copy of the array with new item added
    
    setRecipes(
      [
        ...recipes, 
        {
          'title': "Tamales with Assorted Dips", 
          'cooked': false, 
          'id': `${id}`, 
          'image': "/images/Tamales.jpg", 
          'ingredients': ['2 pounds tomato', 
            '8 ounces onion', 
            '12 stalks fresh cilantro', 
            '1 teaspoon chopped garlic', 
            '8 ounces canned, diced chilies, undrained', 
            '1 cup water', 
            '1/2 cup olive oil', 
            '1 cup chicken broth', 
            '2 cups maseca flour', 
            '12 ounces shredded, cooked pork', 
            '16 corn husks', 
            'assorted dips'], 
          'instructions': [
            'Separate corn husks and soak in a large bowl of water. A heavy plate can be used to keep husks submerged.', 
            'Dice tomatoes, onion and cilantro. Place in a saucepan with a lid. Add garlic, canned chilies and water.', 
            'Heat to boiling, cover and reduce heat to low.', 
            'Pour olive oil and chicken broth into a mixing bowl. Add flour cup at a time and mix with a fork to form a soft dough.', 
            'Pour salsa into a colander to drain. Place in a blender and puree.', 
            'Remove corn husks from water and dry with a paper towel.', 
            'With you fingers, spread masa dough in the center of the corn husk leaving inch of the side edges and 1 inches of the top and bottom edges uncovered.', 
            'Spread 1 teaspoon salsa down the center of the dough. Top with shredded pork.', 
            'Roll corn husk into a cylinder. Tie both ends.', 
            'Place rolled tamales in a steamer basket. Heat water under basket to boiling. Cover and reduce heat to medium. Steam for one hour. Add additional water if necessary.', 
            'Tamales are done when the masa dough no longer sticks to the corn husk.', 
            'Serve with assorted dips.'
          ]
      }
      ]
    )
    alert('Added Tamales');
    handleToggle();
  }

  return (
    <div>
      {/* <form method="post">
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
  </form> */}

  {/* changed form temporarily to a button that adds tamales to the list */}
  <button onClick={addNewItem}>Add</button>
      
    </div>
  )
}

export default NewRecipe