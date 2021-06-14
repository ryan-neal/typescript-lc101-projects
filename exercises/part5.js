"use strict";
exports.__esModule = true;
// Add your import statement here:
var SpaceLocation_1 = require("./SpaceLocation");
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speed) {
        //properties 
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speed;
    }
    //create get DaysToLocation method.
    Spacecraft.prototype.getDaysToLocation = function (location) {
        return (((location.kilometersAway * this.milesPerKilometer) / this.speedMph) / 24);
    };
    // Add the printDaysToLocation function here.
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " will take " + this.getDaysToLocation(location) + " days to get to " + location.name);
    };
    return Spacecraft;
}());
// Paste in the code from step 6 here:
var spaceShuttle = new Spacecraft('Determination', 17500);
var saturn = new SpaceLocation_1.SpaceLocation("Saturn", 12000000000);
console.log(spaceShuttle.getDaysToLocation(saturn));
spaceShuttle.printDaysToLocation(saturn);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
