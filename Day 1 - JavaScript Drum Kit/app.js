

function playSound(e) {
  // select the appropiate audio
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // select the apropiate key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!key) return;
  if(!audio) return; // Stop function

  audio.currentTime = 0; // rewind audio to the start
  audio.play();
  key.classList.add('playing');
}


function removeTransition(e) {
  // skip it if it's not a transfrom
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

 const keys = document.querySelectorAll('.key');
 // Event Listeners
 window.addEventListener('keydown', playSound);
 keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});



