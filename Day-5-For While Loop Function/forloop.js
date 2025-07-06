// const number = 1;
// const limit = 50;

// console.log(`Multiplication table for ${number} up to ${limit}:`);
// for (let i = 1; i <= limit; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

//while loop

// const number = 1;
// const limit = 50;

// let i = 5;
// while (i <= limit) {
//   console.log(`${number} x ${i} = ${number * i}`);
//   i += 5;
// }

//do while loop

// const inputNumber = 10;
// let i = 1;

// console.log(`Multiplicatin table of ${inputNumber}:`);

// do {
//   console.log(`${inputNumber} x ${i} = ${inputNumber * i}`);
//   i++;
// } while (i <= 10);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Enter a positive integer to calculate the sum of first n numbers: ",
  (n) => {
    n = parseInt(n);

    if (isNaN(n) || n < 1) {
      console.log("Please enter a valid positive integer.");
    } else {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      console.log(`The sum of first ${n} numbers is: ${sum}`);
    }

    readline.close();
  }
);
