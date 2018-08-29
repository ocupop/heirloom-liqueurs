import React, { Component } from 'react';
import axios from 'axios';
import RecipeListItem from './RecipeListItem';

let RECIPES = [];

class RecipeList extends Component {
  constructor(props) {
    super(props)

    if(window.recipeApp) {
      this.state = {
        product: window.recipeApp.product,
        recipes: []
      }
    }else {
      this.state = {
        product: '',
        recipes: []
      }
    }
  }

  componentDidMount() {
    axios.get(`https://bittercube.com/api/recipes.json`)
    .then(res => {
      RECIPES = res.data;
      if(this.state.product){
        console.log(this.state.product);
        RECIPES = RECIPES.filter((recipe) => recipe.products.includes(this.state.product) );
        console.log('filtered', RECIPES);
      }
      this.setState({ recipes: RECIPES });
    })
  }
  

  render() {

    let recipes = null;
    recipes = (
      <div className="row recipe-grid">
        {this.state.recipes.map((recipe, index) =>{
          return <RecipeListItem 
            key={index}
            name={recipe.name}
            image={recipe.image}
            slug={recipe.slug}
            />
        })}
      </div>
    );
      
    return (
      <div >
        {recipes}
      </div>
    )
  }
}

export default RecipeList;