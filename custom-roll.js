const prompt = require('prompt sync')();

const number1 = prompt('How many sides does a dice have? ');

const rollDice = Math.floor(Math.random() * sides) + 1;

console.log('You have rolled a: ', rollDice);