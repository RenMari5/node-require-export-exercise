const cowsay = require("cowsay");

const _ = require("lodash");

const information = require("./data.js");

const math = require("./sum.js");

console.log(information.numbers);
console.log(`${information.name} is from ${information.hometown}`);

math(information.numbers);

let shuffledNumbers = _.shuffle(information.numbers);

console.log(shuffledNumbers);

console.log(
  cowsay.say({
    text: "Whaaaaaaat?!",
    e: "OO",
  })
);
