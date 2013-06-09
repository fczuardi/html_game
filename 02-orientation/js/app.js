//global variables
var xCellElement,
    yCellElement,
    zCellElement,
    compassElement,
    compassAngle;

// shim layer with setTimeout fallback
// from http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function handleOrientation(evt) {
  xCellElement.textContent = evt.beta;
  yCellElement.textContent = evt.gamma;
  zCellElement.textContent = evt.alpha;
  compassAngle = (360 - evt.alpha);
}

function animloop(){
  compassElement.setAttribute('style', 'transform:rotate('+ compassAngle +'deg);');
  requestAnimFrame(animloop);
}

function onDomReady() {
  //assign DOM elements
  xCellElement = document.getElementById('x_cell'),
  yCellElement = document.getElementById('y_cell'),
  zCellElement = document.getElementById('z_cell'),
  compassElement = document.getElementById('compass_image');

  //set up event listeners
  window.addEventListener("deviceorientation", handleOrientation, true);
  animloop();
}

document.addEventListener('readystatechange', function() {
  if (document.readyState == 'interactive') {
    onDomReady();
  }
}, false);
