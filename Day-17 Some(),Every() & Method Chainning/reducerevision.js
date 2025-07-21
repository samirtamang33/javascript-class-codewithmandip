const products = [
  {
    id: 1,
    name: "MacBook Pro",
    category: "Laptop",
    price: 180000,
    isAvailable: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Dell Inspiron",
    category: "Laptop",
    price: 90000,
    isAvailable: true,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Samsung Galaxy S21",
    category: "Phone",
    price: 70000,
    isAvailable: false,
    rating: 4.5,
  },
  {
    id: 4,
    name: "iPhone 13",
    category: "Phone",
    price: 120000,
    isAvailable: true,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Sony Bravia",
    category: "TV",
    price: 150000,
    isAvailable: true,
    rating: 4.6,
  },
  {
    id: 6,
    name: "LG OLED",
    category: "TV",
    price: 170000,
    isAvailable: false,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Fossil Smartwatch",
    category: "Watch",
    price: 25000,
    isAvailable: true,
    rating: 4.1,
  },
  {
    id: 8,
    name: "Casio Digital",
    category: "Watch",
    price: 5000,
    isAvailable: true,
    rating: 4.0,
  },
  {
    id: 9,
    name: "HP Pavilion",
    category: "Laptop",
    price: 75000,
    isAvailable: true,
    rating: 4.3,
  },
  {
    id: 10,
    name: "Realme 11 Pro",
    category: "Phone",
    price: 33000,
    isAvailable: true,
    rating: 4.2,
  },
];

// Count of products in each category ({ Laptop: 3, Phone: 3, ... }) - Hard and Important

const categoryCount = products.reduce((acc, product) => {
  acc[product.category] = acc[product.category] ? acc[product.category] + 1 : 1;
  return acc;
}, {});
// console.log(categoryCount);

// - Find the product with the highest rating - if its difficult lets find the highest rating first.
const maxRateProduct = products.reduce((acc, product) => {
  return product.rating > acc.rating ? product : acc;
});
// console.log(maxRateProduct);

// - Find the product with the longest name.
const longestProductName = products.reduce((acc, product) => {
  return product.name.length > acc.name.length ? product : acc;
});
// console.log(longestProductName);

//some() method in array
// It returns true if at least one item satisfies the condition.
// Actually it stops the execution if it finds the first item which satisfies the condition.
// eg. If someone says you to catch one fish, then you stop after catching one fish.

{
  const numbers = [1, 3, 5, 7, 9];
  const hasEven = numbers.some((number) => number % 2 === 0);
  //   console.log(hasEven);
}

{
  const numbers = [10, 20, 30, 40, 50];
  const greaterThanForty = numbers.some((number) => number > 40);
  //   console.log(greaterThanForty);
}
{
  const fruits = ["apple", "banana", "mango"];
  const sringLength = fruits.some((fruit) => fruit.length < 4);
  //   console.log(sringLength);
}

// every() method in array
// It returns true only if all the elements satisfies the condition.
// Actually it stops the execution once it find the item which fails the condition.
// eg. If you are checking did all students passed in exam and if you find one failed
// student then you can instantly say that every student doesnt pass in exam.
{
  // Check if all the students are passed in exam or not [45,98,67,89,67,77,33,48,32]. pass marks is 40.
  const marks = [45, 98, 67, 89, 67, 77, 33, 48, 32];
  const areStudentsPassed = marks.every((mark) => mark >= 40);
  //   console.log(areStudentsPassed);
}

{
  // Check if all words are of length more than 4 or not  [”apple”,”banana”,”mango”].
  const fruits = ["apple", "banana", "mango"];
  const sringLength = fruits.every((fruit) => fruit.length > 4);
  //   console.log(sringLength);
}

//Spread Operators in Array
//The **array spread operator** in JavaScript is written as
// `...` and is used to **expand (spread)** elements of an array.

{
  const numbers = [10, 20, 30, 40, 50];
  const newNumbers = [...numbers, 60, 70];
  const newNewNumbers = [...numbers, ...newNumbers, 80, 90, 100];
  //   console.log(newNewNumbers);
}

{
  //Copy an array
  //This creates a shallow copy, not a reference
  const numbers = [10, 20, 30, 40, 50];
  const copy = [...numbers];
  copy.pop();
  console.log(numbers);
  console.log(copy);
}

{
  {
    //
    //This creates a shallow copy, not a reference
    const numbers = [10, 20, 30, 40, 50];
    const copy = [...numbers];
    copy.pop();
    console.log(numbers);
    console.log(copy);
  }
}

{
  // Merge arrays
  const num = [1, 2, 3];
  const str = ["a", "b", "c"];
  const merge = [...num, ...str];
  console.log(merge);
}

{
  //Convert string to array
  const word = "hello";
  const chars = [...word];
  console.log(chars); // ['h', 'e', 'l', 'l', 'o']
}
{
  //Use in function arguments
  const num = [1, 2, 3];
  const max = Math.max(...num);
  console.log(max);
}

{
  //Method Chaining
  //Task
  const numbers = [10, 20, 30, 40, 50];
  sumOfDoubleEvenNumbers = numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * number)
    .reduce((acc, number) => acc + number, 0);
  console.log(sumOfDoubleEvenNumbers);
}
