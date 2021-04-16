document.addEventListener('DOMContentLoaded', function() {
 

  new Typed('#typed3', {
    strings: [
      '<strong>Developer </strong> ',
      '<strong>Catalyst of Innovation </strong> ',
      '<strong>Future Technology Manager </strong> '
    ],
    typeSpeed: 35,
    backSpeed: 35,
    smartBackspace: true,
    loop: true
  });

});

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}
