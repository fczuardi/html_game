//global variables
var lightValueElement;

function onDeviceLight(event){
    lightValueElement.textContent = event.value;
}

function onDomReady() {
  //assign DOM elements
  lightValueElement = document.getElementById('light_value'),

  window.addEventListener("devicelight", onDeviceLight);
}

document.addEventListener('readystatechange', function() {
  if (document.readyState == 'interactive') {
    onDomReady();
  }
}, false);
