// ჩემი სახელი
let myName = "Luka";

// მომხმარებლისგან შემოსული მონაცემები
let userName = prompt("შეიყვანეთ თქვენი სახელი:");
let userAge = Number(prompt("შეიყვანეთ თქვენი ასაკი:"));

// შედეგის განსაზღვრა
if (userName === myName && userAge > 18) {
    console.log("we have same name and you are more than 18 yo");
} else if (userAge > 18 && userName !== myName) {
    console.log("We do not have same names but you are more than 18 yo");
} else {
    console.log("vin jandaba xar");
}

// ჩემი საყვარელი ცხოველი
let myAnimal = "sheep";

// მომხმარებლისგან შემოსული ცხოველი
let userAnimal = prompt("შეიყვანეთ ცხოველის სახელი:");

// ლოგიკის შემოწმება
if (userAnimal === myAnimal || userAnimal === "lomi") {
    console.log("you entered my favourite animal or king of animals");
} else {
    console.log("You entered the animal i hate");
}
