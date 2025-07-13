// HomeWorks

// find()

// - Find the first number greater than 50 in this array:

//     const numbers = [12, 25, 55, 40, 90]

// - Find the first word that starts with the letter 'b':

//     const words = ['apple', 'banana', 'grapes', 'blueberry']

// - Find the first even number in this array:

//     const numbers = [3, 7, 9, 12, 15]

// - Find the first name that has more than 5 letters:

//     const names = ['Ram', 'Sita', 'Krishna', 'Gita']

// - Find the first temperature below 0:

//     const temps = [5, 3, -2, 0, -5]

//     findIndex()

// - Find the index of the first number greater than 100 in this array:

//     const numbers = [40, 90, 150, 60, 200]

// - Find the index of the first word that ends with the letter 'e':

//     const words = ['dog', 'cat', 'apple', 'orange']

// - Find the index of the first odd number in this array:

//     const numbers = [2, 4, 6, 9, 12]

// - Find the index of the first name that starts with 'S':

//     const names = ['Ram', 'Sita', 'Gita', 'Shyam']

// - Find the index of the first number that is divisible by 3:

//     const numbers = [4, 7, 10, 12, 15]

//     Reduce

//     - Sum all numbers in this array using reduce:
{
  const numbers = [1, 2, 3, 4];
  const total = numbers.reduce((acc, number) => {
    return acc + number;
  }, 0);
  console.log(total);
}
//     - Find the product of all numbers in this array using reduce:
{
  const numbers = [2, 3, 4];
  const product = numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
  console.log(product);
}
//     - Find the maximum number in this array using reduce:
{
  const numbers = [5, 10, 2, 8];
  const max = numbers.reduce((acc, number) => {
    return acc > number ? acc : number;
  });
  console.log(max);
}
//     - Find the smallest number in this array using reduce:
{
  const numbers = [15, 8, 20, 3, 12];
  const min = numbers.reduce((acc, number) => {
    return acc < number ? acc : number;
  }, 0);
  console.log(min);
}
//     - Count the total number of characters in this array of strings using reduce:

{
  const words = ["hello", "world!"];
  const countChar = words.reduce((acc, word) => {
    return acc + word.length;
  }, 0);
  console.log(countChar);
}

//     - Count how many times the word 'apple' appears in this array using reduce:
{
  const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
  const duplicates = fruits.reduce((acc, fruit) => {
    return acc + fruit.includes("apple");
  }, 0);
  console.log(duplicates);
}
//     - Count how many words have more than 4 letters using reduce:

{
  const words = ["tree", "banana", "car", "elephant", "dog"];
  const stringCount = words.reduce((acc, word) => {
    return acc + (word.length > 4 ? 1 : 0);
  }, 0);
  console.log(stringCount);
}

//     - Find the sum of only even numbers in this array using reduce:
{
  const numbers = [4, 7, 10, 13, 16];
  const sumOfEven = numbers.reduce((acc, number) => {
    return acc + (number % 2 === 0 ? number : 0);
  }, 0);
  console.log(sumOfEven);
}
//     - Find the sum of only odd numbers in this array using reduce:
{
  const numbers = [3, 6, 9, 12, 15];
  const sumOfOdd = numbers.reduce((acc, number) => {
    return acc + (number % 2 !== 0 ? number : 0);
  }, 0);
  console.log(sumOfOdd);
}

//     - Count how many times the number 5 appears in this array using reduce:

{
  const numbers = [5, 2, 5, 7, 5, 9];
  const duplicates = numbers.reduce((acc, number) => {
    return acc + (number === 5 ? 1 : 0);
  }, 0);
  console.log(duplicates);
}

//     - Count how many names start with the letter 'A' using reduce:
{
  const names = ["Anil", "Ram", "Asha", "Gita", "Amrit", "Samir", ""];
  const startA = names.reduce((acc, name) => {
    return acc + (name[0] === "A" ? 1 : 0);
    // return acc + (name.startsWith("A") ? 1 : 0);
  }, 0);
  console.log(startA);
}
//     - Count how many numbers are greater than 50 using reduce:
{
  const numbers = [20, 55, 60, 35, 75, 51];
  const newNumbers = numbers.reduce((acc, number) => {
    return acc + (number > 50 ? 1 : 0);
  }, 0);
  console.log(newNumbers);
}
//     - Count how many words have exactly 3 letters using reduce:

{
  const words = ["cat", "apple", "dog", "sun", "banana"];
  const threeLetters = words.reduce((acc, word) => {
    return acc + (word.length === 3 ? 1 : 0);
  }, 0);
  console.log(threeLetters);
}

//     - Count how many words start with a vowel using reduce:
{
  const words = ["apple", "banana", "orange", "grape", "umbrella"];
  const startA = words.reduce((acc, word) => {
    return (
      acc +
      (word[0] === "a" ||
      word[0] === "e" ||
      word[0] === "i" ||
      word[0] === "o" ||
      word[0] === "u"
        ? 1
        : 0)
    );
  }, 0);
  console.log(startA);
}
//     - Find the total length of all words combined using reduce:
{
  const words = ["code", "chat", "gpt"];
  const lenghtOfWords = words.reduce((acc, word) => {
    return acc + word.length;
  }, 0);
  console.log(lenghtOfWords);
}

//     - Count how many numbers are negative using reduce:
{
  const numbers = [3, -2, 7, -5, 0];
  const negativeNumbers = numbers.reduce((acc, number) => {
    return acc + (number < 0 ? 1 : 0);
  }, 0);
  console.log(negativeNumbers);
}

//     - Find the longest word in this array using reduce:

{
  const words = ["sun", "banana", "apple", "elephant"];
  const longestWord = words.reduce((acc, word) => {
    return word.length > acc.length ? word : acc;
  }, "");
  console.log(longestWord);
}

//     - Count how many fruits contain the letter 'a' using reduce:
{
  const fruits = ["apple", "banana", "grape", "kiwi"];
  const countLetterA = fruits.reduce((acc, fruit) => {
    return acc + (fruit.includes("a") ? 1 : 0);
  }, 0);
  console.log(countLetterA);
}
//     - Find the sum of numbers that are multiples of 3 using reduce:

{
  const numbers = [3, 5, 9, 12, 14];
  const sum = numbers.reduce((acc, number) => {
    return acc + (number % 3 === 0 ? number : 0);
  });
  console.log(sum);
}

//     - Count how many words have less than 5 letters using reduce:
{
  const words = ["tree", "banana", "car", "elephant", "dog"];
  const lesFiveChar = words.reduce((acc, word) => {
    return acc + (word.length < 5 ? 1 : 0);
  }, 0);
  console.log(lesFiveChar);
}

//     - Find the smallest odd number in this array using reduce:

{
  const numbers = [11, 6, 1, 9, 14];
  const minOdd = numbers.reduce((acc, number) => {
    return number % 2 !== 0 && number < acc ? number : acc;
  });
  console.log(minOdd);
}

//     - Count how many names end with the letter 'n' using reduce:

//         const names = ['Arjun', 'Sita', 'Gitan', 'Mohan']

//     - Count how many numbers are between 10 and 20 inclusive using reduce:

//         const numbers = [5, 10, 15, 20, 25]

//     - Find the sum of squares of all numbers in this array using reduce:

//         const numbers = [2, 3, 4]
