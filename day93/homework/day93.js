
// 1) 
let arr1 = [100, 50, 0, -300, 150, 20, 40, 900];
let smallest = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < smallest) {
        smallest = arr1[i];
    }
}

console.log("ყველაზე პატარა რიცხვი:", smallest);


// 2) 
let binaries = ['01001011100', '100111110', '110101010'];
let decimals = [];

for (let i = 0; i < binaries.length; i++) {
    let bin = binaries[i];
    let decimal = 0;
    let power = 0;

    for (let j = bin.length - 1; j >= 0; j--) {
        if (bin[j] === '1') {
            decimal += 2 ** power;
        }
        power++;
    }

    decimals.push(decimal);
}

console.log("Decimal მნიშვნელობები:", decimals);


// 3) 
let num = Number(prompt("შეიყვანე რიცხვი გამყოფებისთვის:"));
let divisors = [];

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        divisors.push(i);
    }
}

console.log("გამყოფები:", divisors);


// 4) 
let students = ["Nika", "Ana", "Giorgi", "Luka", "Mari", "Dato", "Elene"];
let even = [];
let odd = [];

for (let i = 0; i < students.length; i++) {
    if (i % 2 === 0) {
        even.push(students[i]);
    } else {
        odd.push(students[i]);
    }
}

console.log("ლუწ ინდექსები:", even);
console.log("კენტ ინდექსები:", odd);


// 5) 
let arr2 = [10, "hello", 5, "goa", 3, 2];
let product = 1;

for (let i = 0; i < arr2.length; i++) {
    if (typeof arr2[i] === "number") {
        product *= arr2[i];
    }
}

console.log("რიცხვების ნამრავლი:", product);

