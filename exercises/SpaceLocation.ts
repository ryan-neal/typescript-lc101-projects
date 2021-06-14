// Paste in the provided code here:
export class SpaceLocation {
    kilometersAway: number;
    name: string;
 
    constructor(name: string, kilometersAway: number) {
       this.name = name;
       this.kilometersAway = kilometersAway;
    }
 }

 let saturn = new SpaceLocation("Saturn", 12000000000);
 let jupiter = new SpaceLocation("Jupiter", 688174472000)
 console.log(saturn);
 console.log(jupiter);