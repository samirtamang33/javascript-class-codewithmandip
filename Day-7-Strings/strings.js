// Tasks -

// 1. You bought 5kg of mangoes at rate of Rs. 150 per kg. Then show it in format - **You bought 5 kg mangoes with total price Rs. 750 while price per kg is Rs. 150.** Show fruit, kg, rate and total price as variables in template string.
{
  const fruit = "mangoes";
  const kg = 5;
  const rate = 150;
  const totalPrice = kg * rate;

  console.log(
    `You bought ${kg} kg mangoes with total price Rs. ${totalPrice} while price per kg is Rs. ${rate}.`
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

// 1. Use && operator to show You can vote only if you are more than or equal to 18 yrs old.
{
  const age = 18;
  age >= 18 && console.log("You Can Vote");
}
// 2. Make a simple function to greet a person like Good Morning. Then run the function only if the user is logged in using &&. (Hint - You can create variable named isLoggedIn.)
{
  const isLoggedIn = true;
  function greet() {
    console.log("Good Morning");
  }

  isLoggedIn && greet();
}
// 3. Calculate discount and display it only if the total purchase is more than Rs. 3000. Lets say 10% discount.
{
  const purchase = 30000;
  function discount(discount = 0.1) {
    console.log(`10% discount: ${purchase * discount}`);
  }
  purchase > 3000 && discount();
}

// 4. Create two variables isLoggedIn and isPremiumUser and if both are true then only show - Welcome to Premium Content. (hint - use && twice).
{
  const isLoggedIn = true;
  const isPremiumUser = true;

  function userGreet() {
    console.log("Welcome to Premium Content");
  }

  isLoggedIn && isPremiumUser && userGreet();
}

// 5. Send email if user isVerified as well as his email is ram@gmail.com. Then send him email saying - You are a verified user Ram.
{
  const isVerified = true;
  const email = "ram@gmail.com";
  function emailVerified() {
    console.log("You are a verified user Ram");
  }
  isVerified && email === "ram@gmail.com" && emailVerified();
}
