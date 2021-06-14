// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway, speed) {
    return ((kilometersAway * milesPerKilometer) / speed) / 24;
}
// Call the function and print the outputs for the Mars trip and the moon trip:
var toMars = getDaysToLocation(kilometersToMars, speedMph);
var toMoon = getDaysToLocation(kilometersToTheMoon, speedMph);
console.log(spacecraftName + " will take " + toMars + " to reach Mars");
console.log(spacecraftName + " will take " + toMoon + " to reach Mars");
