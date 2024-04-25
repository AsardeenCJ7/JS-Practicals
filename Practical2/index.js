const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

const counterValue = document.getElementById("counterValue");
var count = 0;

increase.onclick = function () {
  count++;

  counterValue.textContent = count;
  switch (count) {
    case 5:
      counterValue.textContent = "Five";
      break;

    case 10:
      counterValue.textContent = "Ten";
      break;
  }
};

reset.onclick = function () {
  count = 0;
  counterValue.textContent = count;
};

decrease.onclick = function () {
  count--;
  counterValue.textContent = count;
};
