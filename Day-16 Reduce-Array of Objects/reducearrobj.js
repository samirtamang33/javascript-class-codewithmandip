// # Day 16 Reduce - Array of Objects
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

// - **Total price of all products**
// const totalPrice = products.reduce((acc, product) => {
//   return product.price + acc;
// }, 0);
// // console.log(totalPrice);

// - **Total price of all products**
const totalPrice = products.reduce((acc, product) => {
  //   console.log(
  //     `acc: ${acc} + product price: ${product.price} = ${acc + product.price}`
  //   );
  return acc + product.price;
}, 0);

// console.log(totalPrice);

// - **Total price of only available products**
const availableProductTotalPrice = products.reduce((acc, product) => {
  //   console.log(
  //     `Check Product isAvailabel: ${product.isAvailable}, if true ${product.price} + ${acc}`
  //   );
  return product.isAvailable ? product.price + acc : acc;
}, 0);
// console.log(availableProductTotalPrice);

// - **Average rating of all products**
const totalRating = products.reduce((acc, product) => {
  return product.rating + acc;
}, 0);
const averageRating = totalRating / products.length;
// console.log(averageRating);

// - **Highest product price**
const maxPrice = products.reduce((acc, product) => {
  return product.price > acc ? product.price : acc;
}, 0);
// console.log(maxPrice);

// - **Lowest product price**
const minPrice = products.reduce((acc, product) => {
  return product.price < acc ? product.price : acc;
}, Infinity);
// console.log(minPrice);

// - **Count of products in each category (`{ Laptop: 3, Phone: 3, ... }`) - Hard and Important**
const categoryCount = products.reduce((acc, product) => {
  acc[product.category] = acc[product.category] ? acc[product.category] + 1 : 1;
  return acc;
}, {});
// console.log(categoryCount);

// - **Total number of available products**
const availableProduct = products.reduce((acc, product) => {
  return product.isAvailable ? acc + 1 : acc;
}, 0);
// console.log(availableProduct);
// - **Total number of unavailable products**
// - **Total price of all "Laptop" products**
// - **Count how many products have rating >= 4.5**
// - Find the product with the highest rating - if its difficult lets find the highest rating first.
const maxRateProduct = products.reduce((acc, product) => {
  return product.rating > acc ? `${product.name}: ${product.rating}` : acc;
}, 0);

console.log(maxRateProduct);
// - Find the product with the longest name

// Homework - Create at least 5 array of objects similar to above and then for each array of objects, solve at least 8 questions like above.
