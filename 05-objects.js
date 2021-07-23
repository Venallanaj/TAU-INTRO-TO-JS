const cookie = {
  name: "Chocolate Chip",
  isGluentFree: false,
  //   "+Yummy": true,

  eatCookie: function () {
    console.log("I am eating" + this.name);
  },
};

cookie.name = "Chip Chocolate";
cookie.isGluentFree = "true";
// console.log(cookie["+Yummy"]);
console.log(cookie);
// cookie.eatCookie;

// Create  class

class Cookie {
  constructor(name, isGluentFree) {
    this.name = name;
    this.isGluentFree = isGluentFree;
  }

  eatCookie() {
    console.log("I am eating" + this.name);
  }
}

const myCookie = new Cookie("Iced Outomel", "false");

// console.log(myCookie.name);

myCookie.eatCookie();
