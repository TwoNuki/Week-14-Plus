//import React from "react";
import { Recipe } from "../assets/RecipeDB"; 
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  recipe: Recipe;
  deleteRecipe: Function; 
  setRecipes: Function;
  url: string;
};

//displays a shortened card version of a recipe on the RecipeList page with buttons to either view the full recipe, or delete the recipe

function ShortCard({ recipe, deleteRecipe }: Props) {
  return (
    <div className="cardContainer">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Link to={`/${recipe.id}`}>
            <Button variant="primary">View Recipe</Button>
          </Link>
          <Button variant="danger" onClick={() => deleteRecipe(recipe.id)}>
            Delete Recipe
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ShortCard;
