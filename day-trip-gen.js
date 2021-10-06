//Dan Prudhomme
"use strict";
//(5 points): As a developer, I want to make at least three commits with descriptive messages. -- count 4

//(5 points): As a user, I want a destination to be randomly selected for my day trip.
let randomDestination = ["Hawaii", "Tennessee", "Florida", "Tokyo", "Perth"];


//(5 points): As a user, I want a restaurant to be randomly selected for my day trip.
let randomFood = ["foul", "fish", "salad", "pork", "beef", "CANDY"];


//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
let randomTransportation = ["rental car", "bus", "train", "horseback", "walking", "running", "ship", "a Falcon X Rocket"];


//(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
let randomEntertainment = ["a theme park", "the local hangouts", "a shopping center", "the beach", "a local museum"];

function getRandomSingle(stringArray){
    let randomIndex = Math.round(Math.random() * (stringArray.length - 1));
    return stringArray[randomIndex];
}
let randomTest = getRandomSingle(randomDestination);
// console.log(randomTest);

/*(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form 
of entertainment if I don’t like one or more of those things.*/
function getRandomAll(destinationArray, foodArray, transportationArray, entertainmentArray){
    let destination = "";
    let food = "";
    let transportation = "";
    let entertainment = "";

    destination = getRandomSingle(destinationArray);
    food = getRandomSingle(foodArray);
    transportation = getRandomSingle(transportationArray);
    entertainment = getRandomSingle(entertainmentArray);

    return `Your random vacation is in ${destination} where you will eat ${food}, travel by ${transportation}, and visit ${entertainment}!`;
}
let getrandomVacation = getRandomAll(randomDestination, randomFood, randomTransportation, randomEntertainment);
console.log(getrandomVacation);

let userVerifyVacation = prompt("Is this vacaton okay with you? Type yes or no.");
function isVacationGood(string){
    string = string.toUpperCase();
    if(string == "N" || string == "NO" || string == "NA" || string == "NAW" || string == "HELL NO" || string == "HELL NAW" || string == "HELL NA" || string[0] == "N"){
        return false;
    }
    else{
        return true;
    }
}
let verifyVacation = isVacationGood(userVerifyVacation);
//console.log(verifyVacation);

function checkIfVacationNeedsReplacement(bool){
    let ask;
    if (bool === true){
        alert("Enjoy your Vacation"); 
    }
    else{
        ask = prompt("What part of your vacation would you like to replace?");
        return ask;
    }
}
let replaceOrKeep = checkIfVacationNeedsReplacement(verifyVacation);
console.log(replaceOrKeep);

function replacer(string){

}
