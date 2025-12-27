// 1. მისალმების ფუნქცია
function greet(name) {
    console.log(`გამარჯობა ${name}`);
}

// გამოძახება 3-ჯერ
greet("ნიკა");
greet("ანა");
greet("გიორგი");


// 2. კალკულატორის ფუნქცია
function calculator(a, b, operation) {
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        return a / b;
    } else {
        return "არასწორი მოქმედება";
    }
}

// გამოძახება 3-ჯერ
console.log(calculator(5, 3, "+"));
console.log(calculator(10, 2, "*"));
console.log(calculator(8, 4, "/"));


// 3. სიის რიცხვების ჯამის ფუნქცია
function sumOfList(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// გამოძახება 3-ჯერ
console.log(sumOfList([1, 2, 3, 4, 5]));
console.log(sumOfList([10, 20, 30, 40, 50]));
console.log(sumOfList([3, 6, 9, 12, 15]));


// 4. რიცხვის კუბის ფუნქცია
function cube(number) {
    return number ** 3;
}

// გამოძახება 3-ჯერ
console.log(cube(2));
console.log(cube(4));
console.log(cube(6));


// 5. სახელის შედარების ფუნქცია
function isMyName(name) {
    return name === "თქვენი_სახელი";
}

// გამოძახება 3-ჯერ
console.log(isMyName("ნიკა"));
console.log(isMyName("ანა"));
console.log(isMyName("თქვენი_სახელი"));


// 6. 1-დან რიცხვამდე ჯამის ფუნქცია
function sumToNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// გამოძახება 3-ჯერ
console.log(sumToNumber(5));
console.log(sumToNumber(10));
console.log(sumToNumber(20));
