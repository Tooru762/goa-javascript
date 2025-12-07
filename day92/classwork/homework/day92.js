//1.
let arr = ["ana", "giorgi", "luka", "dato"];

let word = prompt("Enter a word:");

if (!arr.includes(word)) {
    arr.unshift(word);  
} else {
    let reversed = word.split("").reverse().join("");
    arr.push(reversed); 
    
}

console.log(arr);


//2.
let aRr = [10, 20, 30, 100, 40, "Goa"];

let txt = prompt("Enter text:");

console.log(aRr.includes(txt));

//3.
let Word = prompt("Enter a word:");

let newArr = word.split("");

console.log(newArr);

//4.
let count = Number(prompt("How many words will you enter?"));

let aRR = [];

for (let i = 0; i < count; i++) {
    let w = prompt("Enter word:");
    aRR.push(w);
}


let filtered = arr.filter((item, index) =>
    arr.findIndex(x => x.toLowerCase() === item.toLowerCase()) === index
);

console.log(filtered);


//5.
let Arr = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150];

let n1 = Number(prompt("Enter first index:"));
let n2 = Number(prompt("Enter second index:"));

let start = Math.min(n1, n2);
let end = Math.max(n1, n2);

let result = Arr.slice(start, end + 1);

console.log(result); 

//6
let arR = [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900];

arR.sort((a, b) => a - b);

console.log(arR); 



