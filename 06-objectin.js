const car = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "white",
  drivecar: function () {
    console.log("I am driving " + this.name);
  },
};

console.log(car);

class Car {
  //use constructor is just a rule to create your car
  constructor(name, isLatestModel) {
    this.name = name;
    this.isLatestModel = isLatestModel;
  }

  drivecar() {
    console.log("I am driving " + this.name);
  }
}

const myCar = new Car("Fiat", "true");

myCar.drivecar();

// Another example

const comptuer = {
  name: "HP",
  color: "black",
  Procesor: "Intel",
  turoncomputer: function () {
    console.log("I am turn on " + this.name);
  },
};

// console.log(comptuer);

// create a class

class Comptuer {
  constructor(name, isPerformant) {
    this.name = name;
    this.isPerformant = isPerformant;
  }

  // create a  function inside class computer

  turoncomputer() {
    console.log("I am turn on " + this.name);
  }
}

const myComputer = new Comptuer("HP", "true");

myComputer.turoncomputer();

// Another example1

const cookie = {
  name: "Chocolate Chip",
  isGlutenFree: false,
  eatCookie: function () {
    console.log("I am eating " + this.name);
  },
};

// console.log(cookie);
// cookie.name = "Chip Chocolate";
// cookie.isGlutenFree = true;
// console.log(myCookie);
// cookie.eatCookie();

// Create a class
class Cookie {
  constructor(name, isGlutenFree) {
    this.name = name;
    this.isGlutenFree = isGlutenFree;
  }

  // Add function to classes without keyword function

  eatCookie() {
    console.log("I am eating " + this.name);
  }
}

// After we create a class lets create a new object

const myCookie = new Cookie("Iced Otemel", false);

// console.log(myCookie);
// We call the function

myCookie.eatCookie();

// console.log(myCookie.name);

/**
 * Object is empty because we don't have any property In objct literal we endedup  specifing values and properties
 * inside  curly braces.
 *
 * Well  here  we use constructor.
 * Constructor is just a rules that you need to create a classes.
 */
