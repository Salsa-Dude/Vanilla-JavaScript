
const pressed = [];
const secretCode = 'joseph'

window.addEventListener('keyup', function(e) {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  
  if(pressed.join('').includes(secretCode)) {
    console.log('Ding Dong');
    cornify_add();
  }

  console.log(pressed);
  
});