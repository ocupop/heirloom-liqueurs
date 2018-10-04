import 'bootstrap';
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

import App from './App';
// import { map, tail, times, uniq } from 'lodash';
import _ from 'lodash';


    // fix sub nav on scroll
    let offset = parseFloat($('body').css('padding-top'));
    var $win = $(window)
      , $nav = $('.subnav')
      , navTop = $('.subnav').length && $('.subnav').offset().top - offset
      , isFixed = 0

    function processScroll() {
      var i, scrollTop = $win.scrollTop()
      if (scrollTop >= navTop && !isFixed) {
        isFixed = 1
        $nav.addClass('subnav-fixed')
      } else if (scrollTop <= navTop && isFixed) {
        isFixed = 0
        $nav.removeClass('subnav-fixed')
      }
    }

    processScroll();


// const navbar = document.getElementById("recipenav");

// const stickit = function () {
//   let isFixed = false;
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   // let navTop = navbar.getBoundingClientRect().top;
//   let offset = parseFloat($('body').css('padding-top'));
//   const navTop = $('#recipenav').offset().top - offset;

//   console.log("Offest:", offset);
//   console.log("Navbar:", navTop);
//   if (scrollTop  >= navTop && isFixed) {
//     navbar.classList.add("sticky")
//     isFixed = true;
//   } else if (scrollTop  <= navTop && isFixed) {
//     navbar.classList.remove("sticky");
//   }
//   // if (scrollTop >= navTop && !isFixed) {
//   //   isFixed = 1
//   //   $nav.addClass('subnav-fixed')
//   // } else if (scrollTop <= navTop && isFixed) {
//   //   isFixed = 0
//   //   $nav.removeClass('subnav-fixed')
//   // }
// }
window.addEventListener('scroll', _.throttle(processScroll, 300));



// Hash
$(function() {
  $("a[href*='#']:not([href='#'])").click(function(e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      e.preventDefault();
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 80
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


