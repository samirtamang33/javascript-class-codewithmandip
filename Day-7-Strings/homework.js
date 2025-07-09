// # HomeWorks

// ### Template Literals & Basic Expressions (new examples)

// 1. Create arrow function `orderSummary` that takes `product`, `qty`, and `price` and returns:
//     `"You bought {qty} {product} for Rs. {qty * price}."`
{
  const orderSummary = (product, qty, price) => {
    return `You bought ${qty} ${product} for Rs. ${qty * price}.`;
  };
  console.log(orderSummary("Iphone", 1, 100000));
}

// 2. Create arrow function `meetingNotice` that takes `topic`, `date`, `duration` and returns:
//     `"Meeting on {topic} is scheduled for {date} and will last {duration} hours."`
{
  const meetingNotice = (topic, date, duration) => {
    return `Meeting on ${topic} is scheduled for ${date} and will last ${duration} hours.`;
  };
  console.log(meetingNotice("Packaging Materials", "July 9", 1));
}

// 3. Create arrow function `ageMessage` that takes `personName`, `birthYear`, and `currentYear` and returns:
//     `"{personName} is {currentYear - birthYear} years old."`
const ageMessage = (personName, birthYear, currentYear) => {
  return `${personName} is ${currentYear - birthYear} years old`;
};
console.log(ageMessage("Samir", 1994, 2025));

// 4. Create arrow function `studentStatus` that takes `name`, `age`, `school`, and `hasGraduated` and returns:
//     `"{name} is {age} years old and studies at {school}."`
//     If `hasGraduated` is true, add `" {name} graduated from {school}."` (use ternary or `&&`).
const studentStatus = (name, age, school, hasGraduated) => {
  return hasGraduated
    ? `${name} is ${age} years old and studies at ${school}. ${name} graduated from ${school}`
    : `${name} is ${age} years old and studies at ${school}.`;
};
console.log(studentStatus("Samir", 31, "Patan Multiple College", true));

// ---

// ### Guard Clauses with && (new scenarios)

// 1. Create arrow function `canDrive` that takes `age` and logs `"You can drive"` only if age >= 18.
const candDrive = (age) => age >= 18 && "You can drive";
console.log(candDrive(18));

// 2. Create arrow function `greetUser` that logs `"Good evening"` only if `isUserLoggedIn` is true.
const greetUser = (isUserLoggedIn) => isUserLoggedIn && "Good evening";
console.log(greetUser(true));

// 3. Create arrow function `showDiscount` that takes `totalAmount` and logs `"10% discount applied"` only if `totalAmount > 5000`.
const showDiscount = (totalAmount) =>
  totalAmount > 5000 && `10% discount applied: ${totalAmount * 0.1}`;
console.log(showDiscount(6000));

// 4. Create arrow function `showAccess` that logs `"Access granted"` only if both `isLoggedIn` and `hasAccessRights` are true.
const showAccess = (isLoggedIn, hasAccessRights) =>
  isLoggedIn && hasAccessRights && "Access granted";
console.log(showAccess(true, true));

// 5. Create arrow function `sendNotification` that logs `"Notification sent"` only if `isVerified` is true and `email` equals `"user@example.com"`.
const sendNotification = (isVerified, email) =>
  isVerified && email === "user@example.com" && "Notification sent";
console.log(sendNotification(true, "user@example.com"));

// ---
// ### Default Values with || (new scenarios)

// 1. Create arrow function `getLanguage` that takes `language` and returns it or `"English"` if falsy.
const getLanguage = (language) => language || "English";
console.log(getLanguage("Nepali"));

// 2. Create arrow function `getBackgroundColor` that returns `userColor` or `defaultColor` or `"white"`.
const getBackgroundColor = (userColor, defaultColor) =>
  userColor || defaultColor || "White";
console.log(getBackgroundColor("", "Blue"));

// 3. Create arrow function `getStatusMessage` that returns `message` or `"No new notifications"` if empty.
const getStatusMessage = (message) => message || "No new notifications";
console.log(getStatusMessage("Hello"));

// 4. Create arrow function `getDescription` that returns `shortDesc || longDesc || "No description available"`.
const getDescription = (shortDesc, longDesc) =>
  shortDesc || longDesc || "No description available";
console.log(getDescription("Hello", "Hellooooooooooooooooo"));

