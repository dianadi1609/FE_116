import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const baseURL = "https://api.edamam.com/api/recipes/v2";
const type = "public";
const apiKey = "e0726941d4b3edb3980f1cb5f23ac4b2";
const apiId = "ea0d8161"; 
function RecipesList () {
        const [recipes, setRecipes] = useState([null]);
        const [error, setError] = useState([null]);
        useEffect(() => {
            axios.get(baseURL, {
                params: {
                  type: type,
                  app_id: apiId,
                  app_key: apiKey
                }})
                  .then(response => {
                    setRecipes(response.data.results);
                    console.log(response.data)
                  })
                  .catch(error => {
                    setError(error.message);
        })
         }, []);

         if (error)  {
    return <div className="error">
      <h2>{error}</h2>
    </div>;
  } else if (recipes) {
    console.log(recipes)
    const items = recipes.map((recipe, index) =>
        <div key={index} className="recipe">
          <Link to={"/recipes/"} className="link">
            <h2>{recipe.title}</h2>
            <p>{recipe.overview}</p>
          </Link>
        </div>
    );
    return <div className= "reciprs">
      {items}
    </div>;
}

}
export default RecipesList;