{
  // const name = document.getElementById("name");
  // name.innerText = "Name: Samir Tamang";
  // const address = document.getElementById("address");
  // address.innerText = "Address: Kathmandu, Nepal";
  // const age = document.getElementById("age");
  // age.innerText = "Age: 30";
  // const occupation = document.getElementById("occupation");
  // occupation.innerText = "Occupation: Software Developer";
}
{
  // Using querySelector to select elements by ID
  //   const name = document.querySelector("#name");
  //   name.innerText = "Name: Samir Tamang";
  //using querySelector to select elements by class
  //   const address = document.querySelector(".address");
  //   address.innerText = "Address: Kathmandu, Nepal";
  //   const input = document.querySelector('[id="nameInput"]');
  //   input.value = "Samir Tamang";
}

{
  //QuerySelectorAll to select multiple elements by class
  const headings = document.querySelectorAll("h2");
  headings.forEach((heading) => {
    heading.innerText = "Hello";
  });
}
