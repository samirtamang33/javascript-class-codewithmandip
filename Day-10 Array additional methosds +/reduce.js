//find() methods
// Task

// 1. Imagine you have a list of **days of the month** when you have to go to gym,
// and you want to find the first even day when you have to go to gym.
// gymDays = [3, 5, 8, 11, 14, 15, 21, 26, 29].

{
  const gymDays = [3, 5, 8, 11, 14, 15, 21, 26, 29];
  const firstEvenDay = gymDays.find((gymDay) => gymDay % 2 === 0);
  console.log(firstEvenDay);
}

// 2. Imagine you have a list of students’ exam scores,
// and you want to find the **first student who scored above the passing mark**
// so you can congratulate them. scores = [35, 42, 38, 50, 45, 30, 60]

{
  const scores = [35, 42, 38, 50, 45, 30, 60];
  const abovePassMarks = scores.find((score) => score > 30);
  console.log(abovePassMarks);
}

//findIndex() method
// Task
// 1. Find the index of first negative number [5, 3, 0, -2, -5]
{
  const numbers = [5, 3, 0, -2, -5];
  const indexOfFirstNegativeNumber = numbers.findIndex((number) => number < 0);
  console.log(indexOfFirstNegativeNumber);
}
// 2. Find index of first string longer than 5 characters.
// ['Anna', 'John', 'Elizabeth', 'Tom']
{
  const strings = ["Anna", "John", "Elizabeth", "Tom"];
  const index = strings.findIndex((string) => string.length > 5);
  console.log(index);
}

//includes() method
{
  const fruits = ["apple", "banana", "mango"];
  console.log(fruits.includes("apple"));
  console.log(fruits.includes("grapes"));
}
//Task
// 1. Check if mango exist in a list ['apple', 'banana', 'mango']
{
  const fruits = ["apple", "banana", "mango"];
  console.log(fruits.includes("mango"));
}
// 2. Check if “e” exists in list ['a', 'b', 'c', 'd']
{
  const strings = ["a", "b", "c", "d"];
  console.log(strings.includes("e"));
}

//Array Destrucuring
// Traditional way (without destructuring)
{
  const colors = ["red", "green", "blue"];
  const first = colors[0];
  const second = colors[1];
  const third = colors[2];

  console.log(first);
  console.log(second);
  console.log(third);
}

// With Destructuring
{
  const fruits = ["mango", "apple", "oragen", "banana"];
  const [first, second, ,] = fruits;
  console.log(first);
}
// If you try to extract more values than exist, you’ll get undefined.
{
  const arr = [1];
  const [a, b, c] = arr;
  console.log(b);
}

//reduce()
{
  const numbers = [10, 20, 30, 40, 50, 60, 70];
  const total = numbers.reduce((acc, number) => {
    return acc + number;
  }, 0);
  console.log(total);
}

{
  const numbers = [1, 2, 3];
  const total = numbers.reduce((acc, number) => {
    return acc + number;
  });
  console.log(total);
}

{
  const numbers = [2, 3, 4];
  const product = numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
  console.log(product);
}

{
  const numbers = [2, 3, 4];
  const max = numbers.reduce((acc, number) => {
    return acc > number ? acc : number;
  }, 0);
  console.log(max);
}
