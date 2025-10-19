let myName = "luka";

// მომხმარებლის მონაცემები
let userName = prompt("luka:");
let userAge = Number(prompt("14:"));


if (userName.toLowerCase() === myName.toLowerCase() && userAge > 18) {
  console.log("we have same name and you are more than 18 yo");
} else if (userName.toLowerCase() !== myName.toLowerCase() && userAge > 18) {
  console.log("We do not have same names but you are more than 18 yo");
} else {
  console.log("vin jandaba xar");
}


let myAnimal = "ლომი";
let userAnimal = prompt("ლომი:");

if (userAnimal.toLowerCase() === myAnimal.toLowerCase() || userAnimal.toLowerCase() === "ლომი") {
  console.log("you entered my favourite animal or king of animals");
} else {
  console.log("You entered the animal i hate");
}
