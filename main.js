//First program
console.log("Hello Wolrd");

//Second program
console.log(3 + 5);

//third program
let num = parseInt(prompt("Give me a number: "));

for (let i = 2; i < num / 2; i++) {
  if (num % i == 0 || num == 0 || num == 1 || num === 4) {
    alert("No es primo");
    break;
  } else {
    alert("Es primo");
    break;
  }
}

//fourth program

let score = parseInt(prompt("Give me a score: "));

if (score <= 10 && score >= 9.1) {
  alert("Sobresaliente");
} else if (score <= 9 && score >= 7.1) {
  alert("Notable");
} else if (score <= 7 && score >= 6.1) {
  alert("Bien");
} else if (score <= 6 && score >= 5.1) {
  alert("Suficiente");
} else if (score <= 5 && score >= 3.1) {
  alert("Insuficiente");
} else if (score <= 3 && score >= 0) {
  alert("Muy deficiente");
} else {
  alert("Tu score no es válida");
}
