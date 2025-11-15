//davaleba 1
let colors = ['red', 'green', 'blue', 'yellow'];

colors[0] = "DarkRed";
colors[colors.length - 1] = "Orange";

console.log(colors);

//davaleba 2 
let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

fruits[2] = "orange";
fruits[3] = "potato";
fruits[fruits.length - 1] = "cucumber";

console.log(fruits);


//davaleba 3 
let numbers = [10, 25, 30, 48, 50, 64 , 70 , 87];


numbers[1] = 20;
numbers[3] = 40;
numbers[5] = 60;
numbers[7] = 80;

console.log(numbers);

//davaleba 4 
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

days[0] = "Weekend1";
days[1] = "Weekend2";

console.log(days);


//davaleba 5 
let fruits2 = ['apple', 'banana', 'cherry'];

console.log(fruits2[0]);
console.log(fruits2[1]);
console.log(fruits2[2]);


//davaleba 6 
const colors2 = ['red', 'green', 'blue', 'yellow'];

for (let i = 0; i < colors2.length; i++) {
  console.log(colors2[i]);
}


//davaleba 7
let days2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

let i = 0;
while (i < days2.length) {
  console.log(days2[i]);
  i++;
}


//davaleba 8 
let nums = [2, 5, 8, 13, 20, 22];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i]);
  }
}

let j = 0;

while (j < nums.length) {
  if (nums[j] % 2 === 0) {
    console.log(nums[j]);
  }
  j++;
}


//davaleba 9
let nums2 = [1, 4, 7, 10, 13, 15];

for (let i = 0; i < nums2.length; i++) {
  if (nums2[i] % 2 !== 0) {
    console.log(nums2[i]);
  }
}
let k = 0;

while (k < nums2.length) {
  if (nums2[k] % 2 !== 0) {
    console.log(nums2[k]);
  }
  k++;
}
