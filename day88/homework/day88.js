//davaleba 1 
let i = 1;

while (i <= 10) {
  console.log("Giorgi");
  i++;
}


//davaleba 2
let Name = "";

while (Name !== "Giorgi") {
  Name = prompt("შეიყვანე სახელი:");
}

console.log("სწორია! შეიყვანე ჩემი სახელი.");

//davaleba 3 
let list = ["apple", "banana", "cherry"];
let index = 0;

while (index < list.length) {
  console.log(list[index]);
  index++;
}


//davaleba 4 
let num = Number(prompt("შეიყვანე რიცხვი:"));

let x = 0;

while (x <= num) {
  if (x % 2 === 0) {
    console.log(x);
  }
  x++;
}


//davaleba 5 
let strings = ["hello", "world", "js"];
let numbers = [10, 20, 30];
let booleans = [true, false, true];
let arrays = [[1, 2], ["a", "b"], [true, false]];

console.log(strings);
console.log(numbers);
console.log(booleans);
console.log(arrays);
