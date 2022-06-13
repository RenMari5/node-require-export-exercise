const information = require("./data.js");

const math = require("./sum.js");

const cowsay = require("cowsay");

console.log(information.numbers);
console.log(`${information.name} is from ${information.hometown}`);

math(information.numbers);
