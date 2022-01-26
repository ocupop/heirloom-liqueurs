import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import HelloWorld from './HelloWorld'
import RecipeList from './recipes/RecipeList'
import RecipeDetail from './recipes/RecipeDetail'
import circlr from 'circlr';

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

// const pageHeader = document.getElementById("page-header")
const subNav = document.getElementById("recipenav")
let offset = 0


  // $("a[href*='#']:not([href='#'])").on('click', function (e) {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     e.preventDefault();

  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html,body').animate({
  //         scrollTop: target.offset().top - offset
  //       }, 1000);
  //       window.location.hash = this.hash;
  //       return false;
  //     }
  //   }
  // });


//fire header animation
window.onscroll = function () { pageHeader() }
var header = document.getElementById("page-header")
function pageHeader() {
  if (window.pageYOffset > 0) {
    header.classList.add("scrolled-header")
  } else {
    header.classList.remove("scrolled-header")
  }
}

const el = document.querySelector('.rotator');
circlr(el)
  .interval(235)
  .play()
  .on('show', n => {
    
  });

