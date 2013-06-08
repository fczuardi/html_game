//global variables
var audioElement1,
    audioElement2,
    buttonLeftElement,
    buttonRightElement;

/*
play a sound
audioElement is an audio DOM element
*/
function playAudio(audioElement){
  audioElement.cloneNode(true).play();
}

function leftButtonClicked(evt){
  evt.preventDefault();
  playAudio(audioElement1);
}

function rightButtonClicked(evt){
  evt.preventDefault();
  playAudio(audioElement2);
}

function onDomReady() {
  //assign DOM elements
  audioElement1 = document.getElementById('audio_1'),
  audioElement2 = document.getElementById('audio_2'),
  buttonLeftElement = document.getElementById('button_left'),
  buttonRightElement = document.getElementById('button_right');

  //set up event listeners
  buttonLeftElement.addEventListener('touchstart', leftButtonClicked, false);
  buttonLeftElement.addEventListener('click', leftButtonClicked, false);
  buttonRightElement.addEventListener('touchstart', rightButtonClicked, false);
  buttonRightElement.addEventListener('click', rightButtonClicked, false);
}

document.addEventListener('readystatechange', function() {
  if (document.readyState == 'interactive') {
    onDomReady();
  }
}, false);
