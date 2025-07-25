// {
//   const myName = document.createElement("h2");
//   myName.innerText = "My name is Samir";
//   document.body.appendChild(myName);

//   const heading = document.createElement("h1");
//   heading.innerText = "Hello World";
//   document.body.appendChild(heading);

//   //Create an Element
//   const unorderedList = document.createElement("ul");
//   const listItem1 = document.createElement("li");
//   const listItem2 = document.createElement("li");
//   const listItem3 = document.createElement("li");
//   //Modify the text of the list items
//   listItem1.innerText = "Mango";
//   listItem2.innerText = "Apple";
//   listItem3.innerText = "Banana";
//   //Append the list items
//   document.body.appendChild(unorderedList);
//   unorderedList.appendChild(listItem1);
//   unorderedList.appendChild(listItem2);
//   unorderedList.appendChild(listItem3);
// }

// {
//   //event listener
//   const button = document.createElement("button");
//   button.innerText = "Click Me!";
//   document.body.appendChild(button);
//   button.addEventListener("click", () => {
//     alert("Button was clicked!");
//   });
// }
{
  //show heading when button is clicked
  const heading = document.createElement("h1");
  heading.innerText = "My Name is Samir";

  const button = document.createElement("button");
  button.innerText = "Print Heading";
  button.addEventListener("click", () => {
    document.body.appendChild(heading);
  });
  document.body.appendChild(button);
}

{
  //input event listener
  const input = document.createElement("input");
  input.placeholder = "Type something here...";
  input.type = "text";
  input.addEventListener("input", (event) => {
    console.log(event.target.value);
  });

  document.body.appendChild(input);
}
