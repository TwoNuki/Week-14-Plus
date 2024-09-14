//import React from 'react'
import { MouseEvent, ChangeEvent } from 'react'
import { Recipe } from "./assets/RecipeDB"




type Props = {
    recipe:Recipe
    setRecipes: Function
    recipes: Array<Recipe>
}
//let imagePath = 'images/';


//using recipe as a prop, displays the list of recipes as cards. will use bootstrap so no styling currently
function RecipeCard({recipe, recipes, setRecipes}: Props) {

    const ingredientsList = recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>);
    const instructions = recipe.instructions.map((instruction, i) => <li key={i}>{instruction}</li>);

    //function for the delete button to remove a recipe based on its id
  function deleteRecipe(event:MouseEvent): void {
    event.preventDefault()

    let deleteButton = event.target as HTMLButtonElement;
    let parentDiv = deleteButton.parentNode as HTMLDivElement;
    let recipeToDelete = parentDiv.id as string;

    setRecipes(
      recipes.filter(recipe => recipe.id !== recipeToDelete)
    )

  }

  //function for updating if a recupe has been cooked
  function updateCooked(event: ChangeEvent<HTMLInputElement>): void {
      const updatedRecipes = [...recipes]
      let updateButton = event.target as HTMLInputElement;
      let parentLabel = updateButton.parentNode as HTMLLabelElement;
      let parentDiv = parentLabel.parentNode as HTMLDivElement;
      let recipeid = parentDiv.id as string;

      const recipe = updatedRecipes.find(
        el => el.id === recipeid
      ) as Recipe;

      recipe.cooked = updateButton.checked;
      
      console.log(recipe.cooked);
      setRecipes(updatedRecipes);
      
  }

  //added delete button and checkbox with ternary statement to either delete a recipe or update if it's been cooked or not 
  return (
    <div id={recipe.id}>
        <h2>{recipe.title}</h2>
        <label>
        <input type='checkbox' checked={recipe.cooked} onChange={updateCooked}></input>
        {recipe.cooked ? 'Cooked' : 'Not Cooked'}</label>
        <br></br>
        <img src={`${recipe.image}`} alt="food" />
        <h5>Ingredients</h5>
        <ul>{ingredientsList}</ul>
        <h5>Instructions</h5>
        <ul>{instructions}</ul>
        
        <button onClick={deleteRecipe}>Delete</button>
    </div>
  )
}

export default RecipeCard