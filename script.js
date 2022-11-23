//The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables. New in ECMAScript version 5. It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
"use strict";

// document.documentElement.addEventListener("mousemove", (e) => {
//   document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
//   document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
// });

//button invokes the function and with it, grabs the ID of its parent element
function expandProjectContainer(projectContainer) {
  const project = document.getElementById(projectContainer.parentNode.id);
  project.classList.add("d-none");
}

// decides whether a number is odd or even and prints the corresponding response on the screen
function evenOrOdd() {
  const numberInput = document.getElementById("number-input").value;
  const numberAnswer = document.getElementById("number-answer");

  if (!numberInput) {
    numberAnswer.innerText = "Enter a number into the box on the left";
  } else if (numberInput % 2 !== 0) {
    numberAnswer.innerText = "Number " + numberInput + " is odd";
  } else {
    numberAnswer.innerText = "Number " + numberInput + " is even";
  }
}
