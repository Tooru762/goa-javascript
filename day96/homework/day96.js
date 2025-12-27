//1
 function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

// Examples
console.log(centuryFromYear(1705)); // 18
console.log(centuryFromYear(1900)); // 19
console.log(centuryFromYear(1601)); // 17
console.log(centuryFromYear(2000)); // 20
console.log(centuryFromYear(89));   // 1

//2. 
function areYouPlayingBanjo(name) {
    if (name[0] === "R" || name[0] === "r") {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
}
console.log(areYouPlayingBanjo("Ringo")); 
console.log(areYouPlayingBanjo("Paul"));  
console.log(areYouPlayingBanjo("rachel"));  

//3.
function doubleInteger(i) {
  return i * 2;
}


//4.
function lovefunc(flower1, flower2) {
    return (flower1 % 2 !== flower2 % 2);
}
console.log(lovefunc(1, 4)); 
console.log(lovefunc(2, 2)); 
console.log(lovefunc(0, 1));  

//5.
function invert(array) {
  return array.map(num => -num);
}
console.log(invert([1, 2, 3, 4, 5]));      
console.log(invert([1, -2, 3, -4, 5]));    
console.log(invert([]));                   

//6.
function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((acc, curr) => acc + curr, 0);
    let average = (sum + yourPoints) / (classPoints.length + 1);
    return yourPoints > average;
}

//7.
function getCount(str) {
    let matches = str.match(/[aeiou]/g);
    return matches ? matches.length : 0;
} 
console.log(getCount("hello"));        // 2
console.log(getCount("abracadabra"));  // 5
console.log(getCount("why"));          // 0
console.log(getCount("aeiou"));        // 5


//8.
function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}
console.log(digitize(35231)); 
console.log(digitize(0));     
console.log(digitize(987));   
//9.
function solution(str, ending) {
    return str.endsWith(ending);
}
console.log(solution("abc", "bc")); // true
console.log(solution("abc", "d"));  // false
console.log(solution("hello", "lo")); // true
console.log(solution("hello", "he")); // false
