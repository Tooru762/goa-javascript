const num = Number(prompt("10:"));

if (num % 2 === 0 && num % 5 !== 0) {
  console.log("რიცხვი ლუწია და არა 5-ის ჯერადი");
} else {
  console.log("სხვა შემთხვევა");
}


const score = Number(prompt("70:"));

if (score > 90) {
  console.log("შესანიშნავი!");
} else if (score >= 70 && score <= 90) {
  console.log("კარგია!");
} else if (score >= 50 && score < 70) {
  console.log("საშუალო შედეგი!");
} else {
  console.log("მეტი უნდა იმეცადინო!");
}


const word1 = prompt("luka:");
const word2 = prompt("luka:");

if (word1 === word2) {
  console.log("სიტყვები ემთხვევა");
} else if (word1[0] === word2[0]) {
  console.log("პირველი ასოები ემთხვევა");
} else {
  console.log("არ ემთხვევა");
}


const age = Number(prompt("14:"));
const energy = Number(prompt("90:"));

if (age < 20 && energy > 7) {
  console.log("გირჩევ სირბილს!");
} else if (energy < 4) {
  console.log("გირჩევ დასვენებას!");
} else {
  console.log("გააგრძელე ჩვეულებრივად!");
}


const num2 = Number(prompt("10:"));

if (num2 === 7 || num2 === 3) {
  console.log("გაიმარჯვე!");
} else if (num > 8) {
  console.log("ძალიან მაღალი!");
} else if (num < 2) {
  console.log("ძალიან დაბალია!");
} else {
  console.log("ცადე კიდევ!");
}
