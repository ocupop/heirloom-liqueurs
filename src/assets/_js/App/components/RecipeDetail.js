import React, { Component } from 'react'
import axios from 'axios';
import RecipeListItem from './RecipeListItem';

let RECIPES = [];
let RELATED = [];
let relatedRecipes = [];
class RecipeDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      param: window.location.search.substring(1),
      recipe: null,
      relatedRecipes: []
    }
  }

  componentDidMount() {
    axios.get(`https://bittercube.com/api/heirloom-recipes.json`)
    .then(res => {
      RECIPES = res.data;
      RELATED = res.data;
      // console.log(this.state.param);
      RECIPES = RECIPES.filter((recipe) => recipe.slug == this.state.param );
      // console.log(RECIPES[0].liqueurs);
      RELATED = RELATED.filter((recipe) => recipe.liqueurs.includes(RECIPES[0].liqueurs) && recipe != RECIPES[0]);
      this.setState({ 
        recipe: RECIPES[0],
        relatedRecipes: RELATED
      });
      
    })
  }
  
  render() {
    const recipe = this.state.recipe;
    if(this.state.recipe == null){
      return (
        <div className="text-center my-5 p-5">
          loading...
        </div>
      )
    }else{
      relatedRecipes = (
        <div className="row related-recipes">
          {this.state.relatedRecipes.map((recipe, index) =>{
            return <RecipeListItem 
              key={index}
              name={recipe.name}
              image={recipe.image}
              slug={recipe.slug}
              />
          })}
        </div>
      );
      const ingredients = recipe.ingredients;
      return (
        <div>
          <section id="recipe">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="bg-image aspect-1x1" style={{backgroundImage: `url(${recipe.image})`}}></div>
                </div>
                <div className="col-lg-7">
                  <div className="recipe-details">
                    <h1>{recipe.name}</h1>
                    <p className="mb-0"><span className="rift">Glass:</span> {recipe.glass}</p>
                    <p><span className="rift">Garnish:</span> {recipe.garnish}</p>
                    <div className="recipe-ingredients">
                      <ul>
                        {ingredients.map((ingredient, index) =>{return <li key={index}><span className="ingredient-qty">{ingredient.qty}</span>&nbsp;<span className="ingredient-name">{ingredient.name}</span></li>})}
                      </ul>
                    </div>
                    <div className="recipe-instructions">
                      <p>{recipe.instructions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h3 className="mb-5">You May Also Enjoy...</h3>
                </div>
              </div>
              {relatedRecipes}
            </div>
          </section>
        </div>
      )
    }
  }
}

export default RecipeDetail;
