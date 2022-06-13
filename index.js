const numbers = require("./data.js");
const namae = require("./data.js");
const whereImFrom = require("./data.js");

const math = require("./sum.js");

console.log(numbers());
console.log(`${namae} is from ${whereImFrom}.`);

module.exports = { numbers, namae, whereImFrom };
