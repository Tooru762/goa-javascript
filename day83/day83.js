let number = Number(prompt("შეიყვანე რიცხვი:"));
console.log(number ** 2);

let num1 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
let num2 = Number(prompt("შეიყვანე მეორე რიცხვი:"));
let operation = prompt("შეიყვანე მოქმედება (+, -, *, /)");

let result = 
  operation === "+" ? num1 + num2 :
  operation === "-" ? num1 - num2 :
  operation === "*" ? num1 * num2 :
  operation === "/" ? num1 / num2 :
  "არასწორი მოქმედება";

alert(result);


let n = Number(prompt("შეიყვანე რიცხვი:"));
console.log(n % 2 === 0 ? "ლუწია" : "კენტია");


let age = Number(prompt("შეიყვანე ასაკი:"));
console.log(age < 18 ? "ჯერ არასრულწლოვანი ხარ" : "შენ ზრდასრული ხარ");


let myColor = "ლურჯი";
let userColor = prompt("ლურჯი");

if (userColor.toLowerCase() === myColor.toLowerCase()) {
  alert("ჩვენ ორივეს ერთნაირი ფერები მოგვწონს");
} else {
  alert(userColor);
}


let myNumber = 10;
let input = Number(prompt("10"));
console.log(input === myNumber ? "ტოლია" : "არ არის ტოლი"); 

let x = Number(prompt("10"));
if (x > 0) {
  console.log("დადებითია");
} else if (x < 0) {
  console.log("უარყოფითია");
} else {
  console.log("ნულია");
} 




let month = Number(prompt("შეიყვანე თვე (1-12):"));
let monthName = "";
let season = "";

switch(month) {
  case 12:
  case 1:
  case 2:
    season = "ზამთარი";
    break;
  case 3:
  case 4:
  case 5:
    season = "გაზაფხული";
    break;
  case 6:
  case 7:
  case 8:
    season = "ზაფხული";
    break;
  case 9:
  case 10:
  case 11:
    season = "შემოდგომა";
    break;
  default:
    season = "არასწორი თვე";
}

let monthNames = ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"];
monthName = month >= 1 && month <= 12 ? monthNames[month - 1] : "არასწორი თვე";

console.log(`${monthName} — ${season}`);


let num = Number(prompt("10"));
console.log(num % 3 === 0 ? "იყოფა 3-ზე" : "არ იყოფა 3-ზე");


let age1 = Number(prompt("10:"));
let age2 = Number(prompt("15:"));

if (age1 === age2) {
  console.log("ისინი თანაკლასელები არიან");
}


let score = Number(prompt("100:"));
console.log(score >= 51 ? "გამოცდა ჩაბარებულია" : "გამოცდა ჩაჭრილია"); 


let day = Number(prompt("7"));
let days = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"];

console.log(day >= 1 && day <= 7 ? days[day - 1] : "არასწორი რიცხვი");


let temp = Number(prompt("შეიყვანე ტემპერატურა:"));

if (temp < 0) {
  console.log("ცივა და თბილად ჩაიცვი");
} else if (temp <= 25) {
  console.log("ნორმალური ამინდია");
} else {
  console.log("ცხელა");
}


let numberInput = Number(prompt("10"));

if (numberInput > 20) {
  if (numberInput % 2 === 0) {
    console.log(numberInput * 2);
  } else {
    console.log(numberInput * 3);
  }
} else {
  if (numberInput % 3 === 0) {
    console.log(numberInput / 3);
  } else {
    console.log(numberInput);
  }
}

