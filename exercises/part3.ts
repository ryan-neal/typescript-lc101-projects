// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway: number, speed: number): number {
    return ((kilometersAway * milesPerKilometer) / speed) / 24;
}




// Call the function and print the outputs for the Mars trip and the moon trip:
let toMars: number = getDaysToLocation(kilometersToMars, speedMph);
let toMoon: number = getDaysToLocation(kilometersToTheMoon, speedMph);
console.log(`${spacecraftName} will take ${toMars} days to reach Mars`);
console.log(`${spacecraftName} will take ${toMoon} days to reach the Moon`);