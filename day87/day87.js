for (let i = 0; i <= 200; i++) {
  console.log(i);
}

for (let i = 5; i <= 300; i += 10) {
  console.log(i);
}

for (let i = 100; i >= 1; i--) {
  console.log(i);
}

const num = Number(prompt("10:"));
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}

console.log("ჯამი არის:", sum);


for (let i = 4; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


const num2 = Number(prompt("20"));

for (let i = 1; i <= num2; i++) {
  if (i % 2 === 0) {
    console.log(i + " არის ლუწი");
  } else {
    console.log(i + " არის კენტი");
  }
}
