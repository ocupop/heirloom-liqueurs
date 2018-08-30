import React from 'react';
import ReactDOM from 'react-dom';
import RecipeList1 from './components/RecipeList1';
import RecipeList2 from './components/RecipeList2';
import RecipeList3 from './components/RecipeList3';
import RecipeList4 from './components/RecipeList4';
import RecipeDetail from './components/RecipeDetail';

const APPS = {
  RecipeList1,
  RecipeList2,
  RecipeList3,
  RecipeList4,
  RecipeDetail
}

function renderAppInElement(el) {
  var App = APPS[el.id];
  if (!App) return;
  // get props from elements data attribute, like the post_id
  const props = Object.assign({}, el.dataset);
  ReactDOM.render(<App {...props} />, el);
}

document
  .querySelectorAll('.__react-app')
  .forEach(renderAppInElement)
