const num = Number(prompt("5"));
console.log(num % 3 === 0 && num % 5 === 0);

const num2 = Number(prompt("2:"));
console.log(num2 % 3 === 0 || num2 % 2 === 0);

const num3 = Number(prompt("10:"));
console.log((num3 % 4 === 0 && num % 3 === 0) || num3 % 5 === 0);

const age = Number(prompt("20"));
if (age < 16 || age > 65) {
  console.log("აკმაყოფილებს პირობას");
} else {
  console.log("არ აკმაყოფილებს პირობას");
}


const num4 = Number(prompt("200:"));
if ((num4 >= 50 && num4 <= 100) || num4 === 200) {
  console.log("შესაბამისი რიცხვია");
} else {
  console.log("არასწორია");
}


const a = Number(prompt("10:"));
const b = Number(prompt("-10:"));
if (a > 0 && b > 0) {
  console.log("ორივე დადებითია");
} else {
  console.log("არაა ორივე დადებითი"); 
} 


const y = Number(prompt("10:"));
const x = Number(prompt("20:"));
if (y < 0 || x < 0) {
  console.log("მინიმუმ ერთი უარყოფითია");
} else {
  console.log("არცერთი უარყოფითი არაა");
}


const num5 = Number(prompt("30"));
if (num5 >= 20 && num5 <= 30 && num5 % 2 === 0) {
  console.log("შესაბამისია");
} else {
  console.log("არ შეესაბამება");
}


const num6 = Number(prompt("20"));
if ((num6 >= 0 && num6 <= 10) || (num6 >= 90 && num6 <= 100)) {
  console.log("შესაბამისია");
} else {
  console.log("არ შეესაბამება");
}


const password = prompt("Goa:");
if (password === "12345" || password === "Goa") {
  console.log("პაროლი სწორია");
} else {
  console.log("პაროლი არასწორია");
}


const num7 = Number(prompt("15"));
if (num7 % 5 === 0 && num7 % 10 !== 0) {
  console.log("5-ის ჯერადია და არა 10-ის");
} else {
  console.log("არ აკმაყოფილებს");
}


const year = Number(prompt("2000:"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("ნაკიან წელია");
} else {
  console.log("არ არის ნაკიანი წელი");
}


const k = Number(prompt("20:"));
const m = Number(prompt("30:"));
if (k > 0 && m > 0 && k + m > 100) {
  console.log("პირობები შესრულებულია");
} else {
  console.log("არ შესრულდა");
}
