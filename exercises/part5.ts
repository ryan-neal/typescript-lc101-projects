// Add your import statement here:
import { SpaceLocation } from './SpaceLocation';

let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

export class Spacecraft {
  //properties 
  milesPerKilometer: number;
  name: string;
  speedMph: number;

  constructor(name: string, speed: number) {
    this.name = name;
    this.speedMph = speed;
    this.milesPerKilometer = .621;
  }

  //create get DaysToLocation method.
  getDaysToLocation(planet: SpaceLocation): number {
    return (((planet.kilometersAway * this.milesPerKilometer)/this.speedMph)/24);
  }

  // Add the printDaysToLocation function here.
  printDaysToLocation(body: SpaceLocation): void {
    console.log(`${this.name} will take ${this.getDaysToLocation(body)} days to get to ${body.name}`);  
 }
}

// Paste in the code from step 6 here:

let spaceShuttle = new Spacecraft('Determination', 17500);

let saturn = new SpaceLocation("Saturn", 12000000000);
console.log(spaceShuttle.getDaysToLocation(saturn));
spaceShuttle.printDaysToLocation(saturn);
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));