
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes.map(function(timeNode) {
  return timeNode.dataset.time;
}).map(function(time) {
  const [mins,secs] = time.split(':').map(parseFloat);
  return (mins * 60) + secs;
}).reduce(function(total, videoSeconds) {
  return total + videoSeconds;
});


let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`Total View Time - ${hours}h ${mins}mins`);