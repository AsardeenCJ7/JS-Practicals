// var idCheck = document.getElementById("head1");
// document.getElementById("head1").textContent = `Welcome to learn js`;
// console.log(idCheck);
// document.querySelector(".head2").textContent = `change`;

// let x = 10;
// console.log(typeof x);

// let age = 25;
// let name1 = "Asardeen";

// let ages, names;

// ages = 35;
// names = "Farsan";
// console.log(`Your name is ${name1} and your age is ${age}`);

// console.log(`Your age is ${ages} and your name is ${names}`);

// console.log(typeof names, typeof ages, typeof name1);
// //Console.log(typeof ages);

// // let snames = "Asardeen";
// // let sname = document.getElementById("name");

// // sname.textContent = snames;

// let fullname = "Asardeen Mohamed";
// let sage = 25;
// let enrolled = false;
// document.getElementById("name").textContent = `Your name is ${fullname}`;
// document.getElementById("age").textContent = `your age is ${sage}`;
// document.getElementById("enrol").textContent = `Enrollment : ${enrolled}`;

/*
operator precedence

1. Parentheses ()
2. exponents
3. multiplication & division   & module

Type conversion

let studnet_age = window.prompt();
studnet_age = "Student Age is " + (Number(studnet_age) + 1);
console.log(studnet_age);
*/

const PI = 3.14159;
let radius;
let circumfrence;
let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.onclick = function () {
  radius = document.getElementById("radius").value;
  radius = Number(radius);
  circumfrence = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumfrence;
};
