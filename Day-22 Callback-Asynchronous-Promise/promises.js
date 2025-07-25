const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Successfull");
  } else {
    reject("Unsuccessful");
  }
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//   Task -

// 1. Use a promise to check if even or odd. If it is even resolve it and if its odd  reject it.
{
  const checkNumber = new Promise((resolve, reject) => {
    const num = "Hello";
    if (num % 2 !== 0) {
      resolve("Odd Number");
    } else {
      reject("Even Number");
    }
  });
  checkNumber
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("This is not number");
    });
}
// 2. Create a promise that resolves if username is ‘admin’ and password is ‘1234’
{
  const isAdmin = new Promise((resolve, reject) => {
    const username = "admin";
    const password = 123;
    if (username === "admin" && password === 123) {
      resolve("Log in succesful");
    } else {
      reject("Incorrect username & password");
    }
  });
  isAdmin
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
// 3. Check temp and resolve if its less than 35 and reject if more that that.
// 4. Resolve if its valid email address by seeing it it includes @ or not.
// 5. Check if string length is more than 5, if yes resolve it otherwise reject it saying too short.
