console.log(document.getElementById("age"));

let btnSubmit = document.getElementById("btnSubmit");
const output = document.getElementById("output");

btnSubmit.onclick = function () {
  let age = document.getElementById("age").value;

  if (age > 18) {
    output.textContent = "You are eligible for voting";
  } else {
    output.textContent = "You are not eligible for voting";
  }
  //console.log(age);
};
