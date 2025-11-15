// 1. Create a list of 10 names and print them in reverse order
const names = ["ანა", "გიორგი", "მარიამი", "ლუკა", "თამარი", "ნინო", "დავითი", "ელენე", "სანდრო", "გაბრიელი"];
console.log("სია უკუღმა:");
for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

console.log("\n-------------------------------");

// 2. Text — print first and last character
let text = "გულადი ადამიანი";
console.log("პირველი და ბოლო სიმბოლო:", text[0] + text[text.length - 1]);

console.log("\n-------------------------------");

// 3. Check even or odd
let num = 15;
if (num % 2 === 0) {
  console.log(num, "ლუწია");
} else {
  console.log(num, "კენტია");
}

console.log("\n-------------------------------");

// 4. Check if multiple of 3
let num3 = 27;
if (num3 % 3 === 0) {
  console.log(num3, "არის 3-ის ჯერადი");
} else {
  console.log(num3, "არ არის 3-ის ჯერადი");
}

console.log("\n-------------------------------");

// 5. Multiply numbers from 1 to n
let n = 6;
let product = 1;
for (let i = 1; i <= n; i++) {
  product *= i;
}
console.log(`${n}-მდე გამრავლების შედეგი:`, product);

console.log("\n-------------------------------");

// 6. Check palindrome (for loop)
let txt = "level";
let reversed = "";
for (let i = txt.length - 1; i >= 0; i--) {
  reversed += txt[i];
}
if (txt === reversed) {
  console.log(`"${txt}" არის პალინდრომი`);
} else {
  console.log(`"${txt}" არ არის პალინდრომი`);
}

console.log("\n-------------------------------");

// 7. Group name check
let groupName = "19-20-33";
if (groupName === "19-20-33") {
  console.log("ჯგუფი დადასტურებულია!");
}

console.log("\n-------------------------------");

// 8. Print group members
const groupMembers = ["ანა", "გიორგი", "მარიამი", "ლუკა", "თამარი", "ნინო", "დავითი", "ელენე", "სანდრო", "გაბრიელი"];
console.log("ჯგუფის წევრები:");
for (let member of groupMembers) {
  console.log(member);
}

console.log("\n-------------------------------");

// 9. Replace 'ა' with '@'
let text2 = "მაღალი ადამიანი გაბრიელი დადის ბაღში";
console.log(text2.replaceAll("ა", "@"));

console.log("\n-------------------------------");

// 10. Square root of number
let number = 49;
console.log("რიცხვიდან ფესვი არის:", Math.sqrt(number));

console.log("\n-------------------------------");

// 11. Square of number
let num2 = 12;
console.log("რიცხვის კვადრატი:", num2 ** 2);

console.log("\n-------------------------------");

// 12. Check if number is integer or float
let num3Type = 4.5;
if (Number.isInteger(num3Type)) {
  console.log(num3Type, "მთელი რიცხვია");
} else {
  console.log(num3Type, "ათწილადი რიცხვია");
}

console.log("\n-------------------------------");

// 13. Print substring skipping every 2nd character
let text3 = "გაბრიელი";
let index = 6;
let selected = "";
for (let i = 0; i <= index; i += 2) {
  selected += text3[i];
}
console.log("შერჩეული ასოები:", selected);

console.log("\n-------------------------------");

// 14. 20-element list, print up to given index using while
const list20 = Array.from({ length: 20 }, (_, i) => i + 1);
let ind = 7;
let i = 0;
console.log(`პირველი ${ind + 1} ელემენტი:`);
while (i <= ind) {
  console.log(list20[i]);
  i++;
}

console.log("\n-------------------------------");

// 15. 10-element list, print all using for and while
const list10 = ["ანა", "ბექა", "გიორგი", "ნინო", "ლუკა", "თამარი", "მარიამი", "დავითი", "ელენე", "სანდრო"];

console.log("For loop:");
for (let name of list10) {
  console.log(name);
}

console.log("\nWhile loop:");
let j = 0;
while (j < list10.length) {
  console.log(list10[j]);
  j++;
}

console.log("\n-------------------------------");

// 16. Names that start with "ა", end with "ი" and have length == 5
console.log("სახელები, რომლებიც იწყება 'ა'-ზე, მთავრდება 'ი'-ზე და სიგრძე == 5:");
for (let name of list10) {
  if (name.startsWith("ა") && name.endsWith("ი") && name.length === 5) {
    console.log(name);
  }
}
