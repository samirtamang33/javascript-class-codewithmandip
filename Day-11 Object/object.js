// # Day 11 - Objects

// Reduce Revision

// - Count how many words start with a vowel using reduce:

{
  const words = ["apple", "banana", "Orange", "grape", "umbrella"];
  const aStart = words.reduce((acc, word) => {
    const vowel = word[0].toLowerCase();
    return ["a", "e", "i", "o", "u"].includes(vowel) ? acc + 1 : acc;
  }, 0);
  // console.log(aStart);
}

// - Find the smallest odd number in this array using reduce:

{
  const numbers = [11, 6, 3, 9, 14];
  const smallestOdd = numbers.reduce((acc, number) => {
    return number % 2 !== 0 && number < acc ? number : acc;
  });
  // console.log(smallestOdd);
}

// - Count how many fruits contain the letter 'a' using reduce:

{
  const fruits = ["apple", "banana", "grape", "kiwi"];
  const aLetter = fruits.reduce((acc, fruit) => {
    return fruit.includes("a") ? acc + 1 : acc;
  }, 0);
  // console.log(aLetter);
}

// - Count how many times the number 5 appears in this array using reduce:

{
  const numbers = [5, 2, 5, 7, 5, 9];
  const numRepeat = numbers.reduce((acc, number) => {
    return number === 5 ? acc + 1 : acc;
  }, 0);
  // console.log(numRepeat);
}

// - Find the sum of only even numbers in this array using reduce:

{
  const numbers = [4, 7, 10, 13, 16];
  const evenSum = numbers.reduce((acc, number) => {
    return number % 2 === 0 ? number + acc : acc;
  }, 0);
  // console.log(evenSum);
}

// # In JavaScript, Objects are King.

// ### If you Understand Objects, you Understand JavaScript.

// Objects

// Objects are key value pair. eg.

{
  const person = { name: "Ram", age: 30, location: "Kathmandu", height: 6 };
  // console.log(person);
}

// Task - Create any two objects that you like,
// but dont make it very simple one like {one: 1, two: 2}.
// Try to think as it it is useful in real world.
{
  const vehicle = {
    brand: "Honda",
    price: 2500000,
    model: 2024,
    category: "4X4",
  };
  // console.log(vehicle);
}
{
  const students = { name: "Samir", age: 30, address: "Patan", gender: "male" };
}

// How to create and empty object - 2 ways

{
  const fruit = {};
  const car = new Object();
}

// What are object properties ?

// In key value pair, the key is called the property.
// In pervious example name was property and “Ram” was value.

// How to access Object properties.

// Use = objectName.propertyName or objectName[”propertyName”]. The first method is popular.

// Task - Create a new object and at least access its 3 properties.

// How to add new properties

{
  const person = {
    name: "Ram",
    age: 30,
    location: "Kathmandu",
    height: 6,
    weight: 79,
  };
  person.birthYear = 1994; //add properties

  // console.log(person.name);
  // console.log(person.age);
  // console.log(person.location);
  // delete person.name;
  // delete person.age;
  // console.log(person);
}

// Task - Create a new object and at least add two new properties to it.

const vehicle = {
  brand: "Toyota",
  model: 2025,
};
vehicle.engine = "V8";
vehicle.name = "Land Cruiser";
// console.log(vehicle);

delete vehicle.engine; // How to delete properties
// console.log(vehicle);

// It deletes both key and value pair.

// delete person.age;

// Task - Create an object and at least delete two properties.

// What are nested objects ?

// It is object inside object.

{
  const person = {
    name: "Ram",
    age: 25,
    education: {
      slc: 80,
      plus2: 70,
      bachelors: 60,
    },
  };
}
{
  const province = {
    country: "Nepal",
    total: 7,
    bagmati: {
      district: {
        kathmandu: {
          address: "Thapathali",
        },
      },
    },
  };

  // console.log(province.bagmati.district.kathmandu.address);
}

