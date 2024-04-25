// let age = window.prompt("how old are you?");

const btnSubmit = document.getElementById("submit");

btnSubmit.onclick = function () {
  let age = document.getElementById("age").value;
  age = Number(age);
  console.log(age, typeof age);

  ages = String(age);
  console.log(ages, typeof ages);
};

// age = Number(age);
