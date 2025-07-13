//what is map
//it return new array without changing the original array unlike forEach
// it must return inside callBack
{
  const numbers = [10, 20, 30, 40, 50];
  const newNumbers = numbers.map((number) => {
    return number * number;
  });

  console.log(newNumbers);
}

// Task -

// 1. Find a new array which gives squares of this array [1,3,5,6,8,9,11,13,15,17,18]
const numbers = [1, 3, 5, 6, 8, 9, 11, 13, 15, 17, 18];
const squares = numbers.map((number) => {
  return number * number;
});
console.log(squares);
// 2. Lets make an array of 6 people. Then use a map to create a new array where we are saying to each person - Congratulations ! {name}, You are selected.
const people = ["Ram", "Shyam", "Hari", "Bikram", "Manoj", "Samir"];
const newPeople = people.map((person) => {
  return `Congratulations ! ${person}, You are selected`;
});
console.log(newPeople);

// 3. convert prices from dollars to rupees [23,45,250,7.5,80,100,2500,75,88,990]
const rupees = [23, 45, 250, 7.5, 80, 100, 2500, 75, 88, 990];
const dollars = rupees.map((rupee) => {
  return rupee * 137;
});
console.log(dollars);

// 4. These are the bike prices in Nepal. First convert it into indian rupees. Just divide the money by 1.6 [259900, 334900, 299900, 359900, 349900, 379900, 564900, 635000, 534900, 624900];
const bikePrices = [
  259900, 334900, 299900, 359900, 349900, 379900, 564900, 635000, 534900,
  624900,
];
const indianRupees = bikePrices.map((bikePrice) => {
  return bikePrice * 1.6;
});
console.log(indianRupees);

// 5. [0, 10, 20, 30, 35, 40] - Convert these temperatures from Celsius to Fahrenheit. F = (C * 9/5) + 32
const temperatures = [0, 10, 20, 30, 35, 40];
const farenheit = temperatures.map((temperature) => {
  return (temperature * 9) / 5 + 32;
});
console.log(farenheit);

// 6. Lets resee array of those bike prices, Find the final price after 15% discount on each.
{
  const bikePrices = [
    259900, 334900, 299900, 359900, 349900, 379900, 564900, 635000, 534900,
    624900,
  ];
  const finalPrices = bikePrices.map(
    (bikePrice) => bikePrice - 0.15 * bikePrice
  );
  console.log(finalPrices);
}

// 7. Create an array of any 8 phone numbers in form 9841234567. Then use the map to add the country code and display the number in the form +977 9841234567.
{
  const numbers = [
    "9841234561",
    "9841234562",
    "9841234563",
    "9841234564",
    "9841234565",
    "9841234566",
    "9841234567",
    "9841234568",
  ];

  const countryCode = numbers.map((number) => `+977 ${number}`);
  console.log(countryCode);
}

// 8. Convert birth year into ages - [1995, 1997, 1998, 2001, 2005, 2008]
const years = [1995, 1997, 1998, 2001, 2005, 2008];
const ages = years.map((year) => 2025 - year);
console.log(ages);

// 9. Convert student marks into remarks - Pass or fail. Create an array of students marks with at least 8 students.
const marks = [20, 30, 40, 50, 60, 70, 80, 90];
const remarks = marks.map((mark) => (mark >= 40 ? "Pass" : "Fail"));
console.log(remarks);

// 10. Convert the usernames into emails - ["Ram","Shyam","Krishna","Raghav","Mohan","Keshav"] by adding @gmail.com at the end.
const usernames = ["Ram", "Shyam", "Krishna", "Raghav", "Mohan", "Keshav"];
const emails = usernames.map(
  (username) => `${username.toLowerCase()}@gmail.com`
);
console.log(emails);

// maps parameters

// What is filter ?
// It returns a new array but only the items that satisfied the given condition.
const students = [
  "Ram",
  "Shyam",
  "Krishna",
  "Raghav",
  "Mohan",
  "Keshav",
  "Narayan",
  "Vishnu",
  "Mahesh",
  "Aarav",
  "Aditya",
  "Arjun",
  "Dev",
  "Gopal",
  "Hari",
  "Ishaan",
  "Jay",
  "Karan",
  "Laksh",
  "Om",
];
const newFriends = students.map((student, index) => {
  return `Roll No.${index + 1}. ${student}`;
});
console.log(newFriends);

{
  const numbers = [12, 45, 22, 37, 90, 33, 64, 11, 84];
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  console.log(evenNumbers);
}

{
  const marks = [25, 80, 45, 30, 66, 42, 39, 18, 73, 51];
  const passMarks = marks.filter((mark) => mark >= 40);
  console.log(passMarks);
}
{
  const prices = [450, 1200, 800, 2500, 990, 1500, 600, 2000];
  const newPrices = prices.filter((price) => price > 1000);
  console.log(newPrices);
}

{
  const names = ["Ram", "Sita", "Gita", "Shyam", "Hari", "Krishna", "Anil"];
  const newNames = names.filter((name) => name.length > 4);
  console.log(newNames);
}

{
  const cities = [
    "Kathmandu",
    "Pokhara",
    "Biratnagar",
    "Kohalpur",
    "Lalitpur",
    "Kirtipur",
    "Butwal",
  ];
  const newCities = cities.filter((city) => city.startsWith("K"));
  console.log(newCities);
}

{
  const phoneNumbers = [
    "9812345678",
    "9765432100",
    "9823456789",
    "9745678901",
    "9867891234",
  ];
  const newPhoneNumbers = phoneNumbers.filter((phoneNumber) =>
    phoneNumber.startsWith("98")
  );
  console.log(newPhoneNumbers);
}

// We can also combine filter and map.
{
  const prices = [900, 1200, 800, 1500, 2200];
  const newPrices = prices
    .filter((price) => price > 1000)
    .map((price) => price * price + 0.13);
  console.log(newPrices);
}
{
  const names = ["Ram", "Sita", "Gita", "Shyam", "Hari", "Krishna", "Anil"];
  const newNames = names
    .filter((name) => name.length > 4)
    .map((name) => name.toUpperCase());
  console.log(newNames);
}
