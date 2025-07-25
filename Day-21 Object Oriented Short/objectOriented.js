// ## What is class ?
// In JavaScript, a **class** is a blueprint for creating **objects** with shared structure and behavior. Classes make it easier to create multiple similar objects and organize code using **object-oriented programming (OOP)** principles.
// ## How do we create class ?
// There are two ways to create class. One by declaration and another by expression.

// class className {} - by declaration
// const className = class {} - by expression

// Declaration
class Person {
  name = "Ram";
  age = 25;
  location = "Kathmandu";
  greet() {
    return "Good Morning";
  }
}
{
  class Car {
    brand = "Toyota";
    model = "Corolla";
    year = 2020;
    start() {
      return "Car started";
    }
  }
}

// Expression; the class is anonymous but assigned to a variable
{
  const Person = class {
    name = "Ram";
    age = 25;
    location = "Kathmandu";
    greet() {
      return "Good Morning";
    }
  };
}

// ### 🧠 Real-Life Analogy
// Think of a class like a **blueprint for a house**.
// Using `new`, you build **actual houses (objects)** from that blueprint.
// ## How to Create Object from Class

// const objectName = new ClassName(arguments);
{
  const Person = class {
    name = "Ram";
    age = 25;
    location = "Kathmandu";
    greet() {
      return "Good Morning";
    }
  };

  const person1 = new Person();
  console.log(person1.name);
  console.log(person1.age);
  console.log(person1.location);
  console.log(person1.greet());
}
// ## What is Constructor ?
// A **constructor** is a **special method** inside a class that **automatically runs** when you create an object using `new`.
// It is mainly used to **initialize (set)** properties of the object.
{
  class Person {
    constructor(name, age) {
      this.name = name; // sets object property
      this.age = age;
    }
  }

  const p1 = new Person("Ram", 25);
  console.log(p1.name);
}
// ### 🔍 What are **methods** in a JavaScript class?

// **Methods** are **functions written inside a class**.

// They define **actions/behaviors** that objects created from the class can perform.

// ---

// ### ✅ Example

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }

  walk() {
    console.log(`${this.name} is walking`);
  }
}

const p1 = new Person("Ram");
p1.greet(); // Hello, I am Ram
p1.walk(); // Ram is walking
