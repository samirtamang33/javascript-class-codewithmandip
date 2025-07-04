const { on } = require("events");

// Check if a number is positive or negative.
const checkNum = (num) => (num < 0 ? "Negetavi" : "Positive");
// console.log(checkNum(1));

// Check if a number is odd or even.
const numType = (num) => (num % 2 === 0 ? "Even Number" : "Odd Number");
// console.log(numType(0));

// Return "Pass" if score ≥ 40, otherwise "Fail".
const result = (marks) => (marks >= 40 ? "Pass" : "Fail");
// console.log(result(100));

// Check if a string is empty or not.
const string = (char) => (char ? "Not Empty" : "Empty");
// console.log(string(""));

// - Set a discount based on price (`price > 1000 ? 10% discount : 5% discount`).
const discount = (price) =>
  price > 1000 ? `10% discount: ${price * 0.1}` : `5% discount: ${price * 0.5}`;
// console.log(discount(900));

// - Return "Adult" if age ≥ 18, "Minor" otherwise.
const ageCategory = (age) => (age >= 18 ? "Adult" : "Minor");
// console.log(ageCategory(17));

// - Show “In Stock” or “Out of Stock” based on quantity.
const inventory = (count) => (count < 1 ? "Out of Stock" : "In Stock");
// console.log(inventory(0));

// - Return "Login Successful" if username and password match, else "Access Denied".
const isLogin = (username, password) => {
  const myUsername = "Samir";
  const myPassword = 123;
  return username === myUsername && password === myPassword
    ? "Login Successful"
    : "Access Denied";
};
// console.log(isLogin("Samir", 12));

const grade = (marks) =>
  marks >= 90 && marks <= 100
    ? "A+"
    : marks >= 80 && marks < 90
    ? "A"
    : marks >= 70 && marks < 80
    ? "B+"
    : marks >= 60 && marks < 70
    ? "B"
    : marks >= 50 && marks < 60
    ? "C+"
    : marks >= 40 && marks < 50
    ? "C"
    : marks >= 35 && marks < 40
    ? "D"
    : "NG";
// console.log(grade(90));
