import 'bootstrap';
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';


import inView from 'in-view';

inView('.page-footer')
  .on('enter', el => {
    $(el).find('.slide').addClass('active');
    console.log("ENTERED");
  })
  .on('exit', el => {
    $(el).find('.slide').removeClass('active');
    console.log("EXIT");
  });

