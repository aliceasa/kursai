// 1 Zinom 3 data types, sukurti kintamuosius su tu data type reiksmem (string, number, boolean);
const stringai = "trusai";
const cyfry = 1;
const boolean = true;

// 2 Veliau ismokome dar du (array ir object), susikurti kintamuosius siu tipu,
// abu tipai viduj turetu tureti bent 3 kazkokius duomenis

const massiv = [1, 2, 3, 4];
const string = ["trusai", "stringai"];

const obj = {
  name: "rolka",
  gender: "man",
};

// 3 Atsidarius practice.html narsykleje, consoleje parasyti "Hello world"

console.log("Hello world");

// 4 Atsidarius practice.html narsykleje, consoleje parasyti savo nurodyto string kintamojo reiksme

console.log(stringai);

// 5 Susikurti funkcija kuri consoleje parasys jusu number tipo kintamaji

function daryti() {
  console.log(cyfry);
}

// daryti();

// 6 funkcijoje prideti salyga su jusu boolean kintamuoju jei true, paliekam number kintamojo console.log,
// else printinam string tipo kintamaji

function daryti1() {
  if (boolean == true) {
    console.log(cyfry);
  } else {
    console.log(stringai);
  }
}

daryti1();

// 7 Sukurti nauja funkcija, kuri grazins 3cia reiksme is jusu array tipo kintamojo

function massivien() {
  console.log(massiv[2]);
}

massivien();

// 8 consoleje atvaizduoti naujos funkcijos grazinta rezultata

// 9 ideti nauja reiksme (nesvarbu kokia) i array tipo kintamaji naudodami array pridejimo metoda

massiv.push("sveiki");

// 10 Iskirpti pirma reiksme is array tipo kintamojo naudojant array isiemimo metoda

massiv.pop();
console.log(massiv);

// 11 Parasyti cikla kuris consoleje parasys skaicius nuo 1 iki 10

console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 12 Naudojant map metoda pakeisti visas array tipo kintamojo reiksmes nuo 0, iki array.length

const array = [23, 23, 36, 46, 46];
array.map((item) => console.log(item));
// console.log(array.map((item, index) => (item = index)));
// situ pvz turi grizti naujas array su reiksmem nuo 0 iki 4

// 13 Naudojant filter metoda grazinti tik skaicius kurie yra nelyginiai (tiksliai neziurejom, klauskit arba dar geriau google)

array.filter((number) => console.log(number % 2 === 0));

// 14 Pasirasyti nauja funkcija, kuri consoleje parasys jusu paduota parametra

function newFunc() {
  console.log(array[1]);
}

// 15 Suskurti nauja array su nersvarbu kokiais 5 skaiciais

const newArr = [1, 2, 4, 5, 6];

// 16 Pasirasyti nauja funkcija kuri naudojant viena is array metodu consoleje parasys naujai sukurto array suma

// console.log(newArr.reduce((a, b) => a + b, 0));

// 17 Praplesti funkcija kad ji priimtu parametra ir iskviesta consoleje rasytu musu pirmojo array skaiciu suma,
// kita kart iskvisti ir consoleje rasytu naujojo array skaiciu suma

function printNewArray() {
  console.log(array.reduce((a, b) => a + b, 0));
}

function newerFunc() {
  console.log(newArr.reduce((a, b) => a + b, 0));
  printNewArray();
}

newerFunc();

// 18 Consoleje parasyti objekto kintamojo savybiu (property/keys) reiksmes (values) atsikruose eilutese,
// (kiekvina savybe vis naujam console log)

// 19 Naudojant object metoda (Keleta kartu naudojom star wars table) grazinti nauja array su visom objekto savybem (keys/properties) ir atvaizduoti
// consoleje

const newObj = {
  name: "pacan",
  surname: "pacanovic",
  age: 18,
  gender: "M",
};

const delbajob = Object.create(newObj);

delbajob.name = "artur";
delbajob.surname = "artur";
delbajob.age = "artur";
delbajob.gender = "f";

console.log(delbajob);

// 20 Prie pradzioje nurodyto object tipo kintamojo prideti dvi naujas savybes viena is ju bus lygi jusu number tipo kintamajam,
// o kita boolean tipo kintamajam

// 21 Suskurti nauja array ir i ji, naudojant for cikla, ideti 5 jusu objekto tipo kintamuosius (turetu tureti is 20 uzduoties savybes ir reiksmes)

// 22 I html isideti mygtuka ant kurio paspaudus vykdytu nauja funkcija ir consoleje atvaizduotu 21 uzduoties rezultata

// 23 I html isideti input ir mygtuka ant kurio paspaudus consoleje parasys jusu ivesta input reiksme

// 24 I html prisideti papildoma elementa, kuriame paspaudus 23 uzduoties mygtuka dabar atvaizduos input reiskmes teksta (vietoj console.log)

// 25 Praplesti mygtuko papsaudimo funkcija ir kiekviena ne vienoda reiskme prideti i nauja visu input reiksmiu array

// 26 Atvaizduoti visas naujai pridetas input reiksmes vis naujam elemente viduj 24 uzduoties elemento

// 27 Prideti prie salygos kad reiksme butu nauja, kad reiksme nebutu ir tuscias
