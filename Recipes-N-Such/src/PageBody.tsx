import { useEffect, useState } from "react";
import RecipeList from "./listComponents/RecipeList";
import NewRecipe from "./assets/forms/NewRecipe";
import styled from "styled-components";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import TopBar from "./TopBar";
import RecipeCard from "./listComponents/RecipeCard";
import { Recipe } from "./assets/RecipeDB";
import UpdateForm from "./assets/forms/UpdateForm";
import { Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

let url = "https://66c550d4134eb8f43493fc51.mockapi.io/recipes";

function PageBody() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    let res = await axios.get(`${url}`);
    setRecipes(res.data);
  };

  function deleteRecipe(id: string): void {
    setRecipes(recipes.filter((recipe: Recipe) => recipe.id !== id));
    deleteFromAPI(id);
  }

  const deleteFromAPI = async (id: string) => {
    await fetch(`${url}/${id}`, { method: "DELETE" });
  };

  const getCurrentRecipe = async (recipeIndex: string) => {
    let res = await axios.get(`${url}/${recipeIndex}`);

    return res.data;
  };

  return (
    <StyledContainer>
      <TopBar />
      <Routes>
        <Route
          path="/"
          element={
            <RecipeList
              recipes={recipes}
              setRecipes={setRecipes}
              url={url}
              deleteRecipe={deleteRecipe}
              getRecipes={getRecipes}
            />
          }
        />
        <Route
          path="/addNew"
          element={
            <NewRecipe recipes={recipes} setRecipes={setRecipes} url={url} />
          }
        />
        <Route
          path="/:key"
          element={
            <RecipeCard
              deleteRecipe={deleteRecipe}
              getCurrentRecipe={getCurrentRecipe}
            />
          }
        />
        <Route
          path="/:key/update"
          element={
            <UpdateForm
              recipes={recipes}
              setRecipes={setRecipes}
              url={url}
              getCurrentRecipe={getCurrentRecipe}
            />
          }
        />
      </Routes>
    </StyledContainer>
  );
}

export default PageBody;

// //NOTES:
// /*
//  * Change from using toggle to react router (Done)
//  * On full card, have button to update and delete (DOne)
//  * Update button routes to update pre-populated update form (Done)
//  * Style with bootstrap (fix recipe card)
//  * Remove unneeded comments and add better ones where necessary
//  * clear console logs
//  */
