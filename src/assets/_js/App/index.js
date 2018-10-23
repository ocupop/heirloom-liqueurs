import React from 'react';
import ReactDOM from 'react-dom';
import RecipeList  from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

const APPS = {
  RecipeList,
  RecipeDetail
}

function renderAppInElement(el) {
  var App = APPS[el.dataset.component];
  if (!App) return;
  // get props from elements data attribute, like the post_id
  const props = Object.assign({}, el.dataset);
  ReactDOM.render(<App {...props} />, el);
}

document
  .querySelectorAll('.__react-app')
  .forEach(renderAppInElement)
