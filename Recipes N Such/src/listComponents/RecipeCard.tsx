import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, ListGroup } from "react-bootstrap";

type Props = {
  deleteRecipe: Function;
  getCurrentRecipe: Function;
};

// displays the recipe in a card styled with bootstrap
function RecipeCard({ deleteRecipe, getCurrentRecipe }: Props) {
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
  }, [recipeIndex, getCurrentRecipe]);

  const ingredientsList = recipe.ingredients.map((ingredient, i) => (
    <ListGroup.Item key={i}>{ingredient}</ListGroup.Item>
  ));
  const instructionsList = recipe.instructions.map((instruction, i) => (
    <ListGroup.Item key={i}>{instruction}</ListGroup.Item>
  ));

  return (
    <Card style={{ width: "60rem" }}>
      <Card.Img variant="top" src={recipe.image} alt="food" />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Subtitle className="mt-5 mb-2 text-muted">
          Ingredients
        </Card.Subtitle>
        <ListGroup className="list-group-flush">{ingredientsList}</ListGroup>
        <Card.Subtitle className="mt-5 mb-2 text-muted">
          Instructions
        </Card.Subtitle>
        <ListGroup className="list-group-flush">{instructionsList}</ListGroup>
      </Card.Body>
      <Card.Body>
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
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
