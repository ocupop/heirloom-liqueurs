import React, { Component } from 'react'
import axios from 'axios';

let RECIPES = [];

class RecipeDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      param: window.location.search.substring(1),
      recipes: []
    }
  }

  componentDidMount() {
    axios.get(`https://bittercube.com/api/recipes.json`)
    .then(res => {
      RECIPES = res.data;
      console.log(this.state.param);
      RECIPES = RECIPES.filter((recipe) => recipe.slug == this.state.param );
      console.log('filtered', RECIPES);
      this.setState({ recipes: RECIPES });
    })
  }
  
  render() {
    let recipes = null;
    recipes = (
      <div className="row recipe-grid">
        {this.state.recipes.map((recipe, index) =>{
          return <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="bg-image aspect-1x1" style={{backgroundImage: `url(${recipe.image})`}}></div>
                    </div>
                    <div className="col-md-6">
                    <div className="recipe-details">
                      <h1>{recipe.name}</h1>
                      <p className="mb-0"><span className="rift">Glass:</span> {recipe.glass}</p>
                      <p><span className="rift">Garnish:</span> {recipe.garnish}</p>
                      <div className="recipe-ingredients">
                        {recipe.ingredients}
                        <ul>
                          <li>Ingredient</li>
                          <li>Ingredient</li>
                          <li>Ingredient</li>
                          <li>Ingredient</li>
                          <li>Ingredient</li>
                        </ul>
                      </div>
                      <div className="recipe-instructions">
                        <p>Recipe instructions lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate minus ipsum, consequatur modi magni accusamus vero quibusdam veniam inventore soluta?</p>
                      </div>
                    </div>
                  </div>
                </div>
        })}
      </div>
    );
    return (
      <div>
        {recipes}
      </div>
    )
  }
}

export default RecipeDetail;
