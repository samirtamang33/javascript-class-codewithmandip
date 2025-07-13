// # 🏠 Homework Exercises for Map, Filter & Combination

const { notEqual } = require("assert");

// ---

// ## 🔹 MAP-only (15 exercises)

// 1. Add 5 to each number in `[2, 7, 15, 22, 30]`
{
  const numbers = [2, 7, 15, 22, 30];
  const newNumbers = numbers.map((number) => number + 5);
  console.log(newNumbers);
}
// 2. Convert `[“red”, “green”, “blue”]` to uppercase
{
  const colors = ["red", "green", "blue"];
  const newColors = colors.map((color) => color.toUpperCase());
  console.log(newColors);
}
// 3. Multiply each price by 1.5 in `[100, 200, 300, 400]`
{
  const prices = [100, 200, 300, 400];
  const newPrices = prices.map((price) => price * 1.5);
  console.log(newPrices);
}
// 4. Add “USD ” prefix to `[50, 70, 90]`
{
  const dollars = [50, 70, 90];
  const newdollars = dollars.map((dollar) => `USD ${dollar}`);
  console.log(newdollars);
}
// 5. Replace each vowel in `[“apple”, “orange”, “grape”]` with “*”
{
  const vowels = ["apple", "orange", "grape"];
  const replaceStr = vowels.map((vowel) => vowel.replace(/[aeiou]/gi, "*"));
  console.log(replaceStr);
}
// 6. Extract first character from each word in `[“cat”, “dog”, “bird”]`
{
  const strings = ["cat", "dog", "bird"];
  const newStrings = strings.map((str) => str[0]);
  console.log(newStrings);
}
// 7. Add “th” suffix to numbers `[1, 2, 3, 4, 5]` → `[“1th”, “2th”, …]`
{
  const numbers = [1, 2, 3, 4, 5];
  const newNumbers = numbers.map((number) => `${number}th`);
  console.log(newNumbers);
}
// 8. Convert `[“Nepal”, “India”, “China”]` to lowercase
// 9. Calculate length of each word in `[“school”, “college”, “university”]`
{
  const words = ["school", "college", "university"];
  const wordsLength = words.map((word) => word.length);
  console.log(wordsLength);
}
// 10. Square each number in `[2, 3, 4, 5, 6]`
// 11. Add 100 tax to each price in `[1000, 2500, 4000, 5500]`
// 12. Add “Rs.” suffix to `[500, 750, 1200]`
// 13. Reverse each string in `[“hello”, “world”]`
{
  const strings = ["hello", "world"];
  const reverse = strings.map((str) => str.split("").reverse().join(""));
  console.log(reverse);
}
// 14. Add “day ” prefix to numbers `[1, 2, 3, 4, 5]`
// 15. Convert each number to string in `[10, 20, 30]`

// ---

// ## 🔹 FILTER-only (15 exercises)

