import 'bootstrap';
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

import App from './App';
// import { map, tail, times, uniq } from 'lodash';
import _ from 'lodash';


const pageHeader = document.getElementById("page-header");
const subNav = document.getElementById("recipenav");
let offset = pageHeader.offsetHeight + subNav.offsetHeight;


var $win = $(window)
  , $nav = $('.subnav')
  , navTop = $('.subnav').length && $('.subnav').offset().top - offset
  , isFixed = 0

function processScroll() {
  var i, scrollTop = $win.scrollTop()
  if (scrollTop >= offset && !isFixed) {
    isFixed = 1
    $nav.addClass('subnav-fixed')
  } else if (scrollTop <= offset && isFixed) {
    isFixed = 0
    $nav.removeClass('subnav-fixed')
  }
}

processScroll();


window.addEventListener('scroll', _.throttle(processScroll, 300));
window.addEventListener('resize', _.throttle(processScroll, 300));



// Hash
$(function() {
  $("a[href*='#']:not([href='#'])").click(function(e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      e.preventDefault();
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
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


// import inView from 'in-view';
// import circlr from 'circlr';
//image rotator

// $(function() {

//   var rotator = $('#rotator');
//   var container = $(document);
//   var viewport = $(window);
  
//   var images = 72;
//   var imageHeight = 30000 / images;
//   var scrollHeight = container.height() - viewport.height() + imageHeight;
//   var step = images / scrollHeight;
  
//   viewport.scroll(function(event) {
  
//       var x = -Math.floor(step * viewport.scrollTop()) * imageHeight;
//       rotator.css('background-position', x + 'px 0');
  
//   });

// });


  

// inView('.page-footer')
//   .on('enter', el => {
//     $(el).find('.slide').addClass('active');
//     console.log("ENTERED");
//   })
//   .on('exit', el => {
//     $(el).find('.slide').removeClass('active');
//     console.log("EXIT");
//   });


