import { useEffect, useState } from "react";
import RecipeList from "./listComponents/RecipeList";
import NewRecipe from "./assets/forms/NewRecipe";
import TopBar from "./TopBar";
//import Recipes from './assets/RecipeDB';
import styled from "styled-components";
import axios from "axios";
import React from "react";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

function PageBody() {
  //added useState to set the initial state for recipes shown on page
  const [recipes, setRecipes] = useState([]);

  //setting button toggles for off and on (true = new recipe)
  const [isToggled, setToggle] = useState(false);

  useEffect(() => {
    let url = "https://66c550d4134eb8f43493fc51.mockapi.io/recipes";
    const getRecipes = async () => {
      let res = await axios.get(`${url}`);
      setRecipes(res.data);
      console.log(res.data);
    };
    getRecipes();
  }, []);

  console.log(recipes);

  //returns the TopBar and changes page content if button is toggled
  //passed recipes and setRecipes as props for RecipeList
  // console.log(recipes[0]);
  // console.log(setRecipes);

  //TO DO:
  //this is going to probably have routes in it so it can link to other pages in a nav bar
  return (
    <>
      <StyledContainer>
        <TopBar setToggle={setToggle} isToggled={isToggled} />

        {isToggled ? (
          <NewRecipe
            recipes={recipes}
            setRecipes={setRecipes}
            setToggle={setToggle}
            isToggled={isToggled}
          />
        ) : (
          <RecipeList recipes={recipes} setRecipes={setRecipes} />
        )}
      </StyledContainer>
    </>
  );
}

export default PageBody;


//NOTES:
/*
* Wrap main.tsx in BrowserRouter
* Change from using toggle to react router
* Make card component for short entry
* Change page from full list to list of cards
* Make each card link to full recipe on its own page
* On full card, have button to update and delete
* Update button routes to update pre-populated update form
* Style with bootstrap
*/