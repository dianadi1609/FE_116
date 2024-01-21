import './recipeslist.css';
import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
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
  const [total_pages, setTotalPages] = useState(1);
  const [page, setPage] = useState(3);
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
        axios.get(baseURL, {
      params: {
        type: type,
        app_id: apiId,
        app_key: apiKey,
        query: search,
        q: search,
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
        app_key: apiKey,
        q: query,
      }
  })
    .then(response => {
      setRecipes(response.data.hits);
      let totalPages = response.data._links.next.href
      if (totalPages && totalPages <= 10) {
        setTotalPages(totalPages);
      } else {
        setTotalPages(10);
      }
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
            <img src={item.recipe.image}/>
            <h2>{item.recipe.label}</h2>
          <div className='caloriesandtype'>
            <p>Calories: {item.recipe.calories}</p>
            <h4>Cuisine type: {item.recipe.cuisineType}</h4>
            <a href={item.recipe.url}>Link to the recipe</a>
          </div>
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
        <input placeholder='search for recipes'
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        <button type="submit">Search</button>
        </div>
      </form>
      <div className='pagination'>
        <Stack spacing={2}>
          <Pagination count={total_pages} />
      </Stack>
      </div>
      <div className= "recipessearch">
       {items}
      </div>
      <div className='pagination'>
        <Stack spacing={2}>
          <Pagination count={total_pages} />
      </Stack>
      </div>
      </>
    )
  }

}

export default RecipesList;