const numberArea = document.getElementById(`numberArea`);
let firstNumber;

function addNumber(number) {
  if (Number(numberArea.textContent) == 0) {
    numberArea.textContent = number;
  } else {
    numberArea.textContent += number;
  }
}

function deleteNumber() {
  numberArea.textContent = numberArea.textContent.slice(0, -1);
}

function add() {
  numberArea.textContent = Number(numberArea.value);
  numberArea.textContent = 0;
}

function equals() {
  numberArea.textContent = firstNumber + Number(numberArea.textContent);
  console.log(firstNumber, Number(numberArea.textContent));
}
