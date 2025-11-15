let mixed = ["hello", 25, true, 3.14, "world", false, 100];

console.log(mixed[0]);
console.log(mixed[1]);
console.log(mixed[2]);
console.log(mixed[3]);
console.log(mixed[4]);
console.log(mixed[5]);
console.log(mixed[6]);

for (let i = 0; i < mixed.length; i++) {
  console.log(mixed[i]);
}

let index = 0;

while (index < mixed.length) {
  console.log(mixed[index]);
  index++;
}
