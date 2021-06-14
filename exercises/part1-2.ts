// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Add the 5 variables here
let spacecraftName: string = "Determination";
let speedMPH: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToMoon: number = 384400;
const milesPerKilometer: number = .621;


// Code part 2 here:
let milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMPH;
let daysToMars: number = hoursToMars/24;

// Code the output statement here (use a template literal):
console.log(`${spacecraftName} will take ${daysToMars} to reach Mars`);
