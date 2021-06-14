let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;


// Define your Spacecraft class here:
class Spacecraft {
    //properties 
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
    
    constructor(name: string, speed: number){
        this.name = name;
        this.speedMph = speed;
    }

    //create method
    getDaysToLocation(kilometersAway: number): number {
        return (((kilometersAway * this.milesPerKilometer)/this.speedMph)/24)
    }
}


// Create an instance of the class here:
let spaceShuttle: Spacecraft = new Spacecraft('Determination', 17500);
let milleniumFalcon: Spacecraft = new Spacecraft('Millenium Falcon', 100000);

// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log(`It takes ${milleniumFalcon.getDaysToLocation(kilometersToMars)} days for ${milleniumFalcon.name} to reach Mars`);
