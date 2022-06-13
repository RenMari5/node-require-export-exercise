const information = require("./data.js");

const math = require("./sum.js");

// const cowsay = require("cowsay");

const shuffle = require("lodash.shuffle");

console.log(information.numbers);
console.log(`${information.name} is from ${information.hometown}`);

math(information.numbers);

let shuffledNumbers = _.shuffle(information.numbers);

console.log(shuffledNumbers);
