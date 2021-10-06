//Dan Prudhomme
"use strict";
//(5 points): As a developer, I want to make at least three commits with descriptive messages. -- count 8

//(5 points): As a user, I want a destination to be randomly selected for my day trip.
let randomDestination = ["Hawaii", "Tennessee", "Florida", "Tokyo", "Perth"];


//(5 points): As a user, I want a restaurant to be randomly selected for my day trip.
let randomFood = ["foul", "fish", "salad", "pork", "beef", "CANDY"];


//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
let randomTransportation = ["rental car", "bus", "train", "horseback", "walking", "running", "ship", "a Falcon X Rocket"];


//(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
let randomEntertainment = ["a theme park", "the local hangouts", "a shopping center", "the beach", "a local museum"];

let loopBreak = false;

function getRandomSingle(stringArray){
    let randomIndex = Math.round(Math.random() * (stringArray.length - 1));
    return stringArray[randomIndex];
}
//let randomTest = getRandomSingle(randomDestination);
// console.log(randomTest);

/*(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form 
of entertainment if I don’t like one or more of those things.*/
function getRandomAll(destinationArray, foodArray, transportationArray, entertainmentArray){
    let destFoodTransEntArray = [];
    let destination = "";
    let food = "";
    let transportation = "";
    let entertainment = "";

    destination = getRandomSingle(destinationArray);
    destFoodTransEntArray.push(destination);
    food = getRandomSingle(foodArray);
    destFoodTransEntArray.push(food);
    transportation = getRandomSingle(transportationArray);
    destFoodTransEntArray.push(transportation);
    entertainment = getRandomSingle(entertainmentArray);
    destFoodTransEntArray.push(entertainment);

    return destFoodTransEntArray;
}

let getRandomVacation = getRandomAll(randomDestination, randomFood, randomTransportation, randomEntertainment);

function longRandomVacationStringOutput(){
    alert(`Your random vacation is in ${getRandomVacation[0]} where you will eat ${getRandomVacation[1]}, travel by ${getRandomVacation[2]}, and visit ${getRandomVacation[3]}!`);
    console.log(`Your random vacation is in ${getRandomVacation[0]} where you will eat ${getRandomVacation[1]}, travel by ${getRandomVacation[2]}, and visit ${getRandomVacation[3]}!`);
}

longRandomVacationStringOutput();
let userPromptVacation = prompt("Is this vacaton okay with you? Type yes or no."); // needs to be in loop reseting each loop
function isVacationGood(string){
    string = string.toUpperCase();
    if(string == "N" || string == "NO" || string == "NA" || string == "NAW" || string == "HELL NO" || string == "HELL NAW" || string == "HELL NA" || string[0] == "N"){
        return false;
    }
    else if(string == "YEAH" || string == "YES" || string == "YA" || string == "YEA" || string == "HELL YES" || string == "HELL YEA" || string == "HELL YA" || string[0] == "Y"){
        return true;
    }
    else{
        alert("Opps, something went wrong, try again.");
        userPromptVacation = prompt("Is this vacaton okay with you? Type yes or no.");
        return isVacationGood(userPromptVacation);
    }
}
//let verifyVacation = isVacationGood(userPromptVacation);
//console.log(verifyVacation);

function checkIfVacationNeedsReplacement(bool){
    let ask;
    if (bool === true){
        alert("Enjoy your Vacation!");
        loopBreak = true;
    }
    else{
        ask = prompt("What part of your vacation would you like to replace? Type destination, food, transportation, entertainment or all.");
        return ask;
    }
}
//let replaceOrKeep = checkIfVacationNeedsReplacement(verifyVacation);

function replacer(string){
    let opps;
    string = string.toLowerCase();
    if(string === "destination"){
        getRandomVacation[0] = getRandomSingle(randomDestination);
        longRandomVacationStringOutput();
    }
    else if(string === "food"){
        getRandomVacation[1] = getRandomSingle(randomFood);
        longRandomVacationStringOutput();
    }
    else if(string === "transportation"){
        getRandomVacation[2] = getRandomSingle(randomTransportation);
        longRandomVacationStringOutput();
    }
    else if(string === "entertainment"){
        getRandomVacation[3] = getRandomSingle(randomEntertainment);
        longRandomVacationStringOutput();
    }
    else if(string === "all"){
        getRandomVacation = getRandomAll(randomDestination, randomFood, randomTransportation, randomEntertainment);
        longRandomVacationStringOutput();
    }
    else{
        alert("Opps, something went wrong, try again.");
        opps = prompt("What part of your vacation would you like to replace? Type destination, food, transportation, entertainment or all.");
        return replacer(opps);
    }
}


while(loopBreak === false){
    replacer(checkIfVacationNeedsReplacement(isVacationGood(userPromptVacation)));
    userPromptVacation = prompt("Is this vacaton okay with you? Type yes or no.");
}
