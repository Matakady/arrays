const zelenina = [
  "rajče",
  "okurka",
  "paprika",
  "mrkev",
  "brambory",
  "celer",
  "zelí",
  "květák",
  "ředkvičky",
  "brokolice",
];

const pes = {
  barva: "hnědá",
  výška: "60 cm",
  srst: "středně dlouhá",
};

const user = {
  firstName: "Jakub",
  lastName: "novák",
  age: "20",
};

console.log(user.age);
user.lastName = "Novotný";
console.log(user.lastName);

const ovoce = ["jablko", "hruška", "jahody", "třešně"];

const vety = [
  "Zůstaň stát",
  "Přeskoč o dvě pole dopředu",
  "Dej se doprava",
  "Dej se doleva",
  "Jdi rovně",
  "Jedno kolo stojíš",
];

// let i = 0;
// while (i < zelenina.length) {
//   console.log(zelenina[i]);
//   i++;
// }

//let sheep = 1;
//while (sheep <= 50) {
//  if (sheep ===11) {
//    console.log("1 sheep - chungus handles");
//  } else {
//    console.log(sheep + " sheep - chungus does not handle");
//  }
//  sheep++;
//}
const days = [
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// const kostka = document.querySelector("h3");
// const tlacitko = document.querySelector("button");
// tlacitko.onclick = () => {
//   const nahodneCislo = Math.floor(Math.random() * 6) + 1;
//   kostka.textContent = nahodneCislo;
// };

//console.log(days.length);
//days[2] = "It is Wednessday, my dudes";
//console.log(days[2]);

// index
// length
// push/unshift/pop/shift
// concat
// indexOf
// join
// includes
// sort
// Math.random()

fetch("https://nameday.abalin.net/api/V1/today").then((response) =>
  response.json().then((data) => {
    const svatek = data.nameday.cz;
    const svatekSpan = document.querySelector(".svatek");
    svatekSpan.textContent = svatek;
  })
);

fetch("https://api.imgflip.com/get_memes").then((response) =>
  response.json().then((info) => {
    const memes = info.data.memes;
    const obrazky = document.querySelector(".obrazek-kontejner");
    let i = 0;
    while (i < memes.length) {
      const jmeno = memes[i].name;
      const url = memes[i].url;
      const jmenoElement = document.createElement("h3");
      const obrazekElement = document.createElement("img");
      obrazekElement.setAttribute("src", url);
      jmenoElement.textContent = jmeno;
      obrazky.appendChild(jmenoElement);
      obrazky.appendChild(obrazekElement);
      i++;
    }
  })
);
