//import React from 'react'

type Recipe =     {
    title: string, 
    id: string, 
    image: string, 
    ingredients: Array<string>, 
    instructions: Array<string>
}

type Props = {
    recipe:Recipe, 
    key:Number
}
//let imagePath = 'images/';


//using recipe as a prop, displays the list of recipes as cards. will use bootstrap so no styling currently
function RecipeCard({recipe}: Props) {

    const ingredientsList = recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>);
    const instructions = recipe.instructions.map((instruction, i) => <li key={i}>{instruction}</li>)

  return (
    <div id={recipe.id}>
        <h2>{recipe.title}</h2>
        <img src={`${recipe.image}`} alt="food" />
        <h5>Ingredients</h5>
        <ul>{ingredientsList}</ul>
        <h5>Instructions</h5>
        <ul>{instructions}</ul>
        
    </div>
  )
}

export default RecipeCard