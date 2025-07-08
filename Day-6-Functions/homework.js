// - Create an arrow function that returns "Good Morning".
const greet = () => {
  return "Good Morning";
};
// console.log(greet());

// - Create an arrow function that returns your name.
const myName = () => {
  return "Samir Tamang";
};
// console.log(myName());

// - Create an arrow function that adds two numbers.
const addNum = (num1 = 5, num2 = 5) => {
  return num1 + num2;
};
// console.log(addNum());

const add = (numA, numB) => {
  return numA + numB;
};
// console.log(addNum(2, 2));

// - Create an arrow function that multiplies two numbers.
const multiply = (n1, n2) => {
  return n1 * n2;
};
// console.log(multiply(3, 3));

// - Create an arrow function that calculates the square of a number.
const square = (length, breath) => {
  return length * breath;
};
// console.log(square(4, 4));

// - Create an arrow function that returns the first character of a string.
const firstChar = (str) => {
  return str.charAt(0);
};
// console.log(firstChar("Hello"));

// const str = "Samir";
// const firstChar = str.charAt(0);
// console.log(firstChar);

// - Create an arrow function that returns the last character of a string.
const lastChar = (str) => {
  return str.slice(-1);
  //   return str[str.length - 1];
};
// console.log(lastChar("dalle"));

// - Create an arrow function that converts minutes to seconds.
const minutesToSecond = (minutes) => {
  return minutes * 60;
};
// console.log(minutesToSecond(4));

// - Create an arrow function that converts Celsius to Fahrenheit.
const celsiusToFahrenheit = (celsius) => {
  const RATIO = 9 / 5;
  const OFFSET = 32;
  return celsius * RATIO + OFFSET;
};
// console.log(celsiusToFahrenheit(25));

// - Create an arrow function that calculates the area of a rectangle (length * breadth).
const areaOfRectangle = (length, breadth) => {
  return length * breadth;
};
// console.log(areaOfRectangle(100, 100));

// - Create an arrow function that calculates the volume of a cuboid (l * b * h).
const volumeOfCuboid = (l, b, h) => {
  return l * b * h;
};
// console.log(volumeOfCuboid(2, 2, 2));

// - Create an arrow function that returns a greeting with the user's name.
const greeting = (username) => {
  return `Username: ${username}`;
};
// console.log(greeting("samir"));

// - Create an arrow function that checks if a number is greater than 100.
const checkNum = (num) => {
  return num > 100 ? `${num} is greater than 100` : `${num} is less than 100`;
};
// console.log(checkNum(101));

// - Create an arrow function that checks if a number is even.
const numIsEven = (num) => {
  return num % 2 === 0 ? `${num} is even number` : `${num} is odd number`;
};
// console.log(numIsEven(98));

// - Create an arrow function that returns the length of a string.
const lengthOfString = (string) => {
  return `Length of string is ${string.length}`;
};
// console.log(lengthOfString("dallemomo"));

// - Create an arrow function that joins two words with a space.
const joinTwoWords = (word1, word2) => {
  return `Joining two words; ${word1} ${word2}`;
};
// console.log(joinTwoWords("Samir", "Tamang"));

// - Create an arrow function that adds three numbers.
const addThreeNum = (num1, num2, num3) => {
  const sumOfThreeNum = num1 + num2 + num3;
  return `Sum of three numbers: ${sumOfThreeNum}`;
};
// console.log(addThreeNum(10, 10, 40));

// - Create an arrow function that returns the type of the input.
const typeOfInput = (input) => {
  return typeof input;
};
// console.log(typeOfInput(true));

// - Create an arrow function that returns the full name from first and last name.
const fullName = (first = "", last = "") => {
  return `${first} ${last}`;
};
// console.log(fullName("Samir"));

// - Create an arrow function that adds 10 to a number.
const addTen = (num) => {
  return num + 10;
};
// console.log(addTen(1));

// - Create an arrow function that doubles the number.
const doubleTheNumber = (num) => {
  return num * 2;
};
// console.log(doubleTheNumber(2));

// - Create an arrow function with default parameter of name = "Guest", and returns "Welcome, Guest".
const userName = (name = "Guest") => {
  return name;
};
// console.log(userName());

// - Create an arrow function that subtracts two numbers.
const subtract = (num1, num2) => {
  return num1 - num2;
};
// console.log(subtract(5, 15));

// - Create an arrow function that returns the perimeter of a rectangle.
const perimeterOfRectangle = (l, w) => {
  const perimeter = 2;
  return perimeter * l + w;
};

// console.log(perimeterOfRectangle(3, 3));

// - Create an arrow function that calculates the simple interest (P * T * R / 100).
const simpleInterest = (P, T, R) => {
  return (P * T * R) / 100;
};
// console.log(simpleInterest(2, 2, 2));

// - Create an arrow function that returns the age next year.
const ageNextYear = (age) => {
  return (age += 1);
};
// console.log(ageNextYear(60));

// - Create an arrow function that returns the reverse of a string.
const reverseOfString = (string) => {
  let reversed = "";
  //   for (let i = string.length - 1; i >= 0; i--) {
  //     reversed += string[i];
  //   }

  for (const char of string) {
    reversed = char + reversed;
  }
  return reversed;
};
// console.log(reverseOfString("Hello"));

// - Create an arrow function that returns the third character of a string.
// - Create an arrow function that checks if a number is less than 50.
// - Create an arrow function that checks if two numbers are equal.
// - Create an arrow function that converts hours to minutes.
// - Create an arrow function that returns the sum of digits of a 2-digit number.
// - Create an arrow function that returns a fixed message: “Welcome to JavaScript!”
// - Create an arrow function that calculates speed given distance and time.
// - Create an arrow function that returns whether a string contains the letter "a".
// - Create an arrow function that returns the cube of a number.
// - Create an arrow function that returns the remainder when a number is divided by 5.
// - Create an arrow function that adds a number to itself.
// - Create an arrow function that converts years to days.
// - Create an arrow function that returns the average of three numbers.
