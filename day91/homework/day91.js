//1.
let arr = [1, 2, 3, 4, 5];
arr.pop();          // ბოლო ელემენტის წაშლა
arr.push(10);       // ახალი ელემენტის დამატება
console.log(arr);


//2
let arR = [1, 2, 3, 4, 5];
arr.shift();          
arr.unshift(99);    
console.log(arr);


//3.
let aRr = [1, 2, 3, 4, 5];
let x = Number(prompt("Enter number: "));

if (arr.includes(x)) {
    arr.splice(arr.indexOf(x), 1);
} else {
    arr.push(x);
}

console.log(arr);


//4.let arr = [1,2,3,4,5,6,7,8,9,10];
let index = Number(prompt("Enter index: "));

arr.splice(index, 3);   
console.log(arr);

//5.
let Arr = [1,2,3,4,5,6,7,8,9,10];

Arr[2] = "YourName";       
Arr.splice(6, 3, "Goa academy");   
console.log(Arr);


//6.
let aRR = [1, 2, 3];
aRR.pop();
console.log(aRR);

//7.
let ARR = [1, 2, 3];
arr.shift();
console.log(ARR); 

//8.
let ard = [1, 2, 3];
ard.unshift(99);
console.log(ard);

//9.
let arL = [1, 2, 3];
arL.push("hello");
console.log(arL);


