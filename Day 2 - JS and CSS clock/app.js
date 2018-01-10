
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if(secondsDegrees === 90) {
    allHands.forEach(function(hand) {
      hand.style.transition = 'none';
    });
  } else {
    allHands.forEach(function(hand) {
      hand.style.transition = '';
    });
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegree = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegree}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  

}

setInterval(setDate, 1000);