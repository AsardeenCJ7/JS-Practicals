var changeValue = 0;

const increaseBtn = document.getElementById("increase");
const counterValue = document.getElementById("counterValue");
const resetBtn = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");

// this is for incrementing the counter
increaseBtn.onclick = function () {
  changeValue++;
  counterValue.textContent = changeValue;

  //   if (changeValue == 10) {
  //     counterValue.textContent = "Ten";
  //   }

  switch (changeValue) {
    case 5:
      counterValue.textContent = "Five";
      break;
    case 10:
      counterValue.textContent = "Ten";
      break;
    case 15:
      counterValue.textContent = "Fifteen";
      break;
    case 20:
      counterValue.textContent = "Twenty";
      break;
    case 21:
      counterValue.textContent = "Thats All";
      changeValue = 0;
  }
};

resetBtn.onclick = function () {
  changeValue = 0;
  counterValue.textContent = changeValue;
};

decreaseBtn.onclick = function () {
  changeValue--;
  counterValue.textContent = changeValue;
};
