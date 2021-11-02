import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import HelloWorld from './HelloWorld'
import RecipeList from './recipes/RecipeList'
import RecipeDetail from './recipes/RecipeDetail'

const COMPONENTS = {
  HelloWorld,
  RecipeList,
  RecipeDetail
}

function renderComponentInElement(el) {
  var Component = COMPONENTS[el.dataset.component];
  if (!Component) return;
  // get props from elements data attribute, like the post_id
  const props = Object.assign({}, el.dataset);
  ReactDOM.render(<Component {...props} />, el);
}

document
  .querySelectorAll('.__react-component')
  .forEach(renderComponentInElement)





const pageHeader = document.getElementById("page-header")
const subNav = document.getElementById("recipenav")
let offset = 0

$(function () {
  $("a[href*='#']:not([href='#'])").click(function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - offset
        }, 1000);
        window.location.hash = this.hash;
        return false;
      }
    }
  });
});