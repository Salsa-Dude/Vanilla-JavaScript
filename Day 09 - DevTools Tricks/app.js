
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Regular
console.log('hello');
// Interpolated
console.log('hello my %s is Joseph', 'lastname')
// Styled
console.log('%c This text should be bigger', 'font-size:50px');
// warning!
console.warn('warning');
// Error :|
console.error('Oops!');
// Info
console.info('Working on getting better at javaScript');
// Testing
console.assert(1 === 2, 'That is WRONG!')
// clearing
// console.clear();
// Viewing DOM Elements
const p = document.querySelector('p');
console.dir(p);
// Grouping together
dogs.forEach(dog => {
  console.log(dog.name);
});
// counting
console.count('joseph');
console.count('joseph');
console.count('joseph');
console.count('joseph');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });