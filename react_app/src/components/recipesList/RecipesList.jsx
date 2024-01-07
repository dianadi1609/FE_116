import './recipeslist.css';
import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import { ReactComponent as Like } from "../../assets/img/like.svg";

const baseURL = "https://api.edamam.com/api/recipes/v2";
const type = "public";
const query = "popular"
const apiKey = "e0726941d4b3edb3980f1cb5f23ac4b2";
const apiId = "ea0d8161";

function RecipesList() {
  const [recipes, setRecipes] = useState(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(() => {
    let items = [];
    for(let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (!key.indexOf('label-')) {
        items.push(key.replace('label-',''));
      }
    }
    return items;
  });

  const setWishList = (event) => {
     event.preventDefault();
     let label = event.target.parentNode.parentNode.attributes.getNamedItem('data-label').value;
     let isFavourited = liked.includes(label)
     if (!isFavourited) {
       let newItem = [...liked, label]
       setLiked(newItem);
       for (let i = 0; i < recipes.length; i++) {
         if (recipes[i].recipe.label == label) {
           window.localStorage.setItem('label-' + label, JSON.stringify(recipes[i]));
         }
       }
     } else {
       let newItem = liked.filter((savedId) => savedId !== label)
       console.log(newItem)
       setLiked(newItem);
       window.localStorage.removeItem('label-' + label, );
     }
  }
  
  function searchRecipe (e) {
    e.preventDefault();
    console.log(search)
        axios.get(baseURL, {
      params: {
        type: type,
        app_id: apiId,
        app_key: apiKey,
        query: search,
        q: search
    }
  })
    .then(response => {
      setRecipes(response.data.hits);
    })
    .catch(error => {
      setError(error);
    })
  }

  function getRecipes () {
    axios.get(baseURL, {
      params: {
        type: type,
        app_id: apiId,
        app_key: apiKey
    }
  })
    .then(response => {
      setRecipes(response.data.hits);
    })
    .catch(error => {
      setError(error);
    })
  }

  useEffect(() => {
    getRecipes();
  }, []);

  if (error) {
    return <div className="error">
      <h2>{error}</h2>
    </div>;
  } else if (recipes) {
    const items = recipes.map((item, index) =>
        <div key={index} className="recipe">
          <Link to={"/recipes/"} className="link">
            <div onClick={setWishList} data-label={item.recipe.label} className={liked.includes(item.recipe.label) ? "wishlist liked" : "wishlist"}>
              <Like></Like>
            </div>
            <h2>{item.recipe.label}</h2>
            <p className="ingredients">
            <b>Ingredients: </b> 
            {item.recipe.ingredientLines.map((ingredient, index)=>(
              <>
              <div key={index}>
              <p>{ingredient}</p></div>
              </>
            ))}
          </p>
            <p>Calories: {item.recipe.calories}</p>
            <p>Cuisine type: {item.recipe.cuisineType}</p>
            <img src={item.recipe.image}/>
          </Link>
        </div>
    );
    return (
      <>
      <form 
        onSubmit={searchRecipe}
        className='search'
      >
        <div className='form-items '>
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        <button type="submit">Search</button>
        </div>
      </form>
      <div className= "recipessearch">
       {items}
      </div>
      </>
    )
  }

}

export default RecipesList;