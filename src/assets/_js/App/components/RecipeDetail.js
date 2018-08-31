import React, { Component } from 'react'
import axios from 'axios';
import RecipeListItem from './RecipeListItem';

let RECIPES = [];
let relatedRecipes = [];
class RecipeDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      param: window.location.search.substring(1),
      recipe: null,
      relatedRecipes: [
        {
          slug: "airmail",
          name: "Airmail",
          description: "",
          url: "http://bittercube.com/recipes/airmail",
          image: "http://bittercube.com/uploads/recipes/Airmail.jpg",
          ingredients: "Fresh lime juice,Honey syrup,Plantation 3 Stars White Rum,Sparkling wine,Bittercube Blackstrap Bitters",
          tags: "Effervescent,Citrusy,Crisp,Refreshing,Tropical",
          pinterest: "https://pinterest.com/pin/create/button/?url=http://bittercube.com/recipes/airmail&media=http://bittercube.com&description=Airmail",
          products: [
          "blackstrap"
          ]
        },
        {
          slug: "americano-no-1",
          name: "Americano No.1",
          description: "",
          url: "http://bittercube.com/recipes/americano-1",
          image: "http://bittercube.com/uploads/recipes/Americano.jpg",
          ingredients: "Cocchi di Torino,Cappelletti Aperitivo,Seltzer,Bittercube Trinity Bitters",
          tags: "Effervescent,Bitter,Refreshing,Aperitif,Brunch",
          pinterest: "https://pinterest.com/pin/create/button/?url=http://bittercube.com/recipes/americano-1&media=http://bittercube.com&description=Americano 1",
          products: [
          "trinity"
          ]
        },
        {
          slug: "andean-condor",
          name: "Andean Condor",
          description: "",
          url: "http://bittercube.com/recipes/andean-condor",
          image: "http://bittercube.com/uploads/recipes/Andean_Condor.jpg",
          ingredients: "Pineapple juice,Fresh grapefruit juice,Fresh lime juice,Simple syrup,Rujero Singani,Campari,Seltzer,Bittercube Bolivar Bitters,Bittercube Blackstrap Bitters",
          tags: "Punch,Tropical",
          pinterest: "https://pinterest.com/pin/create/button/?url=http://bittercube.com/recipes/andean-condor&media=http://bittercube.com&description=Andean Condor",
          products: [
          "bolivar",
          "blackstrap"
          ]
        }
      ]
    }
  }

  componentDidMount() {
    axios.get(`https://bittercube.com/api/recipes.json`)
    .then(res => {
      RECIPES = res.data;
      console.log(this.state.param);
      RECIPES = RECIPES.filter((recipe) => recipe.slug == this.state.param );
      this.setState({ recipe: RECIPES[0] });
    })
  }
  
  render() {
    const recipe = this.state.recipe;
    if(this.state.recipe == null){
      return (
        <div>
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
      const ingredients = recipe.ingredients.split(',');
      return (
        <div>
          <section id="recipe" className="pt-0">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="bg-image aspect-1x1" style={{backgroundImage: `url(${recipe.image})`}}></div>
                </div>
                <div className="col-md-6">
                  <div className="recipe-details">
                    <h1>{recipe.name}</h1>
                    <p className="mb-0"><span className="rift">Glass:</span> {recipe.glass}</p>
                    <p><span className="rift">Garnish:</span> {recipe.garnish}</p>
                    <div className="recipe-ingredients">
                      <ul>
                        {ingredients.map(ingredient =>{return <li>{ingredient}</li>})}
                      </ul>
                    </div>
                    <div className="recipe-instructions">
                      <p>Recipe instructions lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate minus ipsum, consequatur modi magni accusamus vero quibusdam veniam inventore soluta?</p>
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
