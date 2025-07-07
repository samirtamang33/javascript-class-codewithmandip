// function greet() {
//   const myNum = 9841628399;
//   console.log(`Good Morning ${myNum}`);
// }
// greet();

// Parameters ==> The values which we have to later pass into a function is called parameter.
// function findArea(length, breadth) {
//   console.log(length * breadth);
// }
// findArea(2, 3);

//Arguement ==> When a value is passed as a function parameter, it is called arguement
// function findArea(length = 5, breadth = 7) {
//   console.log(length * breadth);
// }
// findArea();

//Function expression
// const greet = function () {
//   return "Good Morning";
// };
// console.log(greet());

// const volume = function (l, b, h) {
//   return l * b * h;
// };
// console.log(volume(2, 3, 4));

//Arrow Functions

// const greet = () => {
//   return "Good Morning";
// };
// console.log(greet());

const volume = (l, b, h) => {
  return l * b * h;
};

console.log(volume(2, 2, 2));
