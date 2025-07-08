// Tasks -
//Template Literal(Template string)
// 1. You bought 5kg of mangoes at rate of Rs. 150 per kg. Then show it in format - **You bought 5 kg mangoes with total price Rs. 750 while price per kg is Rs. 150.** Show fruit, kg, rate and total price as variables in template string.
{
  const fruit = "mangoes";
  const quantity = 5;
  const rate = 150;
  const totalPrice = quantity * rate;

  console.log(
    `You bought ${quantity} kg ${fruit} with total price Rs. ${totalPrice} while price per kg is Rs. ${rate}.`
  );
}

// 2. event - React Class, Starting date - 5th August, mode - Online zoom, time 2 hours. You need to show it in format. **You are invited to the {event} which starts from {starting date}. It will be {mode} class {time} daily.**
{
  const event = "React Class";
  const startingDate = "5th Agust";
  const mode = "Online zoom";
  const time = "2 hours";
  console.log(
    `You are invited to the ${event} which starts from ${startingDate}. It will be ${mode} class ${time} daily.`
  );
}
// 3. name - Ram, birthYear = 1995, currentYear = 2025. Show it in format - Ram is 30 yrs old.
{
  const name = "Ram";
  const birthYear = 1995;
  const currentYear = 2025;
  const age = currentYear - birthYear;
  console.log(`${name} is ${age} yrs old`);
}

// 4. name = Hari, age = 20, college = Trinity, isGraduated = true/false. Print - Hari is 20 yrs old and studies at Trinity college. (If isGraduated is true) Hari graduated from Trinity college. (note - Either use ternary or use && operator - this concept is vary useful in react).
{
  const name = "Hari";
  const age = 20;
  const college = "Trinity";
  const isGraduated = true;

  console.log(
    isGraduated
      ? `${name} graduated from ${college} college.`
      : `${name} is ${age} yrs old and studies at ${college} college.`
  );
}

{
  const isLoggedIn = false;
  isLoggedIn && console.log("YOu are logged in");
}

// Tasks -
// What are guard Clauses ?
// 1. Use && operator to show You can vote only if you are more than or equal to 18 yrs old.
{
  const age = 18;
  age >= 18 && console.log("You Can Vote");
}
// 2. Make a simple function to greet a person like Good Morning. Then run the function only if the user is logged in using &&. (Hint - You can create variable named isLoggedIn.)
{
  const greet = () => {
    return "Good Morning";
  };

  const isLoggedIn = true;

  isLoggedIn && console.log(greet());
}
// 3. Calculate discount and display it only if the total purchase is more than Rs. 3000. Lets say 10% discount.
{
  const purchase = 30000;
  const discount = (discount = 0.1) => {
    return `10% discount: ${purchase * discount}`;
  };
  purchase > 3000 && console.log(discount());
}

// 4. Create two variables isLoggedIn and isPremiumUser and if both are true then only show - Welcome to Premium Content. (hint - use && twice).
{
  const isLoggedIn = true;
  const isPremiumUser = true;

  const userGreet = () => {
    return "Welcome to Premium Content";
  };

  isLoggedIn && isPremiumUser && console.log(userGreet());
}

// 5. Send email if user isVerified as well as his email is ram@gmail.com. Then send him email saying - You are a verified user Ram.
{
  const isVerified = true;
  const email = "ram@gmail.com";
  const emailVerified = () => {
    return "You are a verified user Ram";
  };
  isVerified && email === "ram@gmail.com" && console.log(emailVerified());
}

// Tasks-
//What are Default Value pattern or fallback

// 1. If country is selected then its fine, if not show the default country Nepal.
const isSelected = "";
const selectedCountry = isSelected || "Nepal";
console.log(selectedCountry);

// 2. Create a variable named selectedTheme and whether it is assigned or not, give default value of light theme.
const selectedTheme = "";
const theme = selectedTheme || "Light";

// 3. If message is not empty return the message while if message is empty return No new messages.
const message = "";
const newMessage = message || "No new message";
console.log(newMessage);

// 4. Imagine a product has Short Description and Long description. Try to show short as far as possible than long. If by chance both are not available then display No Description Available. (Hint - use two ||)

const shortDescription = "";
const longDescription = "";

const displayDescription =
  shortDescription || longDescription || "No Description";
console.log(displayDescription);

// 5. Lets say there are three variables called userColor, savedColor and systemDefault as white. Now our first priority is userColor, if not savedColor and at last systemDefault.

//Multiline String

//String Methods

//starts with zero
const word = "www.helloworld.com    ";
console.log(word[1]);

//string slicing
console.log(word.slice(1, 4));
console.log(word.length);
console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(word.includes("H"));
console.log(word.startsWith("www"));
console.log(word.endsWith(".com"));
console.log(word.trim());
console.log(word.split("."));
console.log(word.replace("h", "H"));
console.log(word.charAt(1));
