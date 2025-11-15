//davaleba 1 
for (let i = 0; i <= 200; i++) {
  console.log(i);
}

//davaleba 2
for (let i = 5; i <= 300; i += 10) {
  console.log(i);
}

//davaleba 3
for (let i = 100; i >= 1; i--) {
  console.log(i);
}


//davaleba 4
let num = Number(prompt("შეიყვანე რიცხვი:"));
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}

console.log("ჯამი არის:", sum);

//davaleba 5
for (let i = 4; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


//davaleba 6

let n = Number(prompt("შეიყვანე რიცხვი:"));

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i + " არის ლუწი");
  } else {
    console.log(i + " არის კენტი");
  }
}

//davaleba 7 

let a = Number(prompt("მიუთითე პირველი რიცხვი:"));
let b = Number(prompt("მიუთითე მეორე რიცხვი:"));

let sum2 = 0;

for (let i = a; i <= b; i++) {
  sum2 += i;
}

console.log("ჯამი არის:", sum2);
