import { useState } from 'react'
import RecipeList from './RecipeList'
import NewRecipe from './NewRecipe'
import TopBar from './TopBar';
import Recipes from './assets/RecipeDB';
import styled from 'styled-components';


const StyledContainer = styled.div` width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;`;

function PageBody() {

    //added useState to set the initial state for recipes shown on page
    const [recipes, setRecipes] = useState(Recipes);

    //setting button toggles for off and on (true = new recipe)
    const [isToggled, setToggle] = useState(false);


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

                {isToggled ? <NewRecipe recipes={recipes} setRecipes={setRecipes} setToggle={setToggle} isToggled={isToggled} /> : <RecipeList recipes={recipes} setRecipes={setRecipes} />}
            </StyledContainer>
        </>

    )
}

export default PageBody