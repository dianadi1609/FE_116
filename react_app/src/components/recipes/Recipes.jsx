import RecipesList from "../recipesList/RecipesList";
import './recipes.css';


function Recipes () {
    return (
        <>
        <div className= 'vector'></div>
        <div className="title">
        <h1>Simple and tasty recipes</h1>
        </div>
        <RecipesList />
        </>
    )
}
export default Recipes;