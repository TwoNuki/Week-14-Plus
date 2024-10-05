import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

type Props = {
  deleteRecipe: Function;
  getCurrentRecipe: Function;
};

//using recipe as a prop, displays the list of recipes as cards. will use bootstrap so no styling currently
function RecipeCard({
  deleteRecipe,
  getCurrentRecipe,
}: Props) {
  const recipeIndex = useParams()["key"];
  const [recipe, setRecipe] = useState({
    title: "",
    id: "",
    image: "",
    ingredients: [""],
    instructions: [""],
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      setRecipe(await getCurrentRecipe(recipeIndex));
    };
    fetchRecipe();
  }, []);

  console.log(recipe);
  const ingredientsList = recipe.ingredients.map((ingredient, i) => (
    <li key={i}>{ingredient}</li>
  ));
  const instructions = recipe.instructions.map((instruction, i) => (
    <li key={i}>{instruction}</li>
  ));

  return (
    <div id={recipe.id}>
      <h2>{recipe.title}</h2>

      <br></br>
      <img src={`${recipe.image}`} alt="food" />
      <h5>Ingredients</h5>
      <ul>{ingredientsList}</ul>
      <h5>Instructions</h5>
      <ul>{instructions}</ul>

      <Link to={`/${recipe.id}/update`}>
        <Button variant="success" className="updateButton">
          Update
        </Button>
      </Link>

      <Button
        variant="danger"
        className="deleteButton"
        onClick={() => deleteRecipe(recipe.id)}
      >
        Delete
      </Button>
    </div>
  );
}

export default RecipeCard;
