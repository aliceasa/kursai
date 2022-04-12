const numberArea = document.getElementById(`numberArea`);
function addNumber(number) {
  if (Number(numberArea.textContent) == 0 ) numberArea.textContent = number;
} else {
    numberArea.textContent += number;
}
function deleteNumber() {
    numberArea.textContent = numberArea.textContent.slice(0, -1);
}