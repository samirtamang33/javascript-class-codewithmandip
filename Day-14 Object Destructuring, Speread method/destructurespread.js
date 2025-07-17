// Map for array of objects
// Tasks -
// 1. Lets take an array

const products = [
  { id: 1, name: "Laptop", price: 80000, isAvailable: true },
  { id: 2, name: "TV", price: 50000, isAvailable: true },
  { id: 3, name: "Watch", price: 5000, isAvailable: false },
  { id: 4, name: "Phone", price: 40000, isAvailable: true },
];
//Array Spread

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5, 6, 7];
// const newNum = [...newNumbers, 8, 9, 10];
// console.log(newNum);

//spread

const newProducts = [
  ...products,
  { id: 5, name: "Tablet", price: 699, isAvailable: true },
];
console.log(newProducts);
//destructure
const [{ id, name, price, isAvailable }] = products;
console.log(name);

// 2. Extract only name of products using map.
const productName = products.map((product) => product.name);
console.log(productName);

// 3. Extract only price of products using map.
const productPrice = products.map((product) => product.price);
console.log(productPrice);

// 4. Extract only name and price using map.
const productNameAndPrice = products.map((product) => ({
  name: product.name,
  price: product.price,
  //   isAvailable: product.isAvailable,
}));
console.log(productNameAndPrice);

// 5. Convert all names to uppercase
const nameToUpper = products.map((product) => product.name.toUpperCase());
console.log(nameToUpper);

// 6. Add a new property price after discount where discount is 10% of MP.
// (better use spread operator).

const afterDiscount = products.map((product) => ({
  ...product,
  priceAfterDiscount: product.price * 0.9,
}));
console.log(afterDiscount);

// 7. Add a new property category and its value must be “budget” if it is less than or equal to 40000 and “premium” if more.  (spread operator)
const addCategory = products.map((product) => ({
  ...product,
  category: product.price <= 40000 ? "budget" : "premium",
}));
console.table(addCategory);

// 8. Add an new property named inStock with its value equal to isAvailable (better use spread operator).
const inStock = products.map((product) => ({
  ...product,
  inStock: product.isAvailable ? "Available" : "Not Available",
}));
console.table(inStock);
// 9. Add a new property named priceWithTax whose value if 20% of MP. (spread operator)
const addTaxPrice = products.map((product) => ({
  ...product,
  priceWithTax: product.price * 0.2 + product.price,
}));
console.table(addTaxPrice);
// Homework - Create at least 5 array of objects similar to above and then for each array of objects, solve at least 8 questions like above.
