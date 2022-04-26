const arrayOfObjects = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 72,
    eye_color: "green",
    gender: "male",
  },
  {
    name: "Arina Skywalker",
    height: 150,
    mass: 62,
    eye_color: "blue",
    gender: "female",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 90,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leaia Oregan",
    height: 140,
    mass: 44,
    eye_color: "blue",
    gender: "female",
  },
];

const tbody = document.querySelector("tbody");

const allBtn = document.querySelector("#allCharacters");
const moreBtn = document.querySelector("#moreThan80");
const lessBtn = document.querySelector("#lessThan80");
const maleBtn = document.querySelector("#maleCharacters");
const blueBtn = document.querySelector("#blueEyes");

arrayOfObjects.forEach((obj) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");

  td1.textContent = obj.name;
  td2.textContent = obj.height;
  td3.textContent = obj.mass;
  td4.textContent = obj.eye_color;
  td5.textContent = obj.gender;

  tbody.append(tr);
  tr.append(td1, td2, td3, td4, td5);
});

allBtn.addEventListener("click", () => {
  render(arrayOfObjects);
});

moreBtn.addEventListener("click", () => {
  updatedArray = arrayOfObjects.filter((item) => item.mass > 80);
  render(updatedArray);
});

lessBtn.addEventListener("click", () => {
  updatedArray = arrayOfObjects.filter((item) => item.mass <= 80);
  render(updatedArray);
});

maleBtn.addEventListener("click", () => {
  updatedArray = arrayOfObjects.filter((item) => item.gender == "male");
  render(updatedArray);
});

blueBtn.addEventListener("click", () => {
  updatedArray = arrayOfObjects.filter((item) => item.eye_color == "blue");
  render(updatedArray);
});

function render(array) {
  tbody.innerHTML = "";

  array.forEach((obj) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.textContent = obj.name;
    td2.textContent = obj.height;
    td3.textContent = obj.mass;
    td4.textContent = obj.eye_color;
    td5.textContent = obj.gender;

    tbody.append(tr);
    tr.append(td1, td2, td3, td4, td5);
  });
}
