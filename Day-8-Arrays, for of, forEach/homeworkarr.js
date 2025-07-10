// ## 📘 **Homework – Arrays, Indexing, and Looping**

// ### ✅ 1. Create arrays (creative)

// > Create 3 different arrays:
// - One of your **favorite foods**
const foods = ["momo", "chowmein", "pasta", "pizza", "burger", "sandwich"];

// - One of **countries you want to visit**
const countries = ["Australia", "Japan", "Switzerland", "USA", "China"];
// - One of **games you played in childhood**
const games = ["football", "cycling", "cricket", "swimming", "pubg"];

// (Minimum 5 items in each)

// ---

// ### ✅ 2. Use indexing (no loop)

// > Create an array of 12 Marvel superheroes.
const marvelSuperHeroes = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Hawkeye",
  "Spider-Man",
  "Black Panther",
  "Doctor Strange",
  "Ant-Man",
  "Wasp",
  "Sacrlet Witch",
];
// > Now print the names at index `2`, `5`, `7`, `10` in this format:
console.log(marvelSuperHeroes[2]);
console.log(marvelSuperHeroes[5]);
console.log(marvelSuperHeroes[7]);
console.log(marvelSuperHeroes[10]);

// > 👉 `"Avenger {name} is called for the mission!"` (use template strings)
console.log(`Avenger ${marvelSuperHeroes[0]} is called for the mission!`);

// ### ✅ 3. Replace using index

// > Create an array of 8 college courses.
const courses = [
  "Biology",
  "Chemistry",
  "Physics",
  "Accounting",
  "Marketing",
  "Business",
  "Computer Science",
  "Civil Engineering",
];

// > Now replace the 2nd, 4th, and 8th item with new subjects you wish your college offered.
courses[1] = "AI";
courses[3] = "Web Dev";
courses[7] = "Data Analysis";
//old method
// for (let i = 0; i < courses.length; i++) {
//   console.log(courses[i]);
// }
//new method
for (let course of courses) {
  console.log(course);
}

// ### ✅ 4. Add and remove items

// - Create an array of your 6 dream gadgets.
const gadgets = [
  "Mackbook Pro",
  "Iphone",
  "Marshall Speaker",
  "Garmin Fenix 8 Pro",
  "Sony FX3 II",
  "Sony G Master 24-70 II",
];
// - Use `push()` to add 2 more.
gadgets.push("PS5", "DJI");
// - Then use `pop()` to remove 1.
gadgets.pop();
// - Use `unshift()` to add your most-wanted item at the start.
gadgets.unshift("Action Camera");
// - Finally, use `shift()` to remove the first item.
gadgets.shift();
// > After each step, log the array.
console.log(gadgets);

// ---

// ### ✅ 5. Using `for...of`

// > Create an array of 6 cities in Nepal.
const cities = [
  "Kathmandu",
  "Pokhara",
  "Dhangadi",
  "Nepalgunj",
  "Mahendranagar",
  "Itahari",
];
// > Now using `for...of`:
// - Print all city names
for (let city of cities) {
  console.log(city);
}
// - Print each with `"I want to visit {city}."`
console.log(`I want to visit ${cities[0]}.`);
console.log(`I want to visit ${cities[1]}.`);
console.log(`I want to visit ${cities[2]}.`);
console.log(`I want to visit ${cities[3]}.`);
console.log(`I want to visit ${cities[4]}.`);
console.log(`I want to visit ${cities[5]}.`);
// - Print their lengths (how many letters in the name)
console.log(cities[0].length);
console.log(cities[1].length);
console.log(cities[2].length);
console.log(cities[3].length);
console.log(cities[4].length);
console.log(cities[5].length);
// ---

// ### ✅ 6. Using `forEach()`

// > Create an array of 5 numbers: [3, 5, 7, 9, 11]
const numbers = [3, 5, 7, 9, 11, 12];

// > Using `forEach()`:
numbers.forEach((number) => {
  console.log(number);
});
// - Print the number and its **double**
numbers.forEach((number) => {
  console.log(number * 2);
});
// - Print the number and its **square**
numbers.forEach((number) => {
  console.log(number * number);
});
// - Print if the number is **even or odd**
numbers.forEach((number) => {
  console.log(`${number % 2 === 0 ? "even" : "odd"}`);
});

// ### ✅ 7. Bonus challenge (for quick finishers)

// > Create an array of 6 student names.
const names = ["Samir", "Dinesh", "Chiran", "Suren", "Suraj", "San"];
// > Using a loop (any of your choice), print:
for (let i = 0; i < names.length; i++) {
  if (i === 1) {
    console.log(names[i]);
  }
}

// - `"Congratulations, {name}. You are promoted!"`

console.log(`Congratulation, ${names[0]}. You are promoted!`);

// But only for names that are longer than 4 characters.
for (let i = 0; i < names.length; i++) {
  if (names[i].length > 4) {
    console.log(names[i]);
  }
}
