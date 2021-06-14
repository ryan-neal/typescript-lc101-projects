// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Add the 5 variables here
var spacecraftName = "Determination";
var speedMPH = 17500;
var kilometersToMars = 2250000000;
var kilometersToMoon = 384400;
var milesPerKilometer = .621;
// Code part 2 here:
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMPH;
var daysToMars = hoursToMars / 24;
// Code the output statement here (use a template literal):
console.log(spacecraftName + " will take " + daysToMars + " to reach Mars");
