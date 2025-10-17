let num1 = 5;
let num2 = 10;
console.log("ჯამი:", num1 + num2);

let name = "ლუკა";
alert("გამარჯობა " + name);


let a = 1; // `let` - ცვლადი, რომლის მნიშვნელობა შეიძლება შეიცვალოს.
const b = 2; // `const` - მუდმივი ცვლადი, მნიშვნელობა არ შეიძლება შეიცვალოს.
var c = 3; // `var` - ძველი ტიპის ცვლადი, აქვს ფუნქციის შკალა და შეიძლება ხელახლა გამოცხადდეს.

console.log("let:", a);
console.log("const:", b);
console.log("var:", c);

let x = 5;
x = 10;
x = 20;
console.log("let x:", x); // მუშაობს

var y = 15;
y = 25;
y = 35;
console.log("var y:", y); // მუშაობს

const z = 100;
// z = 200; // ეს არ იმუშავებს! შეცდომა იქნება, რადგან `const` ცვლადის მნიშვნელობის შეცვლა არ შეიძლება
console.log("const z:", z);


let n1 = 20;
let n2 = 4;

console.log("ჯამი:", n1 + n2);
console.log("სხვაობა:", n1 - n2);
console.log("გამრავლება:", n1 * n2);
console.log("გაყოფა:", n1 / n2);
console.log("ნაშთი:", n1 % n2);


let variable = 10;
console.log("Number:", variable);

variable = true;
console.log("Boolean:", variable);

variable = "ტექსტი";
console.log("String:", variable);

alert("შეამოწმე კონსოლი");

let score = 50;
score = score + 10;
console.log("გარდატანილი მნიშვნელობა:", score); // ან score += 10;
