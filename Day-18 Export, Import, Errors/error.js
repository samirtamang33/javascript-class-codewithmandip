// {
//   //for in loop
//   const student = {
//     name: "John",
//     age: 20,
//     grade: "A+",
//   };

//   for (key in student) {
//     console.log(key + ": " + student[key]);
//   }

//   const fruit = {
//     apple: 10,
//     banana: 5,
//     orange: 8,
//   };

//   for (let key in fruit) {
//     console.log(key, fruit[key]);
//   }
// }

// How to throw manual error in javascript
// throw new Error("Something went wrong");

{
  //Try, Catch, Finally
  try {
    // Code that may throw an error
    console.log(age);
  } catch (error) {
    // Handle the error
    console.log(error.message);
  } finally {
    // Code that will run regardless of an error occurring
    console.log("This will always run");
  }
  // works only
  //Reference Error
  // Type Error
  // Syntax Error
  // Range Error
  // Error
}

const divide = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Division operation completed");
  }
};

console.log(divide(10, 2));