// 1. Filter odd numbers from `[1, 2, 3, 4, 5, 6, 7, 8, 9]`
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);
  console.log(oddNumbers);
}
// 2. Filter words that contain letter ‘a’ from `[“cat”, “dog”, “bat”, “rat”]`
{
  const words = ["cat", "dog", "bat", "rat"];
  const containA = words.filter((word) => word.includes("a"));
  console.log(containA);
}
// 3. Filter prices less than 500 from `[100, 400, 600, 900, 250]`
{
  const prices = [100, 400, 600, 900, 250];
  const newPrices = prices.filter((price) => price < 500);
  console.log(newPrices);
}
// 4. Filter names that start with ‘S’ from `[“Ram”, “Sita”, “Hari”, “Suman”]`
{
  const names = ["Ram", "Sita", "Hari", "Suman"];
  const newNames = names.filter((name) => name.startsWith("S"));
  console.log(newNames);
}
// 5. Filter strings longer than 3 letters `[“a”, “be”, “cat”, “door”]`
{
  const strings = ["a", "be", "cat", "door"];
  const newStrings = strings.filter((string) => string.length >= 3);
  console.log(newStrings);
}
// 7. Filter words ending with ‘e’ `[“apple”, “banana”, “grape”, “mango”]`
{
  const words = ["apple", "banana", "grape", "mango"];
  const newWords = words.filter((word) => word.endsWith("e"));
  console.log(newWords);
}
// 6. Filter numbers divisible by 5 `[10, 11, 12, 15, 20, 22]`
{
  const numbers = [10, 11, 12, 15, 20, 22];
  const newNumbers = numbers.filter((number) => number % 5 === 0);
  console.log(newNumbers);
}
// 8. Filter phone numbers with length 10 `[“9812345678”, “12345”, “9876543210”]`
{
  const numbers = ["9841628399", "12345", "9802345359"];
  const newNumbers = numbers.filter((number) => number.length === 10);
  console.log(newNumbers);
}
// 9. Filter ages less than 18 `[12, 15, 20, 22, 16, 14]`
// 10. Filter even prices `[300, 500, 700, 800, 1200]`
// 11. Filter words with letter ‘r’ `[“car”, “bus”, “train”, “bike”]`
// 12. Filter marks less than 50 `[30, 45, 50, 60, 70]`
// 13. Filter numbers greater than or equal to 100 `[50, 100, 150, 80, 90]`
// 14. Filter names not starting with ‘K’ `[“Kiran”, “Ram”, “Krishna”, “Hari”]`
// 15. Filter scores below passing (passing = 35) `[40, 30, 20, 50, 60]`

// ---

// ## 🔹 MAP + FILTER combined (20 exercises)

// 1. Filter numbers greater than 10 and then subtract 5 from each `[5, 12, 20, 3, 7]`
{
  const numbers = [5, 12, 20, 3, 7];
  const newNumbers = numbers
    .filter((number) => number > 10)
    .map((number) => number - 5);
  console.log(newNumbers);
}

// 2. Filter words shorter than 5 letters and convert to uppercase `[“apple”, “dog”, “cat”, “banana”]`
{
  const words = ["apple", "dog", "cat", "banana"];
  const newWords = words
    .filter((word) => word.length < 5)
    .map((word) => word.toUpperCase());
  console.log(newWords);
}
// 3. Filter prices less than 1000 and add 100 tax `[500, 1200, 800, 1500]`
// 4. Filter names starting with ‘A’ and add “Hello ” prefix `[“Anil”, “Ram”, “Asha”]`
// 5. Filter odd numbers and square them `[1, 2, 3, 4, 5]`
// 6. Filter phone numbers starting with ‘9’ and add country code +1 `[“9812345678”, “8712345678”]`
// 7. Filter marks above 60 and mark as “Passed ” `[55, 65, 70, 45]`
// 8. Filter cities starting with ‘B’ and add “City: ” prefix `[“Biratnagar”, “Kathmandu”, “Bharatpur”]`
// 9. Filter ages below 18 and add “Minor: ” prefix `[16, 20, 15, 25]`
// 10. Filter names longer than 3 letters and reverse the string `[“Ram”, “Hari”, “Sita”, “Gita”]`
// 11. Filter prices above 500 and convert to dollars by dividing by 120 `[600, 400, 800, 1000]`
// 12. Filter numbers divisible by 3 and add 10 `[3, 6, 7, 9, 10]`
// 13. Filter names containing letter ‘i’ and convert to lowercase `[“Sita”, “Ram”, “Mina”, “Hari”]`
// 14. Filter words ending with ‘a’ and add “-done” suffix `[“Sita”, “Ram”, “Gita”]`
// 15. Filter numbers less than 50 and multiply by 2 `[20, 40, 50, 60]`
// 16. Filter marks below 35 and add “Failed: ” `[20, 30, 40, 50]`
// 17. Filter phone numbers with length 10 and format as `(xxx) xxx-xxxx` `[“9812345678”, “12345”, “9876543210”]`
// 18. Filter names starting with ‘R’ and convert to initials `[“Ram”, “Ramesh”, “Sita”]` (e.g. “R.”)
// 19. Filter ages above 25 and add “Senior ” prefix `[22, 30, 27, 24]`
// 20. Filter words with length 4 or more and convert to upperCase `[“apple”, “bat”, “cat”, “door”]`
