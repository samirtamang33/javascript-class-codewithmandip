// Array

const { it } = require("node:test");

const fruits = ["apple", "banana", "orange", "pineapple", "watermelon"];
console.log(fruits);

const marks = [50, 20, 30, 40, 78, 23];

const cities = ["New York", "Hong Kong", "Paris", "Tokyo"];

const countries = ["Nepal", "USA", "China", "Japan"];

const continents = ["Asia", "Europe", "Sout America", "Africa"];

console.log(continents[0]);

const students = [
  "Ankit",
  "Bipasha",
  "Chiranjivi",
  "Deepak",
  "Elina",
  "Furba",
  "Gaurav",
  "Harikala",
  "Indraprastha",
  "Gyanendra",
  "Krishna",
  "Laxmi",
  "Manisha",
  "Nirjan",
  "Ojaswi",
];
console.log(
  `Congratulations, ${students[3]}. You are selected for the competition. `
);
console.log(
  `Congratulations, ${students[8]}. You are selected for the competition. `
);
console.log(
  `Congratulations, ${students[12]}. You are selected for the competition. `
);
console.log(
  `Congratulations, ${students[14]}. You are selected for the competition. `
);

//Replacing elements with index
students[1] = "Samir";
console.log(students);

const items = [
  "mobile",
  "Laptop",
  "Mouse",
  "Keyboard",
  "Display",
  "Camera",
  "Lens",
  "Tv",
  "DVD",
  "CD",
];

console.log(`${items[2]}.`);
console.log(`${items[6]}.`);
console.log(`${items[9]}.`);

//add elements in array
items[5] = "mango";
console.log(items);

//length of the array
console.log(items.length);

//add last elements of the array
items.push("zz");
console.log(items);

//remove last elements of the array
items.pop();
console.log(items);

//remove first elements of the array
items.shift();
console.log(items);

//add the element at the begining without creating loophole
items.unshift("xx");
console.log(items);

//using for loop to cycle array-old method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < items.length; i++) {
  console.log(items[i]);
}

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//using for of loop
for (let item of items) {
  console.log(item);
}

for (let number of numbers) {
  console.log(number * 2);
}

for (let number of numbers) {
  console.log(number * number);
}

//foreach method

numbers.forEach((number) => {
  console.log(number * number);
});

items.forEach((item) => {
  console.log(item);
});
