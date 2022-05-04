// Masyvas (angl. Array) people su 6 objektais, kurie turi kazkokia informacija
const people = [
  {
    name: "John",
    last_name: "Arthur",
    age: 27,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6CZCk2Jjfkduhz0nEz11NKWGCCi8Ar897CbURnoFwueL_99gWO5qhxYEYvGlXqwo7OVs&usqp=CAU",
    city: "Dublin",
    country: "Ireland",
  },
  {
    name: "Arthur",
    last_name: "Downey",
    age: 12,
    img_src: "https://i1.sndcdn.com/avatars-000583246488-dhm5la-t240x240.jpg",
    city: "Paris",
    country: "France",
  },
  {
    name: "Petras",
    last_name: "Slekys",
    age: 55,
    img_src:
      "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
    city: "Vilnius",
    country: "Lithuania",
  },
  {
    name: "Martynas",
    last_name: "Petrauskas",
    age: 33,
    img_src:
      "https://snusercontent.global.ssl.fastly.net/member-profile-full/46/4274246_8809836.jpg",
    city: "Moscow",
    country: "Russia",
  },
  {
    name: "Valdimir",
    last_name: "Zelensky",
    age: 72,
    img_src:
      "https://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg",
    city: "Kiev",
    country: "Ukraine",
  },
  {
    name: "Sestasis",
    last_name: "Asmuo",
    age: 16,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6CZCk2Jjfkduhz0nEz11NKWGCCi8Ar897CbURnoFwueL_99gWO5qhxYEYvGlXqwo7OVs&usqp=CAU",
    city: "Warsaw",
    country: "Poland",
  },
];

// Sukuriame kintamaji (angl. variable) body ir priskiriame jam musu body elementa, kuri turime html
const body = document.querySelector("body");

// Sukuriame kintamaji container ir nurodome, kad sukursime nauja elementa (div)
const container = document.createElement("div");

//Pridesime klase (container) savo pagrindiniam divui
container.classList.add("container");

// Integruosime katik sukurta containeri i body
// prepend naudojame, kai norime prideti elementa i pradzia viduje,o append - i gala viduje
body.prepend(container);

// Kiekvienam people masyvo objektui naudojime si cikla, kol nesibaigs objektai
people.forEach((obj) => {
  // Susikuriame containeri (div)
  const objectContainer = document.createElement("div");
  // Duodame containeriui klase (objContainer)
  objectContainer.classList.add("objContainer");
  // Pridedame containeri su klase objContainer i pagrindini musu puslapio containeri
  container.append(objectContainer);

  // Sukuriame atvaizdo elementa (img)
  const img = document.createElement("img");
  // Nurodome atvaizdo saltini (src), kuri imame is savo people masyvo (img_src)
  img.src = obj.img_src;
  // Pridedame atvaizdo elementa i objContainer klase turinti containeri (div)
  objectContainer.append(img);

  // Susikuriame h4 elementa, kuriame atvaizduosime asmens vardas, pavarde ir metus
  const nameSurnameAgeSpot = document.createElement("h4");
  // Nurodome asmens duomenis (cia naudosime keleta duomenu is people masyvo)
  // Tuscios kabutes reiskia tarpus
  nameSurnameAgeSpot.textContent =
    obj.name + " " + obj.last_name + ", " + obj.age;
  // Ir pridedame elementa i objContaineri
  objectContainer.append(nameSurnameAgeSpot);

  // Sukuriame paragrafa, kuriame rasysime ir miesta, ir sali
  const locationSpot = document.createElement("p");
  locationSpot.textContent = obj.city + ", " + obj.country;
  objectContainer.append(locationSpot);
});
