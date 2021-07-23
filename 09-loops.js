const names = ["Mark", "Sarah", "Ebony", "Mark", "Sarah"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

for (var elephant = 1; elephant < 10; elephant += 3) {
  if (elephant === 7) {
    break;
  }
  console.info("elephant is " + elephant);
}
