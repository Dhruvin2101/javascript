let myHeros = ["Spiderman", "Thor"];

const DCHeros = {
  name: "spiderman",
  powers: "web",

  getHero: function () {
    console.log(`this is the power of spidy ${this.powers}`);
  },
};

//object is the higest level as everything in js is object so
//as we apply prototype in object now we can use it anywhere no matter array,function,object etc etc
Object.prototype.dhruvin = function () {
  console.log("hello my name is Dhruvin");
};

DCHeros.dhruvin();
myHeros.dhruvin();