// Task - Create any two similar nested objects.
{
}

// But the most commonly used object is when an object is inside array. It is called array of objects. eg.

{
  const products = [
    { id: 1, name: "Laptop", price: 80000, isAvailable: true },
    { id: 2, name: "TV", price: 50000, isAvailable: true },
    { id: 3, name: "Watch", price: 5000, isAvailable: false },
    { id: 4, name: "Phone", price: 40000, isAvailable: true },
  ];
}

// Task -

// 1. Create a similar array of objects for a normal kirana shop in nepal at least 8 products.
{
  const groceryProducts = [
    { id: 1, name: "Rice", price: 200, homeDelivery: true },
    { id: 2, name: "Cooking Oil", price: 300, homeDelivery: true },
    { id: 3, name: "Sugar", price: 220, homeDelivery: false },
    { id: 4, name: "Noodles", price: 20, homeDelivery: true },
    { id: 5, name: "Dry Onion", price: 80, homeDelivery: true },
    { id: 6, name: "Potato", price: 60, homeDelivery: false },
    { id: 7, name: "Gas", price: 2000, homeDelivery: true },
    { id: 8, name: "Soap", price: 25, homeDelivery: false },
  ];
  // console.log(groceryProducts[0].name);
}
// 2. Create a similar array of objects for a normal bakery shop.
{
  const bakeryProducts = [
    { id: 1, name: "Black Forest Cake", price: 200, homeDelivery: true },
    { id: 1, name: "Muffin", price: 300, homeDelivery: true },
    { id: 1, name: "Crosaint", price: 220, homeDelivery: false },
    { id: 1, name: "Cookies", price: 20, homeDelivery: true },
    { id: 1, name: "Cheese Cake", price: 80, homeDelivery: true },
    { id: 1, name: "Chocolate Cake", price: 60, homeDelivery: false },
    { id: 1, name: "Donuts", price: 2000, homeDelivery: true },
    { id: 1, name: "Cup Cake", price: 25, homeDelivery: false },
  ];
}
// 3. Create a similar array for a restaurant.
{
  const restaurant = [
    {
      name: "Road House",
      cousin: "Italian",
      menu: {
        food: "Pizza",
        beverage: "Coffee",
        drinks: "Cocktail",
      },
    },
    {
      name: "Dalle Restaurant",
      cousin: "Nepali",
      menu: { food: "momo", beverage: "Kombucha" },
    },
    {
      name: "KFC",
      cousin: "Fastfood",
      menu: { food: "Fried Chicken", beverage: "Coke" },
    },
  ];
  // console.table(restaurant);
}
// 4. Create a similar array for a stationery shop.
{
  const stationeryProducts = [
    { id: 1, item: "Pencil", price: 23 },
    { id: 2, item: "Sharpner", price: 33 },
    { id: 3, item: "Notebook", price: 53 },
    { id: 4, item: "Book", price: 200 },
    { id: 5, item: "Scale", price: 22 },
    { id: 6, item: "Copy", price: 77 },
  ];
}

// What are methods ?

// The function or actions that can be performed on objects are called methods.
{
  const person = {
    name: "Ram",
    age: 25,
    location: "Kathmandu",
    greet() {
      return `Good Morning my name ${this.name}, i am ${this.age} years old, live in ${this.location}`;
    },
  };

  // console.log(person.greet());
}

// Task - Create a normal object and make at least 2 methods on it and also call them.

// Why we dont use arrow function instead ?

// Actually arrow function dont have their own this so they capture this from outer scope,
// which means this do not refer to person object rather refers to the window
// (in browser) or undefined (in strict mode). The example will give us undefined.

{
  const person = {
    name: "Ram",
    age: 25,
    location: "Kathmandu",
    greet: () => {
      return `Good Morning ${this.name}`;
    },
  };

  // console.log(person.greet());

  // How to add method to an object from outside

  person.sayAge = function () {
    return `${this.name} is ${this.age} yrs old.`;
  };

  // console.log(person.sayAge());
}

