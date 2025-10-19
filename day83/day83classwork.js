function safePrompt(message) {
  const res = prompt(message);
  return res === null ? null : String(res);
}

function equalsIgnoreCase(a, b) {
  return a !== null && b !== null && a.toLowerCase() === b.toLowerCase();
}

// User data and reference
const myName = "გიორგი";
const myAge = 25;

// Collect user input defensively
const userName = safePrompt("luka");
const ageInput = safePrompt("14");
const userAge = ageInput === null ? null : Number(ageInput);

// Name check
if (userName === null) {
  console.log("სახელი არ შეყვანილა");
} else if (equalsIgnoreCase(userName, myName)) {
  console.log("ერთნაირი სახელები გვაქვს");
} else {
  console.log("სხვა სახელი გქვია");
}

// Name + age check
if (userName !== null && userAge !== null && equalsIgnoreCase(userName, myName) && userAge === myAge) {
  console.log("შედეგი: სახელი და ასაკიც ემთხვევა");
} else if (userAge === null) {
  console.log("ასაკი არ შეყვანილა");
} else {
  console.log("ჩვენი ასაკი ან სახელები განსხვავდება");
}