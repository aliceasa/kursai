const characters = document.querySelectorAll("table tbody tr td.name");

const charactersHeights = document.querySelectorAll("table tbody tr td.height");

const charactersMass = document.querySelectorAll("table tbody tr td.mass");

const symbolSuma = document.querySelector(".suma");
const heightSuma = document.querySelector(".heightsuma");
const massSuma = document.querySelector(".masssuma");

// const arrayOfSymbolLengths = [];

// characters.forEach((name) => {
//   arrayOfSymbolLengths.push(name.textContent.length);

//   if (arrayOfSymbolLengths.length > 3) {
//     console.log(arrayOfSymbolLengths);
//     symbolSuma.textContent +=
//       arrayOfSymbolLengths[0] +
//       arrayOfSymbolLengths[1] +
//       arrayOfSymbolLengths[2] +
//       arrayOfSymbolLengths[3];
//   }
// });

heightSuma.textContent =
  Number(charactersHeights[0].textContent) +
  Number(charactersHeights[1].textContent) +
  Number(charactersHeights[2].textContent) +
  Number(charactersHeights[3].textContent);

massSuma.textContent =
  Number(charactersMass[0].textContent) +
  Number(charactersMass[1].textContent) +
  Number(charactersMass[2].textContent) +
  Number(charactersMass[3].textContent);

const names = [
  "Leia Organa",
  "Luke Skywalker",
  "Anakin Skywalker",
  "Darth Vader",
];

characters.forEach((item) => {
  item.textContent = names;
});