// Task - Create a new array and add at least two methods from outside as well as call it.

// From today wherever you see something.something its the property accessing and when you see something.something() then its a method access. eg. string.length is property access while string.toUpperCase() is method access. - VIP conclusion.

// But one thing is to note down. -

// When we create a string like `"hello"`, it is a **primitive**, not an object.

// But when we try to access a **property** (like `.length`) or a **method** (like `.toUpperCase()`), JavaScript **temporarily wraps** the primitive inside a `String` object.

// The global `String` object acts like a **class**, and is technically called a **global constructor function**.

// This constructor behaves like a class and provides access to methods and properties.

// ```jsx
// const str = "hello";
// console.log(str.toUpperCase());

// //Behind the scene
// const temp = new String("hello"); // temporary object
// console.log(temp.toUpperCase());  // calls the method
// temp is then discarded
// ```

// HomeWorks

// ### Object Creation & Properties

// 1. Create two real-world objects with at least 4 properties each (not too simple). Print them.

// 2. Create an empty object using `{}` and add 3 properties dynamically. Print the object.
// 3. Create an empty object using `new Object()` and add 3 properties dynamically. Print it.
// 4. Create an object and access at least 3 properties using dot notation.
// 5. Create an object and access at least 3 properties using bracket notation.
// 6. Create an object with 5 properties and delete 2 properties using `delete`. Print before and after.

// ---

// ### Nested Objects

// 1. Create two objects with a nested object inside them (like education, address). Access and print nested properties.
// 2. Create a nested object inside a nested object (3 levels deep). Access the deepest nested property.

// ---

// ### Arrays of Objects

// ### 1. Library Books

// Create an array of 6 books. Each book should have:

// - `id` (number)
// - `title` (string)
// - `author` (string)
// - `pages` (number)
// - `isAvailable` (boolean)

// Print the titles of all books by a particular author you like.

// ---

// ### 2. Movie Collection

// Create an array of 5 movies with:

// - `id`
// - `title`
// - `director`
// - `releaseYear`
// - `isWatched` (boolean)

// Print the titles of movies released before the year 2010.

// ---

// ### 3. Gym Workout Exercises

// Create an array of 7 exercises. Each exercise has:

// - `id`
// - `name`
// - `duration` (in minutes)
// - `caloriesBurned`
// - `equipmentNeeded` (boolean)

// Print all exercises that do not require equipment.

// ---

// ### 4. Music Playlist

// Create an array of 6 songs. Each song has:

// - `id`
// - `title`
// - `artist`
// - `duration` (seconds)
// - `isFavorite` (boolean)

// Print all favorite songs and their durations.

// ---

// ### Methods

// 1. Create an object with 2 properties and 1 method that returns a greeting message using `this`.
// 2. Create an object with 3 properties and 2 methods — one returns a greeting, one returns a message about the age/property.
// 3. Add a method from outside the object that returns a message using `this`. Call it and print.
// 4. Create an object with a method and call that method to print a message.

// ---

// ### Arrow Function & `this`

// 1. Create an object with a method defined as a normal function that returns `this.name`.
// 2. Create an object with a method defined as an arrow function that tries to return `this.name`. Print the result and explain why it doesn't work.

// ---

// ### Dynamic Method Addition

// 1. Create an array and add two methods from outside: one that returns the length and one that returns a message.
// 2. Create an object dynamically and add two methods from outside. Call both.

// ---

// ### String Primitive vs String Object

// 1. Create a string primitive `"hello"`. Print its `.length` property.
// 2. Call `.toUpperCase()` on the string primitive `"hello"` and print the result.
// 3. Explain what happens internally when calling `.toUpperCase()` on a string primitive.

// ---

// ### Property vs Method Concept

// 1. Write in your own words the difference between a property and a method.
// 2. Write examples of accessing a property and calling a method on a string (like `.length` and `.toUpperCase()`).
