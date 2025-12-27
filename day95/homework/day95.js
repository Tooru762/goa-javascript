// 1. პალინდრომის შემოწმება
function isPalindrome(text) {
    let reversed = text.split("").reverse().join("");
    return text === reversed;
}

console.log(isPalindrome("ana"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));


// 2. ხმოვნების ჩანაცვლება "*"-ით
function replaceVowels(text) {
    let vowels = "aeiouAEIOU";
    let result = "";

    for (let char of text) {
        if (vowels.includes(char)) {
            result += "*";
        } else {
            result += char;
        }
    }

    return result;
}

console.log(replaceVowels("Hello"));
console.log(replaceVowels("Javascript"));
console.log(replaceVowels("World"));


// 3. ქეისების შეცვლა
function swapCase(text) {
    let result = "";

    for (let char of text) {
        if (char === char.toLowerCase()) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }

    return result;
}

console.log(swapCase("Hello"));
console.log(swapCase("JaVa"));
console.log(swapCase("ABCabc"));


// 4. 18+ ასაკის გაფილტვრა
function filterAdults(arr) {
    let result = [];

    for (let item of arr) {
        if (item[1] > 18) {
            result.push(item);
        }
    }

    return result;
}

let people = [
    ["ნიკა", 17],
    ["ანა", 22],
    ["გიორგი", 19],
    ["მარიამი", 15],
    ["ლუკა", 25]
];

console.log(filterAdults(people));
