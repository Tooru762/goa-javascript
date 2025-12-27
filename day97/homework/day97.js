//1.
function booleanToString(b) {
    return b.toString();
}
console.log(booleanToString(true));  // "true"
console.log(booleanToString(false)); // "false"

//2.
function derive(coefficient, exponent) {
    let newCoefficient = coefficient * exponent;
    let newExponent = exponent - 1;
    return `${newCoefficient}x^${newExponent}`;
}
console.log(derive(7, 8)); 
console.log(derive(5, 9)); 
console.log(derive(3, 4)); 

//3.
function add(a, b) {
    return a == b;
}
console.log(add(1, "1")); // true
console.log(add(2, "2")); // true
console.log(add(1, "2")); // false
console.log(add(0, "0")); // true
console.log(add(10, "10")); // true 

//4.
function solution(str) {
    return str.split('').reverse().join('');
}
console.log(solution('world'));'
console.log(solution('word'));  
console.log(solution('hello')); 


//5.
function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("No vowels here!"));

//6.
function boolToWord(bool) {
    return bool ? "Yes" : "No";
}
console.log(boolToWord(true));  
console.log(boolToWord(false));  



