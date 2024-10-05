//import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Recipe } from "../assets/RecipeDB";
import ShortCard from './ShortCard';
import { useEffect } from 'react';

type Props = {
  setRecipes: Function;
  recipes: Array<Recipe>;
  url: string;
  deleteRecipe: Function;
  getRecipes: Function;
};

// function to display the recipes
function RecipeList({ recipes, setRecipes, url, deleteRecipe, getRecipes }: Props) {
  useEffect(() => {
    getRecipes();
  }, []);
  console.log(recipes);
  return (
    <div className="recipeList">
      <h3>My Recipes</h3>
      <Row>
        {recipes.map(recipe => (
          <Col key={recipe.id} xs={12} sm={6} md={4} className="mb-4">
            <ShortCard
              recipe={recipe}
              setRecipes={setRecipes}
              url={url}
              deleteRecipe={deleteRecipe}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RecipeList;
