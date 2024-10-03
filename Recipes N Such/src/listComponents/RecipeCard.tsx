import { MouseEvent } from "react";
import { Recipe } from "../assets/RecipeDB";

type Props = {
  recipe: Recipe;
  setRecipes: Function;
  recipes: Array<Recipe>;
};

//using recipe as a prop, displays the list of recipes as cards. will use bootstrap so no styling currently
function RecipeCard({ recipe, recipes, setRecipes }: Props) {
  console.log(recipe.ingredients);
  console.log(recipe.instructions);
  const ingredientsList = recipe.ingredients.map((ingredient, i) => (
    <li key={i}>{ingredient}</li>
  ));
  const instructions = recipe.instructions.map((instruction, i) => (
    <li key={i}>{instruction}</li>
  ));

  //function for the delete button to remove a recipe based on its id
  function deleteRecipe(event: MouseEvent): void {
    event.preventDefault();

    let deleteButton = event.target as HTMLButtonElement;
    let parentDiv = deleteButton.parentNode as HTMLDivElement;
    let recipeToDelete = parentDiv.id as string;

    setRecipes(recipes.filter((recipe) => recipe.id !== recipeToDelete));
  }

  //function for updating if a recupe has been cooked
  // function updateCooked(event: ChangeEvent<HTMLInputElement>): void {
  //   const updatedRecipes = [...recipes]
  //   let updateButton = event.target as HTMLInputElement;
  //   let parentLabel = updateButton.parentNode as HTMLLabelElement;
  //   let parentDiv = parentLabel.parentNode as HTMLDivElement;
  //   let recipeid = parentDiv.id as string;

  //   const recipe = updatedRecipes.find(
  //     el => el.id === recipeid
  //   ) as Recipe;

  //   recipe.cooked = updateButton.checked;

  //   setRecipes(updatedRecipes);

  // }

  //added delete button and checkbox with ternary statement to either delete a recipe or update if it's been cooked or not

  //TO DO:
  //add preview recipe cards to main page, with routes to the complete recipe when someone clicks on a button in the preview card. (contains title, image, first few ingredients)

  return (
    <div id={recipe.id}>
      <h2>{recipe.title}</h2>

      {/* TO DO: replace checkbox with a form that would allow for the recipe information itself to be updated */}

      <br></br>
      <img src={`${recipe.image}`} alt="food" />
      <h5>Ingredients</h5>
      <ul>{ingredientsList}</ul>
      <h5>Instructions</h5>
      <ul>{instructions}</ul>

      {/* <button onClick={updateRecipe}>Update</button> */}
      <button onClick={deleteRecipe}>Delete</button>
    </div>
  );
}

export default RecipeCard;
