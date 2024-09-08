//import React from 'react'
import RecipeCard from './RecipeCard'
import Recipes from './assets/RecipeDB'

//mapping over the array of objects in RecipeDB to make the list of cards
const RenderedRecipes = Recipes.map((recipe, i) => <tr key={i}><td><RecipeCard recipe={recipe} key={i} /></td></tr>);

//function to display the recipes
function RecipeList() {
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