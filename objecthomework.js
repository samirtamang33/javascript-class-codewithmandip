// HomeWorks
// ### Object Creation & Properties

// 1. Create two real-world objects with at least 4 properties each (not too simple). Print them.
{
  const employee = {
    name: "Samir",
    department: "Developer",
    joinDate: 2024,
    ID: 1,
    skills: {
      frontend: "React.js",
      backend: "express.js",
    },
  };
  //   console.table(employee.skills);
}
// 2. Create an empty object using `{}` and add 3 properties dynamically. Print the object.
{
  const menu = {};
  menu.momo = "Chicken";
  menu.pizza = "Peperoni";
  menu.beer = "Pilsner";
  //   console.log(menu);
}
// 3. Create an empty object using `new Object()` and add 3 properties dynamically. Print it.
{
  const vehicle = new Object();
  vehicle.brand = "Ford";
  vehicle.model = "2025";
  vehicle.modelName = "Ranger Raptor";
  //   console.log(vehicle);
}
// 4. Create an object and access at least 3 properties using dot notation.
{
  const mountain = {
    name: "Mount Everest",
    height: 8848,
    country: "Nepal",
  };
  //   console.log(mountain.height);
  //   console.log(mountain.name);
  //   console.log(mountain.country);
}
// 5. Create an object and access at least 3 properties using bracket notation.
{
  const provinces = {
    country: "Nepal",
    province: 7,
    name: {
      province1: "Koshi",
      province2: "Madhesh",
      province3: "Bagmati",
      province4: "Gandaki",
      province5: "Lumbini",
      province6: "Karnali",
      province7: "Sudurpaschchim",
    },
    capital: {
      koshi: "Biratnagar",
      madhesh: "Janakpur",
      bagmati: "Hetauda",
      gandaki: "Pokhara",
      lumbini: "Deukhuri-Dang",
      karnali: "Birendranagar",
      sudurpashchim: "Godawari",
    },
  };
  console.log(
    `${provinces.country}, a country in South Asia, is divided into
     ${provinces.province} provinces: ${provinces.name.province1} (${provinces.capital.koshi}), 
     ${provinces.name.province2} (${provinces.capital.madhesh}), ${provinces.name.province3} 
     (${provinces.capital.bagmati}), ${provinces.name.province4} (${provinces.capital.gandaki}), 
     ${provinces.name.province5} (${provinces.capital.lumbini}), ${provinces.name.province6} 
     (${provinces.capital.karnali}), ${provinces.name.province7} (${provinces.capital.sudurpashchim}),.`
  );
}
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
