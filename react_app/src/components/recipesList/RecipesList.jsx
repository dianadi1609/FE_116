import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";

const baseURL = "https://api.edamam.com/api/recipes/v2";
const type = "public";
const query = "popular"
const apiKey = "e0726941d4b3edb3980f1cb5f23ac4b2";
const apiId = "ea0d8161";

function RecipesList() {
  const [recipes, setRecipes] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(baseURL, {
      params: {
        type: type,
        app_id: apiId,
        app_key: apiKey,
        q: query
      }
    })
        .then(response => {
          setRecipes(response.data.hits);
        })
        .catch(error => {
          setError(error);
        })
  }, []);

  if (error) {
    return <div className="error">
      <h2>{error}</h2>
    </div>;
  } else if (recipes) {
    const items = recipes.map((item, index) =>
        <div key={index} className="recipe">
          <Link to={"/recipes/"} className="link">
            <h2>{item.recipe.label}</h2>
            <p className="ingredients">
            <b>Ingredients: </b> 
            {item.recipe.ingredientLines.map((ingredient)=>(
              <p>{ingredient}</p> 
            ))}
          </p>
            <p>Calories: {item.recipe.calories}</p>
            <p>Cuisine type: {item.recipe.cuisineType}</p>
            <img src={item.recipe.image}/>
          </Link>
        </div>
    );
    return <div className="reciprs">
      {items}
    </div>;
  }

}

export default RecipesList;