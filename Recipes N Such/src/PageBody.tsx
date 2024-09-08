import {useState} from 'react'
import RecipeList from './RecipeList'
import NewRecipe from './NewRecipe'
import TopBar from './TopBar';


function PageBody() {

    //setting button toggles for off and on (true = new recipe)
    const [isToggled, setToggle] = useState(false);


    //returns the TopBar and changes page content if button is toggled
    return (
        <div>
            <TopBar setToggle={setToggle} isToggled={isToggled}/>
            {isToggled ? <NewRecipe /> : <RecipeList />}
        </div>
    )
}

export default PageBody