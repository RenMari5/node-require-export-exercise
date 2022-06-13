function sumOf(array) {
  let sum = 0;
  array.forEach((number) => {
    sum += number;
  });
  console.log(sum);
  return sum;
}

module.exports = sumOf;
