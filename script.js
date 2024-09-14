// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red";
paragraph.style.color = "red";

container.appendChild(paragraph);

const thirdHeader = document.createElement("h3");
thirdHeader.textContent = "I'm blue h3!";
thirdHeader.style.color = "blue";

container.appendChild(thirdHeader); 

const secondDiv = document.createElement('div')
secondDiv.style.border = "1px solid black";
secondDiv.style.backgroundColor = "pink";

const headingOne = document.createElement("h1");
headingOne.textContent = "I'm in a div";

secondDiv.appendChild(headingOne);

const paragraphInDiv = document.createElement("p");
paragraphInDiv.textContent = "ME TOO!";

secondDiv.appendChild(paragraphInDiv);

container.appendChild(secondDiv);

//event is logged in the console 

const btn = document.querySelector("#btn");

/*btn.addEventListener("click", function (e) {
  console.log(e);
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  }); */

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

  