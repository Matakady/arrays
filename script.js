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

const ovoce = ["jablko", "hruška", "jahody", "třešně"];

const vety = [
  "Zůstaň stát",
  "Přeskoč o dvě pole dopředu",
  "Dej se doprava",
  "Dej se doleva",
  "Jdi rovně",
  "Jedno kolo stojíš",
];

const days = [
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const kostka = document.querySelector("h3");
const tlacitko = document.querySelector("button");
tlacitko.onclick = () => {
  const nahodneCislo = Math.floor(Math.random() * 6) + 1;
  kostka.textContent = nahodneCislo;
};

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
