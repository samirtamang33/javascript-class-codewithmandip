//What is Callback ?
//fucntion(create/pass function) as an argument to another function
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((number) => {
  return number * 2;
});

console.log(double); // [2, 4, 6, 8, 10]

const oddNumbers = numbers.filter((number) => {
  return number % 2 !== 0;
});
console.log(oddNumbers);

const sum = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);
console.log(sum); // 15

//custom callback function example
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}
greet("Alice", () => {
  console.log("This is a callback function executed after greeting.");
});

//What is Asynchronous ?
//Asynchronous programming allows a program to perform tasks without blocking the main thread, enabling it to
//handle multiple operations concurrently. This is particularly useful for tasks like I/O operations, network requests,
//and timers, where waiting for a response can lead to inefficiencies in a synchronous model.
//Example of Asynchronous code
console.log(1);
setTimeout(() => {
  console.log("This is an asynchronous message after 2 seconds");
}, 2000);
console.log(2);
