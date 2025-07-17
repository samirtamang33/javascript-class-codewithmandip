// # Day 15 - Filter on Array of Objects

// Revision of Map
// 1. Lets take an array

const products = [
  { id: 1, name: "Laptop", price: 80000, isAvailable: true },
  { id: 2, name: "TV", price: 50000, isAvailable: true },
  { id: 3, name: "Watch", price: 5000, isAvailable: false },
  { id: 4, name: "Phone", price: 40000, isAvailable: true },
];

// 2. Extract only name of products using map.
// 3. Extract only price of products using map.
// 4. Extract only name and price using map.
// 5. Convert all names to uppercase
// 6. Add a new property price after discount where discount is 10% of MP. (better use spread operator).
// 7. Add a new property category and its value must be “budget” if it is less than or equal to 40000 and “premium” if more.  (spread operator)
// 8. Add an new property named inStock with its value equal to isAvailable (better use spread operator).
// 9. Add a new property named priceWithTax whose value if 20% of MP. (spread operator)

// Filter exercises

// 1. Get all available products
const availableProduct = products.filter((product) => product.isAvailable);
// console.log(availableProduct);
// 2. Get all unavailable products
const notAvailabelProduct = products.filter((product) => !product.isAvailable);
// console.log(notAvailabelProduct);
// 3. Get products cheaper than 50,000
const cheaperProduct = products.filter((product) => product.price < 50000);
// console.log(cheaperProduct);
// 4. Get products priced exactly at 50,000
const productCost = products.filter((product) => product.price === 50000);
// console.log(productCost);
// 5. Get products more expensive than 50,000
const expensiveProduct = products.filter((product) => product.price > 50000);
// console.log(expensiveProduct);
// 6. Get available products cheaper than 50,000
const cheapeAvailabel = products.filter(
  (product) => product.isAvailable && product.price < 50000
);
// console.log(cheapeAvailabel);
// 7. Get unavailable products that cost more than 10,000
const unavailableProduct = products.filter(
  (product) => !product.isAvailable && product.price > 10000
);
console.log(unavailableProduct);
// 8. Get products with name length > 5
const nameLength = products.filter((product) => product.name.length < 5);
// console.log(nameLength);
// 9. Get products whose name starts with 'P’
const startP = products.filter((product) => product.name.startsWith("P"));
// console.log(startP);
// 10. Get available products with price between 10,000 and 60,000.
const productBetween = products.filter(
  (product) => product.price >= 10000 && product.price <= 60000
);
console.log(productBetween);

// Homework - Create at least 5 array of objects similar to above and then for each array of objects, solve at least 8 questions like above.
