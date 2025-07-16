// // HomeWorks -

// // ### Methods

// // 1. Create an object with 2 properties and 1 method that returns a greeting message using `this`.
{
  const person = {
    name: "Samir",
    greet() {
      return `Namaste ${this.name}`;
    },
  };
  console.log(person.greet());
}
// // 2. Create an object with 3 properties and 2 methods — one returns a greeting,
// one returns a message about the age/property.
{
  const fruit = {
    name: "Apple",
    price: 100,
    cost() {
      return `${this.name} cost ${this.price} rupees.`;
    },
    brand() {
      return `${this.name} is Chinese.`;
    },
  };
  console.log(fruit.cost());
  console.log(fruit.brand());
}
// // 3. Add a method from outside the object that returns a message using `this`. Call it and print.
{
  const car = {
    name: "Land Cruiser",
    brand: "Toyota",
    model: 2025,
  };
  car.madeIn = function () {
    return `This ${this.model} ${this.brand} ${this.name} is made in Japan`;
  };
  console.table(car.madeIn());
}
// // 4. Create an object with a method and call that method to print a message.
{
  const user = {
    name: "Samir",
    isLoggedIn() {
      return `${this.name} is logged In`;
    },
  };
  console.log(user.isLoggedIn());
}

// // ---

// // ### Arrow Function & `this`

// // 1. Create an object with a method defined as a normal function that returns `this.name`.
// // 2. Create an object with a method defined as an arrow function that tries to return `this.name`. Print the result and explain why it doesn't work.

// // ---

// // ### Dynamic Method Addition

// // 1. Create an array and add two methods from outside: one that returns the length and one that returns a message.
// // 2. Create an object dynamically and add two methods from outside. Call both.

// // ---

// // ### String Primitive vs String Object

// // 1. Create a string primitive `"hello"`. Print its `.length` property.
// // 2. Call `.toUpperCase()` on the string primitive `"hello"` and print the result.
// // 3. Explain what happens internally when calling `.toUpperCase()` on a string primitive.

// // ---

// // ### Property vs Method ConceptHomeWorks -

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

// 1. Write in your own word+s the difference between a property and a method.
// 2. Write examples of accessing a property and calling a method on a string (like `.length` and `.toUpperCase()`).

// // 1. Write in your own word+s the difference between a property and a method.
// // 2. Write examples of accessing a property and calling a method on a string (like `.length` and `.toUpperCase()`).