// 5. Create arrow function `getPriorityColor` that returns `primaryColor || secondaryColor || tertiaryColor || "black"`.
const getPriorityColor = (primaryColor, secondaryColor, tertiaryColor) =>
  primaryColor || secondaryColor || tertiaryColor || "black";
console.log(getPriorityColor("white", "red", "blue"));

// ---
// ### String Indexing & Slicing (fresh practice)

// 1. Create arrow function `secondChar` that returns the second character of a string.
const secondChar = (string) => string.charAt(1);
console.log(secondChar("Samir"));

// 2. Create arrow function `removeFirstChar` that removes the first character of a string.
const removeFirstChar = (string) => string.slice(1);
console.log(removeFirstChar("Tamang"));

// 3. Create arrow function `removeLastChar` that removes the last character of a string.
const removeLastChar = (string) => string.slice(0, -1);
console.log(removeLastChar("Tamang"));

// 4. Create arrow function `sliceMiddle` that returns characters from index 1 to 4 of a string.
const sliceMiddle = (string) => string.slice(1, 5);
console.log(sliceMiddle("Tamang"));

// 5. Create arrow function `sliceLastThree` that returns last 3 characters of a string (using negative index).
const sliceLastThree = (string) => string.slice(-3);
console.log(sliceLastThree("Tamang"));

// ---

// ### String Methods (new uses)

// 1. Create arrow function `getLength` that returns length of the string.
const getLength = (string) => string.length;
console.log(getLength("Tamang"));

// 2. Create arrow function `toLowerCaseStr` that converts string to lowercase.
const toLowerCaseStr = (string) => string.toLowerCase();
console.log(toLowerCaseStr("TAMANG"));

// 3. Create arrow function `toUpperCaseStr` that converts string to uppercase.
const toUpperCaseStr = (string) => string.toUpperCase();
console.log(toUpperCaseStr("hello"));

// 4. Create arrow function `includesWord` that returns true if string includes given word.
const includesWord = (string) => string.includes("T");
console.log(includesWord("Tamang"));

// 5. Create arrow function `startsWithLetter` that returns true if string starts with given letter.

// 6. Create arrow function `endsWithLetter` that returns true if string ends with given letter.

// 7. Create arrow function `trimSpaces` that trims leading and trailing spaces.

// 8. Create arrow function `splitByComma` that splits a string by commas and returns array.

// 9. Create arrow function `replaceWord` that replaces first occurrence of a word with another word.

// 10. Create arrow function `charAtIndex` that returns character at given index.

// ---

// ### Simple Combined Practice

// 1. Create arrow function `isValidName` that returns true if trimmed name length > 0.
// 2. Create arrow function `countWords` that counts number of words in a string (split by space).
// 3. Create arrow function `capitalizeFirstChar` that capitalizes only the first character of string.
// 4. Create arrow function `isEmail` that returns true if string includes "@".
// 5. Create arrow function `getFirstWord` that returns the first word from a sentence.
// 6. Create arrow function `lastCharToUpper` that returns last character in uppercase.
// 7. Create arrow function `replaceSpacesWithDash` that replaces all spaces with .
// 8. Create arrow function `startsWithHello` that returns true if string starts with `"Hello"`.
// 9. Create arrow function `endsWithDot` that returns true if string ends with `"."`.

// ---

// ### Multiline & Template Literal Practice

// 1. Create arrow function `multiLineMessage` that returns a 3-line multiline string using template literals.
// 2. Create arrow function `inviteMessage` that takes `event` and `date` and returns multiline invite message:

// ```
// pgsql
// CopyEdit
// You are invited to {event}
// Date: {date}
// Please join us online.

// ```

// ---

// ### More String Index & CharAt Practice

// 1. Create arrow function `thirdChar` that returns third character of a string.
// 2. Create arrow function `charFromEnd` that returns nth character from the end (use negative index).
// 3. Create arrow function `firstAndLastChar` that returns a string with first and last characters joined.

// ---

// ### More Replace & Split Practice

// 1. Create arrow function `replaceAllSpaces` that replaces all spaces with underscores.
// 2. Create arrow function `splitWords` that splits sentence into words and returns the array.
// 3. Create arrow function `replaceCommaWithDot` that replaces commas in string with dots.

// ---

// ### Trim & Length Practice

// 1. Create arrow function `isEmptyString` that returns true if trimmed string is empty.
// 2. Create arrow function `stringLengthTrimmed` that returns length of trimmed string.
