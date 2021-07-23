function sum(a, b) {
  a + b;
}

console.log(sum(10, 10));

function products(a, b) {
  return a * b;
}

console.log(products(12, 12));

function dates(age, job, education) {
  return age, job, education;
}

console.log(dates(25, "it", "master"));
// const bigProduct = product(5353, 134534);
// console.log(bigProduct);

// anonymouse function
setTimeout(function () {
  console.log("Hey! You rock!!!");
}, 1000);

//arrow function

setTimeout(() => console.log("Hey! You rock!!!"), 1000);
