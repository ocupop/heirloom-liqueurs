import React, { Component } from 'react'

const RecipeListItem = (props) =>  {
  return (
    <div className="recipe-card text-center">
      <a href={"/recipe?" + props.slug}>
        <div className="bg-image recipe-image" style={{backgroundImage: `url(${props.image})`}}></div>
        <p className="recipe-title">{props.name}</p>
      </a>
    </div>
  )
};

export default RecipeListItem;
