import React from 'react'
import ReactDOM from 'react-dom'
// import _ from 'lodash'
import RecipeList from './recipes/RecipeList'
import RecipeDetail from './recipes/RecipeDetail'
import circlr from 'circlr';
import Scrollbar from 'smooth-scrollbar';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const COMPONENTS = {
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

var controller = new ScrollMagic.Controller();  

//fire header animation
// window.onscroll = function () { pageHeader() }
// var header = document.getElementById("page-header")
// function pageHeader() {
//   if (window.pageYOffset > 0) {
//     header.classList.add("scrolled-header")
//   } else {
//     header.classList.remove("scrolled-header")
//   }
// }

new ScrollMagic.Scene({
    triggerElement: "#header-trigger",
    offset: 0
  })
	.setClassToggle("#page-header", "scrolled-header") // add class toggle
	.addTo(controller);

let animations = document.querySelectorAll('.animate')

animations.forEach(function (animation) {
  var scene = new ScrollMagic.Scene({
    triggerElement: animation,
    offset: -300,
    reverse: false
  })
    .setClassToggle(animation, "active")
    .addTo(controller);
});


const rotator = document.querySelector('.rotator');
if(rotator) {
  circlr(rotator)
  .interval(235)
  .play()
  .on('show', n => {
    
  });
}

// var randomPics = new Array("https://picsum.photos/id/1011/768","https://picsum.photos/id/1012/768","https://picsum.photos/id/1013/768")

// function choosePic() {
//   var randomNum = Math.floor(Math.random() * randomPics.length);
//   var randomPic = document.getElementById("random-pic")
//   randomPic.style.backgroundImage = "url(" + randomPics[randomNum] + ")";
//   console.log( randomPics[randomNum], randomNum)
// }

// choosePic();


var options = {
  'damping': 0.08
}

Scrollbar.init(document.querySelector('#my-scrollbar'), options);


