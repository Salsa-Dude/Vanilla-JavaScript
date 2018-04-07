
// start with strings, numbers and booleans
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
// You might think we can just do something like this:
const team = players;
console.log(team,players);
// however what happens when we update that array?
team[3] = 'Joseph';
// now here is the problem!
// oh no - we have edited the original array too!
console.log(team,players);

// Why? It's because that is an array reference, not an array copy. They both point to the same array!
 
// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
team2[1] = 'Roxio';
// Another way to make a copy is to create a new array and concat the old one
const team3 = [].concat(team);
team3[0] = 'Liz';
// or use the new ES6 Spread
const team4 = [...team];
team4[2] = "Diana";
// or use array.from
team5 = Array.from(team);
team5[3] = 'Cristina'

// The same thing goes for objects, let's say we have a person object
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const human = person;
human.age = 100;

// how do we take a copy instead?
const human2 = Object.assign({}, person, { number: 99, age: 18 });


