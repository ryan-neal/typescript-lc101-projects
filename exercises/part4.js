var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// Define your Spacecraft class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speed) {
        //properties 
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speed;
    }
    //create method
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        return (((kilometersAway * this.milesPerKilometer) / this.speedMph) / 24);
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
var milleniumFalcon = new Spacecraft('Millenium Falcon', 100000);
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log(Spacecraft);
console.log("It takes " + milleniumFalcon.getDaysToLocation(kilometersToMars) + " days for " + milleniumFalcon.name + " to reach Mars");
