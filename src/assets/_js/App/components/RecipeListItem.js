import React, { Component } from 'react'

const RecipeListItem = (props) =>  {
  return (
    <div className="col-md-3 text-center">
      <a href={"/recipe?" + props.slug} className="recipe-card">
        <div className="bg-image aspect-1x1" style={{backgroundImage: `url(${props.image})`}}></div>
        <p className="recipe-title">{props.name}</p>
      </a>
    </div>
  )
};

export default RecipeListItem;
