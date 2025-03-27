// the value of math.pi cannot be changes because its writable is false
console.log(Math.PI);
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

const chai = {
  name: "ginger lemon tea",
  price: 250,
  isAvailable: true,
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false, //changable
  enumerable: false, //iteratable
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
