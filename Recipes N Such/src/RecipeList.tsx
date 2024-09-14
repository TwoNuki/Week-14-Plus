//import React from 'react'
import RecipeCard from './RecipeCard'
//import Recipes from './assets/RecipeDB'
import { Recipe } from "./assets/RecipeDB"


type Props = {
  setRecipes: Function
  recipes: Array<Recipe>
}

//function to display the recipes
function RecipeList({recipes, setRecipes}:Props) {

//mapping over the array of objects in RecipeDB to make the list of cards
//let recipe:Recipe;
const RenderedRecipes = recipes.map((recipe, i) => <tr key={i}><td><RecipeCard recipe={recipe} key={i} recipes={recipes} setRecipes={setRecipes} /></td></tr>);
// console.log(recipes);
// console.log(RenderedRecipes);

  return (
    <div>
        <h3>My Recipes</h3>
         <table>
            <tbody>
            {RenderedRecipes}
            </tbody>
        </table>
       
    </div>
  )
}

export default RecipeList