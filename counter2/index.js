// var count = window.prompt("Enter You starting Value");
// const countValue = document.getElementById("countValue");

// document.getElementById("increase").onclick = function () {
//   count++;
//   countValue.textContent = count;
// };

const btnSubmit = document.getElementById("submit");
var output = document.getElementById("out");

btnSubmit.onclick = function () {
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;

  console.log(firstname);
  fullname = firstname + " " + lastname;
  output.textContent = fullname;

  console.log(fullname);
  //   output.textContent = fullname;
};
