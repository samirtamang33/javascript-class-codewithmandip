{
  const books = [
    {
      id: 1,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      pages: 1000,
      isAvailable: true,
    },
    {
      id: 2,
      title: "The Total Money Makeover",
      author: "Dave Ramsey",
      pages: 1001,
      isAvailable: false,
    },
    {
      id: 3,
      title: "The Millionaire Next Door",
      author: "Thomas J. Stanley & William D. Danko",
      pages: 1004,
      isAvailable: true,
    },
    {
      id: 3,
      title: "Your Meny or Your Life",
      author: "Vicki Robin & Joe Dominguez",
      pages: 1009,
      isAvailable: true,
    },
    {
      id: 5,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      pages: 1099,
      isAvailable: false,
    },
  ];
  //   console.table(books);
}

{
  const movies = [
    {
      id: 1,
      title: "Spiderman",
      director: "Marvel A",
      releaseYear: 2005,
      isWatched: true,
    },
    {
      id: 2,
      title: "Batman",
      director: "Marvel B",
      releaseYear: 2006,
      isWatched: true,
    },
    {
      id: 3,
      title: "Avatar",
      director: "Marvel C",
      releaseYear: 2007,
      isWatched: false,
    },
    {
      id: 4,
      title: "Dark Night",
      director: "Marvel D",
      releaseYear: 2008,
      isWatched: true,
    },
    {
      id: 5,
      title: "Fast & Furious",
      director: "Marvel E",
      releaseYear: 2009,
      isWatched: false,
    },
  ];
  //   console.table(movies);
}

//object method
// What are methods ?
// The function or actions that can be performed on objects are called methods.
// First teach the long form of writing method without this.
// Then teach the shorthand method.
// Then use **this** to access the property inside the object in method.
// Actually this is the object which calls the method.

{
  const person = {
    name: "Samir",
    age: 30,
    greet: function () {
      return "Good Morning";
    },
  };
  //   console.log(person.greet());
}

{
  const fruit = {
    name: "Apple",
    price: function () {
      return "Price is 50";
    },
  };
  //   console.log(fruit.price());
}

{
  const fruit = {
    name: "Apple",
    price() {
      return "Price is 50";
    },
  };
  fruit.brand = function () {
    return "This is chinese brand";
  };
  //   console.log(fruit.price());
  //   console.log(fruit.brand());
}

{
  const person = {
    name: "Samir",
    greet() {
      return `Good morning ${this.name}`;
    },
  };
  const user = person;
  console.log(user.greet());
}

{
  const fruit = {
    name: "Orange",
    price: 30,
    taste() {
      return `${this.name} taste is Sweet & sour & cost ${this.price} rupees`;
    },
  };

  const falful = fruit;
  console.log(falful.taste());
}
