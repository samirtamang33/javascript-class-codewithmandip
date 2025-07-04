// // primitive data types

// let weight = 60; //number

// let name = "Samir33"; //string

// const todayRain = true; //boolean

// const numberOfCar = null; //object old code

// let height; //undefined

// console.log(typeof numberOfCar);

// // Example of Object

// const student1 = { name: "Ram" };
// const student2 = student1;
// student2.name = "Shyam";

// console.log(student1); //print same value
// console.log(student2); //print same value

// IF ELSE EXAMPLE
// if remainder = 0
// let num = 3;
// if (num % 2 == 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

//Truthy Value = String, Number
//Falsy Value = Empty String, 0, true, false, null, undefined, NaN

// if ("false") {
//   console.log("Hello World");
// }

//mornig, afternoon, evening

// let temperature = 50;

// if (temperature > 30) {
//   console.log("Hot");
// } else if (temperature < 15) {
//   console.log("Cold");
// } else {
//   console.log("Normal");
// }

// if else && all condition has to be correct
// if else Or || one condition has to be correct

// let property = 4000000;
// let job = true;

// if (property >= 5000000 && job == true) {
//   console.log("You can get loan");
// } else {
//   console.log("You can not get loan");
// }

// let age = 15;
// let trialExam = "Pass";

// if (age >= 16 && trialExam == "Pass") {
//   console.log("Congratulations! Your eligible to drive");
// } else {
//   console.log("Sorry next time");
// }

// let youHaveTicket = true;
// let youAreInGuestList = false;

// if (youHaveTicket == true || youAreInGuestList == true) {
//   console.log("You Can Enter");
// } else {
//   console.log("You Can not Enter");
// }

//1.Check if a number is divisible by 5
// let num = 21;

// if (num % 5 == 0) {
//   console.log("Yes, number is divisible by 5");
// } else {
//   console.log("No, number is not divisible by 5");
// }

//2. Check if a student passed or failed (Pass mark 40)

// let passMark = 30;

// if (passMark >= 40) {
//   console.log("Passed");
// } else {
//   console.log("Failed");
// }

//3.Check if a character is a vowel or consonant.

// let character = "U";

// if (
//   character == "A" ||
//   character == "E" ||
//   character == "I" ||
//   character == "O" ||
//   character == "U"
// ) {
//   console.log("Vowels");
// } else {
//   console.log("Consonant");
// }

// 4. Check if a number is greater than 100
// let num = 101;
// if (num > 100) {
//   console.log("Yes, number is greater than 100");
// } else {
//   console.log("No, number is not greater than 100");
// }

//5.Check if a number is less than 50.
// let num = 49;
// if (num < 50) {
//   console.log("Yes, number is less than 50");
// } else {
//   console.log("No, number is not less than 50");
// }

//6.Check if temperature is above 30 (hot) or not.
// let temparature = 31;
// if (temparature > 30) {
//   console.log("Ohh Hot day");
// } else {
//   console.log("Not hot");
// }

// 7.Check if a person is a teenager (age between 13 and 19).
// let age = 20;
// if (age >= 13 && age <= 19) {
//   console.log("Teenager");
// } else {
//   console.log("Not a teenager");
// }

// 8.Check if a year is a leap year (divisible by 4).

// let year = 2024;

// if (year % 4 == 0) {
//   console.log("yes leap year");
// } else {
//   console.log("no leap year");
// }

// Check if a string length is more than 10 characters.
// let strings = "Sindhupalchok";
// let length = strings.length;

// if (length > 10) {
//   console.log("String length is more than 10");
// } else {
//   console.log("String length is not more than 10");
// }

//Check if a number is between 1 and 10.
// let num = 11;
// if (num >= 1 && num <= 10) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

//Check if a number is zero or not.
// let num = 0;
// if (num === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

//Check if a person is a child (age < 13).
// let age = 14;
// console.log(age < 13 ? "Child" : "Not a Child");

//Check if a person can drive (age ≥ 18).
// let age = 17;
// console.log(age >= 18 ? "You can drive" : "You can not drive");

//Check if a password length is at least 8 characters.

// let password = "p123";
// let length = password.length;

// if (length >= 8) {
//   console.log("Enough Password Characters");
// } else {
//   console.log("Password need at least 8 characters");
// }

//Check if a day number is weekend (6 or 7) or weekday.

// let day = 1;
// console.log(day === 6 || day === 7 ? "Weekend" : "Weekday");

// const checkDayTye = (day) => {
//   return day >= 1 && day <= 5 ? "Weekday" : "Weekend";
// };
// console.log(checkDayTye(6));

// Check if a number is a multiple of 3.
// const checkMultipleOfThree = (num) => {
//   return num % 3 === 0 ? "Yes" : "No";
// };

// console.log(checkMultipleOfThree(31));

// Check if a person is eligible for senior citizen discount (age ≥ 60).
const seniorCitizenDiscount = (age) => {
  return age >= 60
    ? "You are eligible to discount"
    : "No you are not eligible to discount";
};
// console.log(seniorCitizenDiscount(59));

// Check if a letter is uppercase or lowercase.
// const letterCase = (characters) => {
//   // return characters === characters.toUpperCase() ? "UPPERCASE" : "lowercase";
//   if (/[A-Z]/.test(characters)) {
//     return "UPPERCASE";
//   } else if (/[a-z]/.test(characters)) {
//     return "Lowercase";
//   } else {
//     return "Not a letter";
//   }
// };
// console.log(letterCase("UUU"));

// num = 1;
// if (num % 2 !== 0 || num > 10) {
//   console.log("Yes, number is odd & greater than ten");
// } else {
//   console.log("No, nmuber is not odd and greater than ten");
// }

// const numCheck = (num) => {
//   return num % 2 !== 0 ? "Odd" : "Even";
// };
// console.log(numCheck(4));

// const studentMarks = (score) => {
//   return score === 100 ? "Full Marks" : { score };
// };
// console.log(studentMarks(100));

// const numCheck = (num) => {
//   if (num < 0) {
//     return "Negetive";
//   } else if (num > 0) {
//     return "Positive";
//   } else {
//     return "Zero";
//   }
// };
// console.log(numCheck(0));

// num1 = 2;
// num2 = 1;

// if (num1 === num2) {
//   console.log("Equal");
// } else {
//   console.log("Not Equal");
// }

// const isEqual = (num1, num2) => {
//   return num1 === num2 ? "Equal" : "Not Equal";
// };

// console.log(isEqual(1, 2));

const userLogIn = (login) => {
  return login === true ? "User Login" : "Not log in";
};
console.log(userLogIn(false));

const access = (permission) => {
  return permission === true ? "Access" : "Not access";
};
console.log(access(true));

const speedLimit = (speed) => {
  return speed > 60 ? "Over Speed" : "No over speend";
};
console.log(speedLimit(61));

const productStock = (qty) => {
  return qty > 0 ? "In Stock" : "Out of Stock";
};
console.log(productStock(0));
