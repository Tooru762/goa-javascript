// 1. რიცხვი იყოფა 2-ზე და არა 5-ზე
let number = Number(prompt("შეიყვანეთ რიცხვი:"));
if (number % 2 === 0 && number % 5 !== 0) {
    console.log("რიცხვი ლუწია და არა 5-ის ჯერადი");
} else {
    console.log("სხვა შემთხვევა");
}

// 2. ქულა (0–100)
let score = Number(prompt("შეიყვანეთ თქვენი ქულა (0–100):"));
if (score > 90) {
    console.log("შესანიშნავი!");
} else if (score > 70) {
    console.log("კარგია!");
} else if (score > 50) {
    console.log("საშუალო შედეგი!");
} else {
    console.log("მეტი უნდა იმეცადინო!");
}

// 3. ორი სიტყვა შედარება
let word1 = prompt("შეიყვანეთ პირველი სიტყვა:");
let word2 = prompt("შეიყვანეთ მეორე სიტყვა:");
if (word1 === word2) {
    console.log("სიტყვები ემთხვევა");
} else if (word1[0] === word2[0]) {
    console.log("პირველი ასოები ემთხვევა");
} else {
    console.log("არ ემთხვევა");
}

// 4. ასაკი და ენერგია
let age = Number(prompt("შეიყვანეთ თქვენი ასაკი:"));
let energy = Number(prompt("შეიყვანეთ ენერგიის დონე (1–10):"));
if (age < 20 && energy > 7) {
    console.log("გირჩევ სირბილს!");
} else if (energy < 4) {
    console.log("გირჩევ დასვენებას!");
} else {
    console.log("გააგრძელე ჩვეულებრივად!");
}

// 5. რიცხვი 1–10
let num = Number(prompt("შეიყვანეთ რიცხვი 1–10:"));
if (num === 3 || num === 7) {
    console.log("გაიმარჯვე!");
} else if (num > 8) {
    console.log("ძალიან высокая!");
} else if (num < 2) {
    console.log("ძალიან დაბალია!");
} else {
    console.log("ცადე კიდევ!");
}
